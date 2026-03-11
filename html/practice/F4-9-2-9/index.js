const numberDivs = document.querySelectorAll('#number div');
const numberSpans = document.querySelectorAll('#number span');

// 布置钟盘
for (let i = 0; i < numberDivs.length; i++) {
  numberDivs[i].style.transform = `rotate(${i * 30}deg)`;
}
// 纠正文字旋转偏移
for (let j = 0; j < numberSpans.length; j++) {
  numberSpans[j].style.transform = `rotate(${j * -30}deg)`;
}

const hourhand = document.getElementById('houre');
const minhand = document.getElementById('minute');
const sechand = document.getElementById('second');

updateClock();
setInterval(updateClock,1000);

function updateClock(){
  const time = new Date();
  const hours = time.getHours() %12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  const secdeg = seconds * 6;
  const mindeg = minutes * 6 + seconds * 0.1;
  const hourdeg = hours * 30 + minutes * 0.5 + seconds * (0.5 / 60);


  hourhand.style.transform = `rotate(${hourdeg}deg)`;
  minhand.style.transform = `rotate(${mindeg}deg)`;
  sechand.style.transform = `rotate(${secdeg}deg)`;
}

