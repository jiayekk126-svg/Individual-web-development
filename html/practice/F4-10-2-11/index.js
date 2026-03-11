// 基本跳转
        document.getElementById('basicJumpBtn').addEventListener('click', function() {
            // 添加点击反馈
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 跳转中...';
            this.disabled = true;
            
            // 模拟跳转延迟
            setTimeout(() => {
                window.location.href = 'https://example.com';
            }, 800);
        });
        
        // 新标签页打开
        document.getElementById('newTabBtn').addEventListener('click', function() {
            window.open('https://example.com', '_blank');
        });
        
        // 延迟跳转
        document.getElementById('delayedJumpBtn').addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-hourglass-half"></i> 5秒后跳转...';
            this.disabled = true;
            
            setTimeout(() => {
                window.location.href = 'https://example.com';
            }, 5000);
        });
        
        // 确认后跳转
        document.getElementById('confirmJumpBtn').addEventListener('click', function() {
            const confirmed = confirm('您确定要跳转到示例网站吗？');
            if (confirmed) {
                window.location.href = 'https://example.com';
            }
        });
        
        // 动态URL跳转
        document.getElementById('dynamicJumpBtn').addEventListener('click', function() {
            const selector = document.getElementById('siteSelector');
            const targetUrl = selector.value;
            window.location.href = targetUrl;
        });
        
        // 带参数的跳转
        document.getElementById('paramJumpBtn').addEventListener('click', function() {
            const userId = '12345';
            const source = 'demo-page';
            const url = `https://example.com/profile?user=${userId}&source=${source}`;
            window.location.href = url;
        });