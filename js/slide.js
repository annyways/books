

;(function($){

    sectionAnimate1();
    var swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        autoplay: false,
        autoplayDisableOnInteraction: false,
        loop:false,
        threshold :20,
        direction:"vertical",
        onSlideChangeEnd: function(swiper){
          switch(swiper.activeIndex){
              case 0:
                  break;
              case 1:
                  sectionAnimate2();
                  break;
              case 2:
                  sectionAnimate3();
                  break;
              case 3:
                  sectionAnimate4();
                  break;
              case 4:
                  sectionAnimate5();
                  break;
              case 5:
                  sectionAnimate6();
                  break;
          }
        }
    });


    function sectionAnimate1(){
        $(".new h2 .p1").addClass('teampic-flash');
        $('.new h2 .p1')[0].addEventListener("webkitAnimationEnd",function(){
            $('.new h2 .p2').addClass('teampic-flash');
        });
        $('.new h2 .p2')[0].addEventListener("webkitAnimationEnd",function(){
          $('.new-con').addClass('teampic-flash');
          $('.nc-pepper').animate({top:-66}, 2000);
          setTimeout(function(){
              $(".up-page1").addClass("up-arrow");
          },2000);
        });
    }
    function sectionAnimate2(){
        $("#txt2-1").addClass("teampic-flash");
        $('#txt2-1')[0].addEventListener("webkitAnimationEnd",function(){
              $("#txt2-2").addClass("teampic-flash");
        });
        $('#txt2-2')[0].addEventListener("webkitAnimationEnd",function(){
              $("#map").addClass("teampic-zoomIn");
        });
        $('#map')[0].addEventListener("webkitAnimationEnd",function(){
              $("#point").addClass("map-point-drop");
        });
        $('#point')[0].addEventListener("webkitAnimationEnd",function(){
              $("#phone").addClass("phone-up");
        });
        $('#phone')[0].addEventListener("webkitAnimationEnd",function(){
          $("#spark").addClass("teampic-zoomIn2");
          $("#phone-hand").addClass("phone-hand-up");
        });
        $('#phone-hand')[0].addEventListener("webkitAnimationEnd",function(){
              $("#point2").addClass("update");
        });
        $('#point2')[0].addEventListener("webkitAnimationEnd",function(){
              $("#up2").addClass("up-arrow");
        });

    }
    function sectionAnimate3(){
        $("#txt3-1").addClass("teampic-flash");
        $('#txt3-1')[0].addEventListener("webkitAnimationEnd",function(){
              $("#txt3-2").addClass("teampic-flash");
        });
        $('#txt3-2')[0].addEventListener("webkitAnimationEnd",function(){
              $("#cir3,.lay").addClass("teampic-zoomIn");
        });
        $('#cir3')[0].addEventListener("webkitAnimationEnd",function(){
              $("#book5").addClass("book-drop-5");
        });


        $("#books div").each(function(){
          $(this)[0].addEventListener("webkitAnimationEnd",function(e){
            var $prev = $(e.currentTarget).prev(),
                index = $prev.index()-0+1,
                padtop = $("#cir3").width()*(5-index)*0.06;
            $("#box").css("padding-top",padtop);
            $("#books").css("margin-top",-(padtop)/2 );
            $prev.addClass("book-drop-"+index);
          });
        });
        $('#book1')[0].addEventListener("webkitAnimationEnd",function(){
          $("#box").addClass("shaking");
          $("#up3").addClass("up-arrow");
        });
    }
    function sectionAnimate4(){
        $(".teampic h2 .p1").addClass('teampic-flash');
        $('.teampic h2 .p1')[0].addEventListener("webkitAnimationEnd",function(){
            $('.teampic h2 .p2').addClass('teampic-flash');
        });
        $('.teampic h2 .p2')[0].addEventListener("webkitAnimationEnd",function(){
          $('.teampic-con').addClass('teampic-zoomIn');
          $('.teampic-cloud').addClass('teampic-wobble');
        });
        $('.teampic-con')[0].addEventListener("webkitAnimationEnd",function(){
          $('.teampic-hand01').addClass('teampic-slideInLeft');
        });
        $('.teampic-hand01')[0].addEventListener("webkitAnimationEnd",function(){
          $('.teampic-hand02').addClass('teampic-slideInRight');
        });
        $('.teampic-hand02')[0].addEventListener("webkitAnimationEnd",function(){
          $(".up-page4").addClass("up-arrow");
        });

    }
    function sectionAnimate5(){
        $("#txt5-1").addClass("teampic-flash");

        $('#txt5-1')[0].addEventListener("webkitAnimationEnd",function(){
            $("#txt5-2").addClass("teampic-flash");
        });
        $('#txt5-2')[0].addEventListener("webkitAnimationEnd",function(){
            $("#cir5").addClass("teampic-zoomIn");
        });
        $('#cir5')[0].addEventListener("webkitAnimationEnd",function(){
            $("#hand3").addClass("handsup");
        });
        $('#hand3')[0].addEventListener("webkitAnimationEnd",function(){
            $("#hand2").addClass("handsup");
        });
        $('#hand2')[0].addEventListener("webkitAnimationEnd",function(){
            $("#hand4").addClass("handsup");
        });
        $('#hand4')[0].addEventListener("webkitAnimationEnd",function(){
            $("#hand1").addClass("handsup");
        });
        $('#hand1')[0].addEventListener("webkitAnimationEnd",function(){
            $("#hand5").addClass("handsup");
        });
        $('#hand5')[0].addEventListener("webkitAnimationEnd",function(){
            $("#up5").addClass("up-arrow");
        });
    }
    function sectionAnimate6(){
        $('.email-h2').addClass("teampic-flash");
        $('.email-h2 div').addClass('teampic-wobble02');
        $('.email-h2')[0].addEventListener("webkitAnimationEnd",function(){
            $(".email-con").addClass("teampic-flash");
            $(".email-people").addClass("email-fadeInUpBig");
        });
    }

    // 微信分享事件绑定
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": "http://m.los.jd.com/doc/img/emailpic-04.png",
                "img_width": "640",
                "img_height": "640",
                "link": window.location.href,
                "desc": "外事谷歌百度，内事JD文库",
                "title": "JD文库"
            }, function (res) {
                _report('send_msg', res.err_msg);
            })
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": "http://m.los.jd.com/doc/img/emailpic-04.png",
                "img_width": "640",
                "img_height": "640",
                "link": window.location.href,
                "desc": "外事谷歌百度，内事JD文库",
                "title": "JD文库"
            }, function (res) {
                _report('timeline', res.err_msg);
            });
        });
    }, false);
})(Zepto);
