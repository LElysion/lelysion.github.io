
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

let canvas = document.getElementById('canvas');
canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(150, 75, 50, 0, Math.PI * 2);
let gradient = ctx.createRadialGradient(150, 75, 150, 75, 300, 175);
gradient.addColorStop(0, 'Crimson');
gradient.addColorStop(1, 'DarkMagenta');
ctx.fillStyle = gradient;
ctx.fill()
ctx.createLinearGradient(10, 10, 20, 20)
ctx.stroke();


function Circle({x, y, vx, vy, radius, color, time}){
  this.animated = true
  this.x = x; // 初始x坐标
  this.y = y; // 初始y坐标
  this.vx = vx; // x偏移速度
  this.vy = vy; // y偏移速度
  this.radius = radius;
  this.time = time;
  this.color = color || ['LightPink', 'PaleVioletRed', 'DeepPink', 'MediumVioletRed', 
  'Magenta', 'DarkVoilet', 'SlateBlue','Navy', 
  'RoyalBlue', 'DarkSlateGray', 'Auqamarin', 'MintCream', 
  'Olive', 'Gold','Tomato', 'Red'];
  this.fps = 60;//帧数
  this.globalAlpha = 1;//透明度
  this.vglobalAlpha  = 0.02;//透明渐变
}


//canvas事件
function mousedown(event) {
  let ex = event.point.x;//获取当前鼠标所在区域
  let ey = event.point.y;//获取当前鼠标所在区域
  // c.create(ex, ey);
  console.log({ ex, ey });
}
function mousemove(event) {
  //document.querySelector('.pointX1').innerHTML = event.point.x;
  //document.querySelector('.pointY1').innerHTML = event.point.y;
}
function mouseup(event) {
  let ex = event.point.x;//获取当前鼠标所在区域
  let ey = event.point.y;//获取当前鼠标所在区域
}

tool.captureMT(canvas, mousedown, mousemove, mouseup);






