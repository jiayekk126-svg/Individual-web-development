const textElement = document.querySelector('.text');

// 点击时添加 show 类（触发浮现动画）
textElement.addEventListener('click', () => {
  textElement.classList.add('show');
});

// 鼠标离开时移除 show 类（触发消失动画）
textElement.addEventListener('mouseleave', () => {
  textElement.classList.remove('show');
});
//支持多次触发（防止重复添加类）
textElement.addEventListener('click', () => {
  if (!textElement.classList.contains('show')) {
    textElement.classList.add('show');
  }
});