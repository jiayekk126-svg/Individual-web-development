// 保存当前是否选中的状态
let isSelected = false;

// 获取整个元素的节点
const box = document.querySelector('.box');

// 获取select框节点
const select = document.querySelector('.select');

// 给整个元素添加点击事件【大家可以先忽略这部分】
box.addEventListener('click', function () {
  // 点击以后触发这个函数

  // 修改当前选中状态，取反即可
  isSelected = !isSelected;

  // 如果当前是选中状态、则添加img到select中
  if (isSelected) {
    // 创建一个img标签节点
    const img = document.createElement('img');

    // 设置img的src属性和样式，让其撑满select框
    img.src = 'https://style.youkeda.com/img/sandwich/check.png';
    img.setAttribute('style', 'width: 100%; height: 100%;');

    // 将这个节点添加到select框中
    select.appendChild(img);
  } else {
    // 如果不是选择状态，则清空内部子元素
    select.innerHTML = '';
  }
});