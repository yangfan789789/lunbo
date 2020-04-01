var $a = (function() {
    var $dlg = $(''
          + '<div class="slider" id="slider">'//slider
          +'<div class="slide"><img src="img/b5.png" alt=""></div>'//slide
          +'<div class="slide"><img src="img/b1.png" alt=""></div>'
          +'<div class="slide"><img src="img/b2.png" alt=""></div>'
          +'<div class="slide"><img src="img/b3.png" alt=""></div>'
          +'<div class="slide"><img src="img/b4.png" alt=""></div>'
          +'<div class="slide"><img src="img/b5.png" alt=""></div>'
          +'<div class="slide"><img src="img/b1.png" alt=""></div>'
      +'</div>'
      +'<span id="left"><</span>'//left
      +'<span id="right">></span>'//right
      +'<ul class="nav" id="navs">'//nav
          +'<li>1</li>'
          +'<li>2</li>'
          +'<li>3</li>'
          +'<li>4</li>'
          +'<li>5</li>'
      +'</ul>');
  
    var $slider = $dlg.find('.slider'),
        $slide = $dlg.find('.slide'),
        $left = $dlg.find('.left'),
        $right = $dlg.find('.right'),
        $nav = $dlg.find('.nav'),

  
    function show() {
      $('#box').append($dlg);
    }
  
    return {show: show};
  }());