 // 获取DOM元素
        const delayRange = document.getElementById('delayRange');
        const intervalRange = document.getElementById('intervalRange');
        const durationRange = document.getElementById('durationRange');
        const effectSelect = document.getElementById('effectSelect');
        const resetBtn = document.getElementById('resetDemo');
        const demoElements = document.querySelectorAll('.demo-element');
        const delayValue = document.getElementById('delayValue');
        const intervalValue = document.getElementById('intervalValue');
        const durationValue = document.getElementById('durationValue');
        
        // 初始化显示值
        delayValue.textContent = delayRange.value;
        intervalValue.textContent = intervalRange.value;
        durationValue.textContent = durationRange.value;
        
        // 更新滑块值显示
        delayRange.addEventListener('input', () => {
            delayValue.textContent = delayRange.value;
            applyDemoSettings();
        });
        
        intervalRange.addEventListener('input', () => {
            intervalValue.textContent = intervalRange.value;
            applyDemoSettings();
        });
        
        durationRange.addEventListener('input', () => {
            durationValue.textContent = durationRange.value;
            applyDemoSettings();
        });
        
        effectSelect.addEventListener('change', applyDemoSettings);
        
        // 应用设置到演示元素
        function applyDemoSettings() {
            const baseDelay = parseInt(delayRange.value);
            const interval = parseInt(intervalRange.value);
            const duration = parseInt(durationRange.value);
            const effect = effectSelect.value;
            
            // 清除现有动画
            demoElements.forEach(el => {
                el.style.animation = 'none';
                void el.offsetWidth; // 触发重排
            });
            
            // 应用新动画
            demoElements.forEach((el, index) => {
                const delay = baseDelay + (index * interval);
                el.style.animation = `${effect} ${duration}ms ease-out ${delay}ms forwards`;
            });
        }
        
        // 重置演示
        resetBtn.addEventListener('click', () => {
            // 重置滑块值
            delayRange.value = 500;
            intervalRange.value = 300;
            durationRange.value = 800;
            effectSelect.value = 'fadeInUp';
            
            // 更新显示值
            delayValue.textContent = '500';
            intervalValue.textContent = '300';
            durationValue.textContent = '800';
            
            // 应用设置
            applyDemoSettings();
        });
        
        // 添加额外的动画关键帧
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `, styleSheet.cssRules.length);
        
        styleSheet.insertRule(`
            @keyframes zoomIn {
                from {
                    opacity: 0;
                    transform: scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `, styleSheet.cssRules.length);
        
        // 初始化演示
        applyDemoSettings();