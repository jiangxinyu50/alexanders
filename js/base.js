// JavaScript Document
// 
//              ����by Alexander's
              
/*
 * ��Ļ�ߴ�
 */
function CalcMeasure() {
    var wH = $(window).height();
    var wW = $(window).width();
    $(".cbp-scroller-main >section").attr("style", "min-height:" + wH + "px;height:" + wH + "px;");
    $("#intro").attr("style", "min-height:" + wH + "px;height:" + wH + "px;");
    if (wW < 767) {
        wH = wH - 64;
        wW = wW - 64;
        $("#intro").attr("style", "min-height:" + wH + "px;height:" + wH + "px;");
    }
};
CalcMeasure();

/*
 * �������ز�
 * ��ֹ��������
 * �������ز�
 */
function ShowDiv(show_div,bg_div){
document.getElementById(show_div).style.display='block';
document.getElementById(bg_div).style.display='block';
$("body").height($(window).height()).css({  
  "overflow-y": "hidden"  						  //��ֹ����������������
});
$('#fade').bind("touchmove",function(e){
   e.preventDefault();
});
/*$('#MyDiv').bind("touchmove",function(e){       //��ֹ�����㻬��
    e.preventDefault();
});*/
var bgdiv = document.getElementById(bg_div);
bgdiv.style.width = document.body.scrollWidth;
// bgdiv.style.height = $(document).height();
$("#"+bg_div).height($(document).height());
};
//�رյ�����
function CloseDiv(show_div,bg_div)
{
document.getElementById(show_div).style.display='none';
document.getElementById(bg_div).style.display='none'; 
$("body").height($(window).height()).css({  
  "overflow-y": "scroll"  						//�ָ������Լ�������
});
};
//���˵����棬������ֲ�Ҳ�ǿ��Թرյ�
$('#fade').click(function(){
        if($("#fade").css("display")!="none") {
          $("#MyDiv").hide();
          $("#fade").hide();

          $("body").height($(window).height()).css({    //�ָ������Լ�������
              "overflow-y": "scroll"                        
          });
        }
    });
/*
 * Ʒ�ƹ��� ����
 * ������ظ���
 * �¼���ת��
 */
(function () {
   var showMoreNChildren = function ($children, n) {
   //��ʾĳjqueryԪ���µ�ǰn�����ص���Ԫ��
   var $hiddenChildren = $children.filter(":hidden");
   var cnt = $hiddenChildren.length;
   for ( var i = 0; i < n && i < cnt ; i++) {
         $hiddenChildren.eq(i).show();
    }
    return cnt-n;//���ػ�ʣ���������Ԫ�ص�����
    }
 
    //��ҳ�����е�class=showMorehandle��Ԫ�أ���֮�������ʾ�����������󶨵����Ϊ
    $(".showMoreNChildren").each(function () {
       var pagesize = $(this).attr("pagesize") || 10;
       var $children = $(this).children();
       if ($children.length > pagesize) {
       for (var i = pagesize; i < $children.length; i++) {
          $children.eq(i).hide();
        }
   
        $(".showMorehandle").insertAfter($(this)).click(function () {
          if (showMoreNChildren($children, pagesize) <= 0) {
          //���Ŀ��Ԫ���Ѿ�û�����ص���Ԫ���ˣ������ظ��İ�ť����ʾ���Լ������¼�
          $("#more").text("û���ˣ������ע���ں��˽���������Ȥ�Ĺ��°�~");
          $("#more").click(function(){
             window.open("/Index/wechat");        //�������ע������ת��΢��ɨ��ҳ��---> window.open("wechat.html");
            });
          };
        });
       }
    });
})();

/*
 * Ʒ�ƹ��� ��ת����
 */
$("#one").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=503042718&idx=1&sn=f37ed81852f88dcc7c040f5e0f388b03&scene=19#wechat_redirect');
});
$("#two").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=401870174&idx=3&sn=ced2d2b855a9405633ca3dc956eb91ef&scene=19#wechat_redirect');
});
$("#three").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MjM5NjYyMjM0MA==&mid=2650861571&idx=1&sn=1302271c41654c1c004a202a2061a374&mpshare=1&scene=1&srcid=0411tlGi1Ojd1oSmUYVypHSZ#wechat_redirect');
});
$("#four").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=402958704&idx=1&sn=b55b0a46c67c31847948c76bea089f1f&scene=19#wechat_redirect');
});
$("#five").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=503042347&idx=1&sn=ead8fa9afe2f58f1f3575cc4ae9dc941&scene=19#wechat_redirect');
});
/*-----------------------------------*/
$("#six").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=402529450&idx=1&sn=2d371ee84f7c0b62391471cdd9b6f92f&scene=19#wechat_redirect');
});
$("#seven").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=2650526352&idx=1&sn=46d0ba9034e0e1ccf05375a445101b08&scene=4#wechat_redirect');
});
$("#eight").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=503042172&idx=1&sn=cdf789d8b19b4064ae38ca6b2131c047&scene=19#wechat_redirect');
});
$("#nine").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=2650526202&idx=1&sn=02f7928e1e66e2050197c3500149e9ba&scene=19#wechat_redirect');
});
$("#ten").click(function(){
    window.open('http://mp.weixin.qq.com/mp/homepage?__biz=MzA4MDIzNTQyNA==&hid=1&sn=5153517780463ac205ba5c70780a879c#wechat_redirect');
});

