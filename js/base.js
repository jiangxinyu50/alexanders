// JavaScript Document
// 
//              ——by Alexander's

//页面等待
$(window).load(function (e) {
    $(".cover-all").remove();
});
              
/*
 * 屏幕尺寸
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
}
/*CalcMeasure();*/
var wW = $(window).width();
if(wW <768){
   $("#intro img").attr('src','images/banner_mobile.jpg');
}

//添加监听事件
window.addEventListener('resize', function (event) {
    /*CalcMeasure();*/
});

/*
 * 弹出隐藏层
 * 禁止触摸滑动
 * 隐藏隐藏层
 */
function ShowDiv(show_div,bg_div){
    document.getElementById(show_div).style.display='block';
    document.getElementById(bg_div).style.display='block';
    $("body").height($(window).height()).css({
        "overflow-y": "hidden"  						  //禁止触摸滑动，滚动条
    });
    $('#fade').bind("touchmove",function(e){
        e.preventDefault();
    });
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = document.body.scrollWidth;
    $("#"+bg_div).height($(document).height());
}

//关闭弹出层
function CloseDiv(show_div,bg_div)
{
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
    $("body").height($(window).height()).css({
        "overflow-y": "scroll"  						//恢复滑动以及滚动条
    });
}

//除了点击叉叉，点击遮罩层也是可以关闭的
$('#fade').click(function(){
    if($("#fade").css("display")!="none") {
        $("#MyDiv").hide();
        $("#fade").hide();

        $("body").height($(window).height()).css({    //恢复滑动以及滚动条
            "overflow-y": "scroll"
        });
    }
});

/*
 * 品牌故事 部分
 * 点击加载更多
 * 事件跳转等
 */
/*(function () {
    var showMoreNChildren = function ($children, n) {
        //显示某jquery元素下的前n个隐藏的子元素
        var $hiddenChildren = $children.filter(":hidden");
        var cnt = $hiddenChildren.length;
        for ( var i = 0; i < n && i < cnt ; i++) {
            $hiddenChildren.eq(i).show();
        }
        return cnt-n;//返回还剩余的隐藏子元素的数量
    };

    //对页中现有的class=showMorehandle的元素，在之后添加显示更多条，并绑定点击行为
    $(".showMoreNChildren").each(function () {
        var pagesize = $(this).attr("pagesize") || 10;
        var $children = $(this).children();
        if ($children.length > pagesize) {
            for (var i = pagesize; i < $children.length; i++) {
                $children.eq(i).hide();
            }

            $(".showMorehandle").insertAfter($(this)).click(function () {
                if (showMoreNChildren($children, pagesize) <= 0) {
                    //如果目标元素已经没有隐藏的子元素了，就隐藏更改按钮的显示字以及动作事件
                    $("#more").text("没有了，点击关注公众号了解更多好玩有趣的故事吧~");
                    $("#more").click(function(){
                        window.open("/Index/wechat");        //点击“关注”，跳转至微信扫码页面---> window.open("wechat.html");
                    });
                }
            });
        }
    });
})();*/

/*
 * 品牌故事 跳转外链
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
$("#six").click(function(){
    window.open('http://mp.weixin.qq.com/s?__biz=MzA4MDIzNTQyNA==&mid=402529450&idx=1&sn=2d371ee84f7c0b62391471cdd9b6f92f&scene=19#wechat_redirect');
});
$("#more").click(function(){
    window.open("/Index/wechat");        //点击“关注”，跳转至微信扫码页面---> window.open("wechat.html");
});

/*
 * 企业试吃 跳转外链
 */
$("#company_eat").click(function(){
    window.open('company/eat.html');
});

/*
 * 关注我们 各个社交账户信息
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

// 网站备案
$("#beian").click(function(){
    window.open('http://www.miitbeian.gov.cn/');
});

/*
 * 导航条 主页下拉按钮 滚动条 等的特效
 */
function onePager(offsetMain, offsetIntro) {
    //导航条移动特效
    $('#nav').onePageNav({
        currentClass: "active",
        scrollOffset: offsetMain
    });
    //主页下拉按钮特效
    $(".scroll-down button").click(function () {
        $('html, body').animate({
            scrollTop: $(".scroll-down").offset().top - offsetMain
        }, 700);
    });
    //滚动条事件：滚到主页下方，出现导航栏/条；反之，滚动条到主页区域，隐藏导航条
/*    $(window).scroll(function () {
        var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
        if (windowTop > ($(window).height() - offsetIntro)) {
            $('header>nav').removeClass("ms-nav-anim");
        } else {
            $('header>nav').addClass("ms-nav-anim");
        }
    }).scroll();  */
    //滚动条事件：滚到主页下方，出现回到顶部;反之，滚动条到主页区域，隐藏回到顶部.
    $(window).scroll(function () {
        var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
        if (windowTop > ($(window).height() - offsetIntro)) {
            $('#scrollUp').show();
        } else {
            $('#scrollUp').hide();
        }
    }).scroll();
}

//主页视差 parallax.js 调用
if ($(window).width() < 767) {
    onePager(64, 84);
} else {
    onePager(50, 70);   // 这个是设置点击navbar下移的高度
    $('#intro').parallax("50%", 0.1);
    $('#portfolio').parallax("50%", 0.1);

    new cbpScroller(document.getElementById('cbp-so-scroller'));
}

//页面缩放后，头部导航条监听事件
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
 * 页面缩放时（移动端时）
 * 点击右上角“几条横杠”的标识
 * 弹出菜单
 */
$(".toggle-big-left").click(function (e) {
    if ($("#cbp-so-scroller").hasClass("outer-push") == true) {
        $("#cbp-so-scroller").removeClass("outer-push");
        $(".navbar-default").removeClass("visible");
    }else {
        $("#cbp-so-scroller").addClass("outer-push");
        $(".navbar-default").addClass("visible");
    }
    /*监听：点击其他地方也可以隐藏左滑出菜单*/
    $(document).one("click", function(){
        $("#cbp-so-scroller").removeClass("outer-push");
        $(".navbar-default").removeClass("visible");
    });
    e.stopPropagation();
});

// 点击栏目选项后,导航消失
$('.navbar-nav li').on('click',function () {
    $("#cbp-so-scroller").removeClass("outer-push");
    $(".navbar-default").removeClass("visible");
});

//菜单的冒泡事件要停止
$("#navbar-collapse").on("click",function(e){
    e.stopPropagation();
});/*监听 end*/
/* ----------移动端导航事件结束---------- */

//轮播插件 调用
$('.carousel').carousel({
    interval: 5000
});

//回到主页~（回到顶部）
if ($("html").hasClass("no-touch") == true) {
    $('#intro').parallax("50%", 0.1);
    $('#portfolio').parallax("50%", 0.1);

    new cbpScroller(document.getElementById('cbp-so-scroller'));
}
// 线上购买 点击跳转 公司天猫主页
$('.online').on('click',function(){
    window.open('https://alexanders.tmall.com/index.htm');
});