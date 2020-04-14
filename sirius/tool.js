//canvas_tool.js
window.tool = {};   
window.tool.captureMT = function(element, touchStartEvent, touchMoveEvent, touchEndEvent) {   
    'use strict';   
    var isTouch = ('ontouchend' in document);   
    var touchstart = null;   
    var touchmove = null   
    var touchend = null;   
    if(isTouch){   
      touchstart = 'touchstart';   
      touchmove = 'touchmove';   
      touchend = 'touchend';   
    }else{   
      touchstart = 'mousedown';   
      touchmove = 'mousemove';   
      touchend = 'mouseup';   
    };   
  
    /*传入Event对象*/   
    function getPoint(event) {   
      /*将当前的触摸点坐标值减去元素的偏移位置，返回触摸点相对于element的坐标值*/     event = event || window.event;
      var touchEvent = isTouch ? event.changedTouches[0]:event;
      var x = (touchEvent.pageX || touchEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);   
      x -= element.offsetLeft;   
  
      var y = (touchEvent.pageY || touchEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop);   
      y -= element.offsetTop;   
  
      return {x: x,y: y};
    };
    if(!element) return;   
    /*为element元素绑定touchstart事件*/   
    element.addEventListener(touchstart, function(event) {   
      event.point = getPoint(event);   
      touchStartEvent && touchStartEvent.call(this, event);   
    }, false);    
  
    /*为element元素绑定touchmove事件*/   
    element.addEventListener(touchmove, function(event) {   
      event.point = getPoint(event);   
      touchMoveEvent && touchMoveEvent.call(this, event);   
    }, false);    
  
    /*为element元素绑定touchend事件*/   
    element.addEventListener(touchend, function(event) {   
      event.point = getPoint(event);   
      touchEndEvent && touchEndEvent.call(this, event);   
    }, false);   
  };