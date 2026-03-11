 // 图片资源映射
        const imageMap = {
            nature: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            tech: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            art: "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        };
        
        // 效果类型
        let effectType = "text"; // 默认文字效果
        
        // 获取DOM元素
        const hoverCards = document.querySelectorAll('.hover-card');
        const hoverEffect = document.getElementById('hoverEffect');
        const textEffectBtn = document.getElementById('textEffectBtn');
        const imageEffectBtn = document.getElementById('imageEffectBtn');
        const combinedEffectBtn = document.getElementById('combinedEffectBtn');
        
        // 设置效果类型
        textEffectBtn.addEventListener('click', () => setEffectType('text'));
        imageEffectBtn.addEventListener('click', () => setEffectType('image'));
        combinedEffectBtn.addEventListener('click', () => setEffectType('combined'));
        
        function setEffectType(type) {
            effectType = type;
            
            // 更新按钮状态
            textEffectBtn.classList.toggle('active', type === 'text');
            imageEffectBtn.classList.toggle('active', type === 'image');
            combinedEffectBtn.classList.toggle('active', type === 'combined');
        }
        
        // 为每个卡片添加鼠标事件
        hoverCards.forEach(card => {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        });
        
        function handleMouseEnter(e) {
            updateHoverEffect(e, this);
        }
        
        function handleMouseMove(e) {
            updateHoverEffect(e, this);
        }
        
        function handleMouseLeave() {
            hideHoverEffect();
        }
        
        function updateHoverEffect(e, card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            
            // 获取数据属性
            const text = card.dataset.text || "悬停效果";
            const imageKey = card.dataset.image || "nature";
            
            // 根据效果类型更新内容
            switch(effectType) {
                case 'text':
                    hoverEffect.innerHTML = `<div class="text-effect">${text}</div>`;
                    hoverEffect.className = "hover-effect text-effect visible";
                    break;
                    
                case 'image':
                    hoverEffect.innerHTML = `
                        <div class="image-effect">
                            <img src="${imageMap[imageKey]}" alt="${imageKey}">
                        </div>
                    `;
                    hoverEffect.className = "hover-effect image-effect visible";
                    break;
                    
                case 'combined':
                    hoverEffect.innerHTML = `
                        <div class="text-effect">${text}</div>
                        <div class="image-effect" style="margin-top: 15px;">
                            <img src="${imageMap[imageKey]}" alt="${imageKey}">
                        </div>
                    `;
                    hoverEffect.className = "hover-effect visible";
                    break;
            }
            
            // 定位到鼠标位置
            hoverEffect.style.left = `${x}px`;
            hoverEffect.style.top = `${y}px`;
        }
        
        function hideHoverEffect() {
            hoverEffect.classList.remove('visible');
            
            // 延迟清空内容，让消失动画完成
            setTimeout(() => {
                if (!hoverEffect.classList.contains('visible')) {
                    hoverEffect.innerHTML = '';
                }
            }, 300);
        }
        
        // 初始显示提示
        setTimeout(() => {
            hoverEffect.innerHTML = '<div class="text-effect">请将鼠标移动到卡片上</div>';
            hoverEffect.classList.add('visible');
            hoverEffect.style.left = '50%';
            hoverEffect.style.top = '50%';
            
            setTimeout(() => {
                hoverEffect.classList.remove('visible');
            }, 2000);
        }, 1000);