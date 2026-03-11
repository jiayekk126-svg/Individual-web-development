const body = document.body;

//方法一，用for循环给每个img节点绑定点击事件
const images = document.querySelectorAll('.box img');

// 遍历图片，为每个图片绑定点击事件
images.forEach(img => {
  img.addEventListener('click', function() {
    // 1. 获取点击图片的地址（this 指向当前点击的图片元素）
    const imgUrl = this.src; 
    // 2. 修改 body 的背景图（CSS 中背景图需用 url() 包裹）
    body.style.backgroundImage = `url(${imgUrl})`;
  });
});




/*方法二，利用事件冒泡中的委托，给父节点box 设定点击事件
const box = document.querySelector('.box');

box.addEventListener('click', function(e) {
  // 注意box区域比img大，如果点击在空白间隔区域，那么返回的节点将不会是IMG，需要特殊处理一下
  if (e.target.nodeName === 'IMG') {
    document.body.style.backgroundImage = `url(${e.target.src})`;
  }
});

*/