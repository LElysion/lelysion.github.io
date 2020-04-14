(function() {
  let mode = 1;

  let canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  canvas.addEventListener('click', function() {
    mode = mode == 1 ? 2 : 1;
  })
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
        let radius = this.random(10, 35);
        res.push({
          x: this.random(0, this.getWidth()),
          y: this.random(0, this.getHeight()),
          vx: this.random(0.01, 2, 'FIXED'),
          vy: this.random(0.01, 2, 'FIXED'),
          radius: radius,
          color: `rgb(${R}, ${G}, ${B})`,
          startAngle: 0,//开始弧度
          endAngel: Math.PI*2,//结束弧度
          anticlockwise: true,//逆时针， false:顺时针
          animateTimes: 0
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
          circle.x += circle.vx;//_this.random(0.05, 0.15, 'FIXED');
          circle.y += circle.vy;//_this.random(0.05, 0.15, 'FIXED');
          circle.globalAlpha -= _this.vglobalAlpha;
          if(circle.animateTimes%360 === 0) {
            console.log('触发')
            circle.vx = circle.vx + _this.random(0.01, 1, 'FIXED') + (_this.random(0, 100) > 50 ? -1 : 1)
            circle.vy = circle.vy + _this.random(0.01, 1, 'FIXED') + (_this.random(0, 100) > 50 ? -1 : 1)
          }

          if(mode === 1) {
            if(circle.x >= _this.getWidth() + circle.radius || circle.y < -circle.radius) {
              circle.animateTimes = 0;
              let R = Math.floor(Math.random() * 255);
              let G = Math.floor(Math.random() * 255);
              let B = Math.floor(Math.random() * 255);
              circle.radius = _this.random(10, 35)
              circle.color = `rgb(${R}, ${G}, ${B})`
              let s1 = _this.random(0.01, 2, 'FIXED');
              let s2 = _this.random(0.01, 2, 'FIXED');
              circle.vx = s1 //* (_this.random(0, 100) > 50 ? -1 : 1);
              circle.vy = s2 //* (_this.random(0, 100) > 50 ? -1 : 1);
              if(_this.random(0, 10) > 5) {
                circle.x = _this.random(0, 0, 'FIXED') - circle.radius; 
                circle.y = _this.random(0, _this.getHeight(), 'FIXED');
              } else {
                circle.y = _this.random(0, 0, 'FIXED') - circle.radius; 
                circle.x = _this.random(0, _this.getWidth(), 'FIXED')
              }
            }
          } else if(mode === 2){
            if(
              (circle.x <= circle.radius || circle.x > _this.getWidth() - circle.radius)
              || (circle.y <= circle.radius || circle.y > _this.getHeight() - circle.radius )
            ) {
              let R = Math.floor(Math.random() * 255);
              let G = Math.floor(Math.random() * 255);
              let B = Math.floor(Math.random() * 255);
              if(circle.animateTimes > 30) {
                circle.animateTimes = 0;
                circle.color = `rgb(${R}, ${G}, ${B})`;
              }
              if(circle.x <= circle.radius) circle.x = circle.radius;
              if(circle.x >= _this.getWidth() - circle.radius) circle.x = _this.getWidth() - circle.radius;
              if(circle.y <= circle.radius) circle.y = circle.radius;
              if(circle.y > _this.getHeight() - circle.radius) circle.y = _this.getHeight() - circle.radius;
              let s1 = _this.random(0.01, 2, 'FIXED');
              let s2 = _this.random(0.01, 2, 'FIXED');
              circle.vx = s1 * (_this.random(0, 100) > 50 ? -1 : 1);
              circle.vy = s2 * (_this.random(0, 100) > 50 ? -1 : 1);
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
  console.log(c.random(0.1, 1, 'FIXED'))
}())