/*
 * �������� ��ת����
 */
$("#sz").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=503042112&idx=1&sn=e9de1af14f4a85980494ab7cba6ce73c&scene=21#wechat_redirect');
});
$("#gz").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=503042113&idx=1&sn=6cefb4febe35e29ad93ea2cd5f3ffe0d&scene=21#wechat_redirect');
});
$("#cd").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=503042114&idx=1&sn=8e1400ce985941ef6f633d97e5f6f833&scene=21#wechat_redirect');
});
$("#company_eat").click(function(){
    window.open('company/eat.html');
});

/*
 * ��ע���� �����罻�˻���Ϣ
 */
$("#weibo").click(function(){
    window.open('http://weibo.com/ylsdsz?sudaref=www.baidu.com&retcode=6102&is_hot=1');
});
$("#twitter").click(function(){
    window.open('https://twitter.com/icalexanders');
});
$("#facebook").click(function(){
    window.open('https://www.facebook.com/alexanderschina/about/?entry_point=page_nav_about_item&tab=page_info');
});

// ��վ����
$("#beian").click(function(){
    window.open('http://www.miitbeian.gov.cn/');
});

/*
 * ������ ��ҳ������ť ������ �ȵ���Ч
 */
function onePager(offsetMain, offsetIntro) {
    //�������ƶ���Ч
    $('#nav').onePageNav({
        currentClass: "active",
        scrollOffset: offsetMain,
    });
    //��ҳ������ť��Ч
    $("scroll-down button").click(function () {
        $('html, body').animate({
            scrollTop: $(".").offset().top - offsetMain
        }, 700);
    });
    //�������¼���������ҳ�·������ֵ�����/������֮������������ҳ�������ص�����
    $(window).scroll(function () {
        var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
        if (windowTop > ($(window).height() - offsetIntro)) {
            $('header>nav').removeClass("ms-nav-anim");
        } else {
            $('header>nav').addClass("ms-nav-anim");
        }
    }).scroll();
}

//��ҳ�Ӳ� parallax.js ����
if ($(window).width() < 767) {
    onePager(64, 84);
} else {
    onePager(100, 120);
    $('#intro').parallax("50%", 0.1);
    $('#portfolio').parallax("50%", 0.1);

    new cbpScroller(document.getElementById('cbp-so-scroller'));
}
//��Ӽ����¼�
window.addEventListener('resize', function (event) {
    CalcMeasure();
});
//ҳ��ȴ�
$(window).load(function (e) {
    $(".cover-all").remove();
});
//ҳ�����ź�ͷ�������������¼�
var totalHeight = $(window).height();
$(".navbar-ex1-collapse").css("height", totalHeight + "px");
$(".navbar-ex1-collapse").css("max-height", totalHeight + "px");
window.addEventListener("resize", function () {
    if ($(window).width() < 767) {
        onePager(64, 84);
    } else {
        onePager(100, 120);
    }
    var totalHeight = $(window).height();
    $(".navbar-ex1-collapse").css("height", totalHeight + "px");
    $(".navbar-ex1-collapse").css("max-height", totalHeight + "px");
}, false);

/*
 * ҳ������ʱ
 * ������Ͻǡ�������ܡ��ı�ʶ
 * �����˵�
 */
$(".toggle-big-left").click(function (e) {
    if ($("#cbp-so-scroller").hasClass("outer-push") == true) {
        $("#cbp-so-scroller").removeClass("outer-push");
        $(".navbar-default").removeClass("visible");
    }else {
        $("#cbp-so-scroller").addClass("outer-push");
        $(".navbar-default").addClass("visible");
    }
    /*��������������ط�Ҳ���������󻬳��˵�*/
    $(document).one("click", function(){
      $("#cbp-so-scroller").removeClass("outer-push");
      $(".navbar-default").removeClass("visible");
    });
    e.stopPropagation();
    
});
  //�˵���ð���¼�Ҫֹͣ
  $("#navbar-collapse").on("click",function(e){
    e.stopPropagation();
  });/*���� end*/

//�ֲ���� ����
$('.carousel').carousel({
    interval: 5000
})
//�ص���ҳ~���ص�������
if ($("html").hasClass("no-touch") == true) {
    $('#intro').parallax("50%", 0.1);
    $('#portfolio').parallax("50%", 0.1);

    new cbpScroller(document.getElementById('cbp-so-scroller'));
}