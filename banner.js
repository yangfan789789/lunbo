function Banner(){
    var body = $('' +
        '<div class="slider" id="slider">' +
        '<div class="slide"><img src="img/b5.png" alt=""></div>' +
        '<div class="slide"><img src="img/b1.png" alt=""></div>' +
        '<div class="slide"><img src="img/b2.png" alt=""></div>' +
        '<div class="slide"><img src="img/b3.png" alt=""></div>' +
        '<div class="slide"><img src="img/b4.png" alt=""></div>' +
        '<div class="slide"><img src="img/b5.png" alt=""></div>' +
        '<div class="slide"><img src="img/b1.png" alt=""></div>' +
        '</div>' +
        '<span id="left"><</span>' +
        '<span id="right">></span>' +
        '<ul class="nav" id="navs">' +
        '<li>1</li>' +
        '<li>2</li>' +
        '<li>3</li>' +
        '<li>4</li>' +
        '<li>5</li>' +
        '</ul>'
    );
    this.show=function() {
        $('#box').append(body);
        var slider = $('#slider');
        var left = $('#left');
        var right = $('#right');
        var li = $('li');
        var index = 1;
        var timer;
        var isMoving = false;
        Interval();

        slider.mouseover(function(){
            spanshow();
            clearInterval(timer);// 去除定时器
        });

        slider.mouseout(function(){
            spanhide();
            Interval();//开启定时器
        });

        left.mouseover(function(){
            spanshow();
            clearInterval(timer);// 去除定时器
        });

        left.mouseout(function(){
            spanhide();
            Interval();//开启定时器
        });

        right.mouseover(function(){
            spanshow();
            clearInterval(timer);// 去除定时器
        });

        right.mouseout(function(){
            spanhide();
            Interval();//开启定时器
        });

        li.mouseover(function(){
            spanshow();
            clearInterval(timer);//去除定时器
        });

        li.mouseout(function(){
            spanhide();
            Interval();//开启定时器
        })

        left.click(function(){
            if(isMoving){
                return;
            }
            isMoving = true;
            index--;
            animateshow();
        });

        right.click(function(){
            if(isMoving){
                return;
            }
            isMoving = true;
            index++;
            animateshow();
        });

        li.click(function(){
            var num = $(this).text();
            if(isMoving){
				return;
			}
			isMoving = true;
            index=parseInt(num);
            animateshow();
        })


        function Interval() {///定时器
            timer= setInterval(function(){
                index++;
                if(index>6){
                    index=1;
                }
                animateshow();
            },2000);
        }


        function animateshow(){//轮播图
            slider.animate({left:-1200*index+'px'},1000,function(){
                if(index==0){
                    index=5;
                    slider.css({left:-1200*index+'px'});
                }
                if(index==6){
                    index=1;
                    slider.css({left:-1200+index+'px'});
                }
                console.log(index);

                li.attr('class','');
                if(index>li.length){
                    li.eq(0).attr('class','active');
                }
                else if(index<=0){
                    li.eq(4).attr('class','active');
                }else{
                    li.eq(index-1).attr('class','active')
                }
                isMoving = false;
            })
        }


        function spanshow(){//图标
            left.css({opacity:1});
            right.css({opacity:1});
        }

        function spanhide(){//图标
            left.css({opacity:0});
            right.css({opacity:0});
        }


    }


};