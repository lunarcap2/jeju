//<![CDATA[
$(function () {
    var nav = $('.menu_wrap');
    var navoffset = $('.menu_wrap').offset();


    $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {

            nav.css('position', 'fixed').css('top', 0);

        } else {
            nav.css('position', 'absolute').css('top', 159);

        }

    });
});

$(function () {
    $(window).scroll(function () { //화면 스크롤시 아래코드 실행
        var num = $(this).scrollTop(); // 스크롤값을 가져온다.
        if (num > 250) { //스크롤을 200 이상 했을시 보이고 이하는 감추기
            $(".top").css("display", "block");
            /*    $(".top").css("opacity","1");
                $(".logo").css("margin-top","10px"); */
        } else {
            $(".top").css("display", "none");
            /*    $(".top").css("opacity","0");
                $(".logo").css("margin-top","0px"); */
        }
    });

    //submenu
    $(".gnb>li").on("mouseover", function () {
        $(this).find(".submenu").stop().slideDown(300);

        $(".black_back").stop().fadeIn();
       // $(".black_back").css("display","block");
    })
    
    $(".gnb>li").on("mouseleave", function () {
        $(this).find(".submenu").stop().slideUp();
        
        $(".black_back").stop().fadeOut(); 
       // $(".black_back").css("display","none");
    })
    
    /* slide
    
    var mySlider4=$(".best_bg4 ul").bxSlider({
      mode:"horizontal",
        speed:400,
        pager:false,
        moveSlides:1,
        slideWidth:1920,
        minSlides:1,
        maxSlides:1,
        slideMargin:20,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn4").on("click",function(){
  mySlider4.goToPrevSlide();
  return false;
  });

  $(".next_btn4").on("click",function(){
  mySlider4.goToNextSlide();
  return false;
      
  });*/
    // visual slide

    var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
    
    // scroll top button
    var scrollTimeout;

    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop:0},500);
        return false;
    });

    $(window).scroll(function(){
        clearTimeout(scrollTimeout);
        if($(window).scrollTop()>400){
            scrollTimeout = setTimeout(function(){$('.scroll-top:hidden').fadeIn()},100);
        }
        else{
            scrollTimeout = setTimeout(function(){$('.scroll-top:visible').fadeOut()},100);    
        }
    });
});  
//]]>
