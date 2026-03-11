// 移动端下拉菜单点击展开（仅在小屏幕生效）
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.has-dropdown');
  // 检测屏幕宽度，仅在移动端绑定点击事件
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  
  if (isMobile) {
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止链接跳转
        dropdown.classList.toggle('active'); // 切换active类
      });
    });
  }

  // 背景滑动逻辑（不变）
  const bgTrack = document.querySelector('.bg-track');
  const bgItems = document.querySelectorAll('.bg-item');
  let currentIndex = 0;
  const totalItems = bgItems.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    bgTrack.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
  }, 5000);
});
