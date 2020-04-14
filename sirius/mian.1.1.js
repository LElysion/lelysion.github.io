(function() {
  let canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  let context = canvas.getContext('2d');
  let timer = null;

  context.globalAlpha = 0.5;

  function Circle(
    x, y, vx, vy, radius, color, time
  ) {
    this.x = x;
    this.y = y;
    this.vx = vx || 0;
    this.vy = vy || 0;
    this.radius = radius;
    this.color = color;
    this.fps = 60;
    this.globalAlpha = 1;
    this.vglobalAlpha = 0.2;
    this.startAngle = 0;
    this.endAngel = 0;
    this.animateTimes = 0;
  }

  Circle.prototype = {
    getWidth() {
      return canvas.width;
    },
    getHeight() {
      return canvas.height;
    },
    random(min, max, type = 'INT', plus = 1) {
      if(type === 'INT') 
      return parseInt(Math.random() * (max - min) + min);
      if(type === 'FIXED')
      return (Math.random() * (max - min) + min).toFixed(2) * plus;
    },
    clearCanvas() {
      context.clearRect(0, 0, this.getWidth(), this.getHeight());
    },
    createCircles() {
      let _this = this;
      let numbers = 50;
      let res = [];
      for(let i = 0; i< numbers; i++) {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        res.push({
          x: this.random(0, this.getWidth()),
          y: this.random(0, this.getHeight()),
          vx: 0.1,
          vy: 0.1,
          radius: this.random(10, 35),
          color: `rgb(${R}, ${G}, ${B})`,
          startAngle: 0,//开始弧度
          endAngel: Math.PI*2,//结束弧度
          anticlockwise: true,//逆时针， false:顺时针
        })
      }
      return res;
    },
    draw(circle) {
      context.beginPath();
      context.arc(
        circle.x,
        circle.y,
        circle.radius,
        circle.startAngle,
        circle.endAngel,
        circle.anticlockwise
      );
      context.closePath();
      context.fillStyle = circle.color;
      context.globalAlpha = circle.globalAlpha;
      context.fill();
    },
    animate(circles) {
      let _this = this;
      window.cancelAnimationFrame(timer);
      timer = window.requestAnimationFrame(function() {
        _this.clearCanvas();
        circles.forEach(circle => {
          circle.animateTimes += 1;
          circle.x += _this.random(0.05, 0.15, 'FIXED');
          circle.y += _this.random(0.05, 0.15, 'FIXED');
          circle.globalAlpha -= _this.vglobalAlpha;

          if(circle.x >= _this.getWidth() + circle.radius || circle.y < -circle.radius) {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            circle.radius = _this.random(10, 35)
            circle.color = `rgb(${R}, ${G}, ${B})`
            if(_this.random(0, 10) > 5) {
              circle.x = _this.random(0, 0, 'FIXED') - circle.radius; 
              circle.y = _this.random(0, _this.getHeight(), 'FIXED');
            } else {
              circle.y = _this.random(0, 0, 'FIXED') - circle.radius; 
              circle.x = _this.random(0, _this.getWidth(), 'FIXED')
            }
          }
          _this.draw(circle);
        })
        _this.animate(circles)
      })
    },
    start() {
      let circles = this.createCircles();
      console.log({ circles })
      this.animate(circles);
    }
  }

  let c = new Circle();
  c.start();
}())