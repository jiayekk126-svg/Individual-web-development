document.addEventListener('DOMContentLoaded', () => {
            // 游戏常量
            const GRID_SIZE = 4;
            const CELL_SIZE_PERCENT = 22; // 百分比
            const CELL_GAP_PERCENT = 4; // 百分比
            
            // 游戏状态
            let grid = [];
            let score = 0;
            let bestScore = localStorage.getItem('bestScore') || 0;
            let gameOver = false;
            let gameWon = false;
            let history = [];
            let tileElements = {}; // 存储所有方块元素
            let tileIdCounter = 0; // 方块ID计数器
            
            // DOM 元素
            const gridContainer = document.querySelector('.grid-container');
            const tileContainer = document.getElementById('tile-container');
            const scoreDisplay = document.getElementById('score');
            const bestScoreDisplay = document.getElementById('best-score');
            const newGameButton = document.getElementById('new-game');
            const restartButton = document.getElementById('restart-button');
            const undoButton = document.getElementById('undo-btn');
            const gameMessage = document.getElementById('game-message');
            const messageText = document.getElementById('message-text');
            
            // 初始化游戏
            function initGame() {
                createGrid();
                addStartTiles();
                updateBestScore();
                setupInput();
            }
            
            // 创建网格
            function createGrid() {
                grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
            }
            
            // 添加初始方块
            function addStartTiles() {
                addRandomTile();
                addRandomTile();
            }
            
            // 在随机空位置添加方块
            function addRandomTile() {
                if (!hasEmptyCell()) return;
                
                let value = Math.random() < 0.9 ? 2 : 4;
                let emptyCells = [];
                
                for (let y = 0; y < GRID_SIZE; y++) {
                    for (let x = 0; x < GRID_SIZE; x++) {
                        if (grid[y][x] === 0) {
                            emptyCells.push({x, y});
                        }
                    }
                }
                
                if (emptyCells.length > 0) {
                    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                    grid[randomCell.y][randomCell.x] = value;
                    createTile(randomCell.x, randomCell.y, value, true);
                }
            }
            
            // 创建方块元素
            function createTile(x, y, value, isNew = false) {
                const tileId = tileIdCounter++;
                const tile = document.createElement('div');
                tile.classList.add('tile', `tile-${value}`);
                if (isNew) {
                    tile.classList.add('new');
                }
                tile.textContent = value;
                tile.dataset.x = x;
                tile.dataset.y = y;
                tile.dataset.id = tileId;
                tile.dataset.value = value;
                
                // 使用百分比定位，确保对齐
                const left = x * (CELL_SIZE_PERCENT + CELL_GAP_PERCENT) + CELL_GAP_PERCENT + '%';
                const top = y * (CELL_SIZE_PERCENT + CELL_GAP_PERCENT) + CELL_GAP_PERCENT + '%';
                tile.style.left = left;
                tile.style.top = top;
                
                tileContainer.appendChild(tile);
                tileElements[tileId] = { element: tile, x, y, value };
                return tile;
            }
            
            // 更新所有方块位置
            function updateTiles() {
                // 先移除所有tile
                tileContainer.innerHTML = '';
                tileElements = {};
                
                // 重新创建所有tile
                for (let y = 0; y < GRID_SIZE; y++) {
                    for (let x = 0; x < GRID_SIZE; x++) {
                        if (grid[y][x] !== 0) {
                            createTile(x, y, grid[y][x]);
                        }
                    }
                }
            }
            
            // 移动方块
            function move(direction) {
                if (gameOver || gameWon) return;
                
                saveState();
                let moved = false;
                let pointsEarned = 0;
                let mergedTiles = []; // 记录合并的方块
                
                // 创建一个移动前的网格快照
                const gridBeforeMove = JSON.parse(JSON.stringify(grid));
                
                // 根据方向确定遍历顺序
                let xStart, xEnd, xStep, yStart, yEnd, yStep;
                if (direction === 'left') {
                    xStart = 0; xEnd = GRID_SIZE; xStep = 1;
                    yStart = 0; yEnd = GRID_SIZE; yStep = 1;
                } else if (direction === 'right') {
                    xStart = GRID_SIZE - 1; xEnd = -1; xStep = -1;
                    yStart = 0; yEnd = GRID_SIZE; yStep = 1;
                } else if (direction === 'up') {
                    xStart = 0; xEnd = GRID_SIZE; xStep = 1;
                    yStart = 0; yEnd = GRID_SIZE; yStep = 1;
                } else if (direction === 'down') {
                    xStart = 0; xEnd = GRID_SIZE; xStep = 1;
                    yStart = GRID_SIZE - 1; yEnd = -1; yStep = -1;
                }
                
                // 处理每一行/列
                for (let y = yStart; y !== yEnd; y += yStep) {
                    for (let x = xStart; x !== xEnd; x += xStep) {
                        if (grid[y][x] === 0) continue;
                        
                        let newX = x;
                        let newY = y;
                        let tileValue = grid[y][x];
                        
                        // 计算新位置
                        if (direction === 'left' && x > 0) {
                            while (newX > 0 && grid[newY][newX - 1] === 0) {
                                newX--;
                            }
                        } else if (direction === 'right' && x < GRID_SIZE - 1) {
                            while (newX < GRID_SIZE - 1 && grid[newY][newX + 1] === 0) {
                                newX++;
                            }
                        } else if (direction === 'up' && y > 0) {
                            while (newY > 0 && grid[newY - 1][newX] === 0) {
                                newY--;
                            }
                        } else if (direction === 'down' && y < GRID_SIZE - 1) {
                            while (newY < GRID_SIZE - 1 && grid[newY + 1][newX] === 0) {
                                newY++;
                            }
                        }
                        
                        // 检查是否可以合并
                        if ((direction === 'left' && newX > 0 && grid[newY][newX - 1] === grid[y][x]) ||
                            (direction === 'right' && newX < GRID_SIZE - 1 && grid[newY][newX + 1] === grid[y][x]) ||
                            (direction === 'up' && newY > 0 && grid[newY - 1][newX] === grid[y][x]) ||
                            (direction === 'down' && newY < GRID_SIZE - 1 && grid[newY + 1][newX] === grid[y][x])) {
                            
                            if (direction === 'left') newX--;
                            else if (direction === 'right') newX++;
                            else if (direction === 'up') newY--;
                            else if (direction === 'down') newY++;
                            
                            // 记录合并的方块
                            mergedTiles.push({x: newX, y: newY, value: grid[y][x] * 2});
                        }
                        
                        // 如果位置有变化
                        if (newX !== x || newY !== y) {
                            moved = true;
                            if (grid[newY][newX] === 0) {
                                // 移动到空位置
                                grid[newY][newX] = grid[y][x];
                                grid[y][x] = 0;
                            } else {
                                // 合并方块
                                let mergedValue = grid[y][x] * 2;
                                grid[newY][newX] = mergedValue;
                                grid[y][x] = 0;
                                pointsEarned += mergedValue;
                                
                                // 检查是否达到2048
                                if (mergedValue === 2048 && !gameWon) {
                                    gameWon = true;
                                    showMessage('恭喜！你赢了！', true);
                                }
                            }
                        }
                    }
                }
                
                if (moved) {
                    // 更新分数
                    score += pointsEarned;
                    updateScore();
                    
                    // 先更新tile位置
                    animateTiles(gridBeforeMove, direction, mergedTiles);
                    
                    // 添加新的方块
                    setTimeout(() => {
                        addRandomTile();
                        
                        if (!hasMovesLeft()) {
                            gameOver = true;
                            showMessage('游戏结束！', false);
                        }
                    }, 300);
                }
            }
            
            // 动画移动方块
            function animateTiles(gridBeforeMove, direction, mergedTiles) {
                // 先移除所有tile
                tileContainer.innerHTML = '';
                tileElements = {};
                
                // 重新创建所有tile
                for (let y = 0; y < GRID_SIZE; y++) {
                    for (let x = 0; x < GRID_SIZE; x++) {
                        if (grid[y][x] !== 0) {
                            const tile = createTile(x, y, grid[y][x]);
                            
                            // 检查这个方块是否是合并产生的
                            const isMerged = mergedTiles.some(t => t.x === x && t.y === y);
                            if (isMerged) {
                                setTimeout(() => {
                                    tile.classList.add('merged');
                                    setTimeout(() => {
                                        tile.classList.remove('merged');
                                    }, 200);
                                }, 100);
                            }
                        }
                    }
                }
            }
            
            // 保存当前状态用于撤销
            function saveState() {
                history.push({
                    grid: JSON.parse(JSON.stringify(grid)),
                    score: score
                });
                
                // 限制历史记录长度
                if (history.length > 5) {
                    history.shift();
                }
            }
            
            // 撤销操作
            function undoMove() {
                if (history.length === 0 || gameOver || gameWon) return;
                
                const prevState = history.pop();
                grid = prevState.grid;
                score = prevState.score;
                updateScore();
                updateTiles();
                gameOver = false;
                gameWon = false;
                hideMessage();
            }
            
            // 检查是否有空单元格
            function hasEmptyCell() {
                for (let y = 0; y < GRID_SIZE; y++) {
                    for (let x = 0; x < GRID_SIZE; x++) {
                        if (grid[y][x] === 0) {
                            return true;
                        }
                    }
                }
                return false;
            }
            
            // 检查是否还有可移动的步数
            function hasMovesLeft() {
                // 检查是否有空单元格
                if (hasEmptyCell()) return true;
                
                // 检查水平方向是否有可合并的相邻方块
                for (let y = 0; y < GRID_SIZE; y++) {
                    for (let x = 0; x < GRID_SIZE - 1; x++) {
                        if (grid[y][x] === grid[y][x + 1]) {
                            return true;
                        }
                    }
                }
                
                // 检查垂直方向是否有可合并的相邻方块
                for (let x = 0; x < GRID_SIZE; x++) {
                    for (let y = 0; y < GRID_SIZE - 1; y++) {
                        if (grid[y][x] === grid[y + 1][x]) {
                            return true;
                        }
                    }
                }
                
                return false;
            }
            
            // 更新分数显示
            function updateScore() {
                scoreDisplay.textContent = score;
                if (score > bestScore) {
                    bestScore = score;
                    localStorage.setItem('bestScore', bestScore);
                    updateBestScore();
                }
            }
            
            // 更新最高分显示
            function updateBestScore() {
                bestScoreDisplay.textContent = bestScore;
            }
            
            // 显示消息
            function showMessage(text, isWin) {
                messageText.textContent = text;
                gameMessage.classList.add(isWin ? 'game-won' : 'game-over');
            }
            
            // 隐藏消息
            function hideMessage() {
                gameMessage.classList.remove('game-won', 'game-over');
            }
            
            // 开始新游戏
            function newGame() {
                createGrid();
                tileContainer.innerHTML = '';
                tileElements = {};
                tileIdCounter = 0;
                score = 0;
                gameOver = false;
                gameWon = false;
                history = [];
                updateScore();
                addStartTiles();
                updateTiles();
                hideMessage();
            }
            
            // 设置输入控制
            function setupInput() {
                // 键盘控制
                document.addEventListener('keydown', event => {
                    if (gameOver || gameWon) return;
                    
                    if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        move('up');
                    } else if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        move('down');
                    } else if (event.key === 'ArrowLeft') {
                        event.preventDefault();
                        move('left');
                    } else if (event.key === 'ArrowRight') {
                        event.preventDefault();
                        move('right');
                    }
                });
                
                // 按钮控制
                newGameButton.addEventListener('click', newGame);
                restartButton.addEventListener('click', newGame);
                undoButton.addEventListener('click', undoMove);
                
                // 触摸滑动控制
                let touchStartX, touchStartY;
                let isTouchMoving = false;
                
                gridContainer.addEventListener('touchstart', event => {
                    touchStartX = event.touches[0].clientX;
                    touchStartY = event.touches[0].clientY;
                    event.preventDefault();
                }, { passive: false });
                
                gridContainer.addEventListener('touchmove', event => {
                    if (!touchStartX || !touchStartY || isTouchMoving) return;
                    
                    const touchX = event.touches[0].clientX;
                    const touchY = event.touches[0].clientY;
                    const dx = touchX - touchStartX;
                    const dy = touchY - touchStartY;
                    
                    // 如果移动距离超过10px，则认为开始滑动
                    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
                        isTouchMoving = true;
                        
                        if (Math.abs(dx) > Math.abs(dy)) {
                            // 水平滑动
                            if (dx > 0) {
                                move('right');
                            } else {
                                move('left');
                            }
                        } else {
                            // 垂直滑动
                            if (dy > 0) {
                                move('down');
                            } else {
                                move('up');
                            }
                        }
                    }
                    
                    event.preventDefault();
                }, { passive: false });
                
                gridContainer.addEventListener('touchend', event => {
                    touchStartX = null;
                    touchStartY = null;
                    isTouchMoving = false;
                });
            }
            
            // 初始化游戏
            initGame();
        });