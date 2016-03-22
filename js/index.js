/*
* author:Lutz
* 作者：周辉
* */
//header头部：鼠标划上某个li，下拉出现一个div，
 $(function(){
    //方法一：把dd放在dt中成为它的子节点，利用当触发dd时同时还在触发dt这种思想（利用到了事件冒泡原理），这里主要注意的问题就是this问题，不管触发哪个，this始终都是dt；(当然要是同级使用的话，就需要把this绑定到他们的父级父级元素上去即可)
    $("#header .dt").mouseover(function(){
        $(this).children(".dd").show();
    });
    $("#header .dt").mouseout(function(){
        $(this).children(".dd").hide();
    });

    //方法二：把dd与dt同级，利用jquery中delegate方法的特性，同时绑定多个事件，利用事件委托，this绑定到li上了，this始终指向li，通过条件判断，得到结果，常出现的问题就是出现block后就不消失了，注意的问题就是，事件绑定给谁，this代表谁
    //$("#header").delegate("li","mouseover mouseout",function(){
    //    //$(this).children(".dd").slideToggle();
    //    if($(this).children(".dd").css('display')=='block'){
    //        $(this).children(".dd").hide();
    //    }else{
    //        $(this).children(".dd").show();
    //    }
    //});

    //原生写法(问题。就是当出现在dd中时会消失)
    //var header=document.getElementById("header");
    //var odds=document.getElementById("dd");
    //header.onmouseover=function(e){
    //    e=e|| window.event;
    //    var tar= e.target|| e.srcElement;
    //    if(tar.id==="dt"||tar.id==="dd"){
    //        //console.log(1);
    //        odds.style.display="block";
    //    }else{
    //        //console.log(2);
    //        odds.style.display="none";
    //    }
    //}
})

//广告点击取消
$(function(){
    $(".nav-close").click(function(){
        $(".top-nav").hide();
    })
})

//点击收索框
    //jquery写法
    $(function(){
        $("li").mouseover(function(){
            $(this).addClass("hover").siblings().removeClass("hover");
        });
        $(document).delegate(".w","click",function(e){
            e = e || window.event;
            var $tar = e.target || e.srcElement;
            var $shelper=$(".shelper");
            var $searchText = $(".search-text");
            //console.log(0)
            if($tar.className==="search-text"){
                //console.log(1)
                $searchText.val("");
                $shelper.show();
            }else if($tar.className==="shelper"){
                //console.log(2)

            }else if($tar.tagName.toLowerCase() === "li"){
                //console.log(3);
                $searchText.val($tar.innerHTML);
                //$shelper.css("display","none");
                $shelper.hide();
            }else{
                $searchText.val("请输入要查找的内容");
                $shelper.hide();
                //console.log(4);
            }
        })
    })


    //原生使用：当点击收索框的时候，当前收索框的vaule值消失，
    /*$(function(){
        var search=document.getElementsByClassName("search")[0];
        var shelper = search.getElementsByClassName("shelper")[0];
        var searchText = search.getElementsByClassName("search-text")[0];
        var searchBtn = search.getElementsByClassName("search-btn")[0];

    //实现鼠标滑过列表有.hover的背景颜色
        var liList = shelper.getElementsByTagName("li");
        for (var i = 0; i < liList.length; i++) {
            liList[i].onmouseenter = function () {
                this.className = "hover";
            };
            liList[i].onmouseleave = function () {
                this.className = null;
            };
        }

    //处理点击的时候不同的操作->事件委托处理
        document.body.onclick = function (e) {
            e = e || window.event;
            var curEle = e.target || e.srcElement;
            //如果是.searchText文本框,我们判断是否有内容,有内容显示
            //如果是.shelper下的li,我们让li的内容替换文本框的内容,列表消失
            //如果点击的是.shelper,不处理
            //以上都不是的话,我们就隐藏列表
            if (curEle.className === "search-text") {
                //searchText.onkeyup.call(curEle);
                searchText.value =null;
                shelper.style.display="block";

            }else if (curEle.tagName.toLowerCase() === "li" && curEle.parentNode === shelper) {
                searchText.value = curEle.innerHTML;
                shelper.style.display = "none";

            } else if (curEle.className=== "shelper") {
                //shelper.style.display="block";
            } else {
                searchText.value ="请输入要查找的内容";
                shelper.style.display = "none";
            }

        };
        //当我们在文本框输入内容的时候,判断有没有输入进去,有的话显示我们的列表,没有的话我们让列表隐藏(首尾空格不算)
        //searchText.onkeyup = function () {
        //    var val = this.value.replace(/(^ +| +$)/g, "");
        //    shelper.style.display = val === "" ? "none" : "block";
        //};
    })*/

//购物车效果
    $(function(){
        $(".cart").mouseover(function(){
            $(".dp-down").show();
        })
        $(".cart").mouseout(function(){
            $(".dp-down").hide();
        })
    })

//类似选项卡：鼠标经过一排div。出现与之对应一排div--
        //原生写法：
    $(function() {

        //var dropTop=document.getElementsByClassName("drop-top");
        //var dropDown=document.getElementsByClassName("drop-down");
        //var items=document.getElementsByClassName("item");
        //var jds=document.getElementsByClassName("jds");
        //for(var i=0;i<items.length;i++) {//遍历所有的item
        //    items[i].jd = i;//自定义属性记录索引；
        //    items[i].onmouseover = function () {
        //        for (var j = 0; j < items.length; j++) {//循环遍历去掉item样式和把down隐藏
        //            items[j].className = "item";
        //            jds[j].className = "jds";
        //            console.log(jds);
        //        }
        //        this.className = "select";
        //        jds[this.jd].className = "down";
        //    }
        //}

        //jquery写法

              /*  $("document").delegate(".dd",'mouseenter mouseleave',function() {
                    var index=id.substr(5);
                    var hoverId='fore_'+index;
                    var subId='fore_content_'+index;
                    if(!($('#'+hoverId+'').hasClass('select') && $('#'+subId+'').hasClass('down'))){
                        $('#'+hoverId+'').addClass("select");
                        $('#'+subId+'').addClass("down");
                        console.log(11);
                    }else{
                        $('#'+hoverId+'').removeClass("select");
                        $('#'+subId+'').removeClass("down");
                        console.log(22);
                    }
                })*/

        $(".item").each(function () {
            var $_this = $(this);
            $(".item").mouseover(function () {
                var _index = $(this).index();
                $(this).parent('.drop-up').next('.drop-down').children('.down:eq('+_index+')').show();
                $(this).addClass("select").siblings().removeClass("select");
            })
            $(".item").mouseout(function () {
                var _index = $(this).index();
                $(this).removeClass("select");
                $(this).parent('.drop-up').next('.drop-down').children('.down:eq('+_index+')').hide();
            })
        })

        /*$(".item").each(function () {
            var $_this = $(this);
            $(".item").mouseover(function () {
                //find就是搜索所有与指定表达式相同的元素，是找出正在处理的元素的后代元素的好方法
                var _index = $(this).index();
                $(this).addClass("select").siblings().removeClass("select");
                $_this.parent().siblings().children(".jds").each(function (index) {
                    if (_index === index) {
                        $(this).addClass("down");
                    } else {
                        $(this).removeClass("down");
                    }
                })
            })
            $(".item").mouseout(function () {
                $(this).parent().siblings().children(".jds").removeClass("down");
            })
        })*/

    })



//轮播图：怎么实现自动轮播思路

$(function(){
    //1.每隔一段时间自动向某个方向滚动，最后一张到第一张流畅滚动
//2.当鼠标经过盒子，轮播图停止，点击左右箭头可以进行切换
//3.序号与图片对应滚动
    //原生写法
    //获取元素
     /*var step=0;
     var timer=null;
     var lun=$(".lun")[0];
     var $li = $(".adv-tip li");
     var $aImgs = $(".adv-img > a");
     var $tipClick = $(".tip-click")[0];
     var $tipLeft = $(".tip-left");
     var $tipRight = $(".tip-right");
   //1.li的样式
    function showTip(curIndex){
        for(var i=0;i<$aImgs.length;i++){
            $aImgs[i].className="";
            $li[i].className="";
        }
        $aImgs[curIndex].className="select";
        $li[curIndex].className="select";
        step=curIndex;
    }
   //封装函数autoMove
   function autoMove(){
       step++;
       if(step>=$aImgs.length){
           step=0;
       }
       showTip(step);
   }
    //当点击li时
    for(var j=0;j<$li.length;j++){
        $li[j].jd=j;
        $li[j].onclick=function(){
            window.clearInterval(timer);
            showTip(this.jd);
        }
    }
    //当点击左右箭头的时候
    $tipLeft.onclick=function(){
        step--;
        if(step<0){
            step=$aImgs.length-1;
        }
        showTip(step);
    }
    $tipRight.onclick=autoMove;
    //鼠标划在窗口上面，停止计时器
    lun.onmouseover = function () {
        clearInterval(timer);
        $tipClick.style.display="block";
    }
    //鼠标离开窗口，开启计时器
    lun.onmouseout = function () {
        timer = setInterval(autoMove, 2000);
        $tipClick.style.display="none";
    }
    timer=window.setInterval(autoMove,2000);*/

   //jquery实现方法
    var step=0;
    var timer=null;
    var $li = $(".adv-tip li");
    var $aImgs = $(".adv-img > a");
    var $tipClick = $(".tip-click")[0];
    var $tipLeft = $(".tip-left");
    var $tipRight = $(".tip-right");
    console.log(Object.prototype.toString.call($tipClick));
        //1.添加li的select
    var showTip = function () {
        $li.each(function (index) {
            index === step ? $(this).addClass("select") : $(this).removeClass("select");
        })
    }
    //2.封装函数autoMove
    function autoMove() {
        step++;
        if (step >= $aImgs.length) {
            step = 0;
        };
        $aImgs.eq(step).addClass("select").siblings().removeClass("select");
        showTip();
        console.log(step);
    }
    //3.当点击click-->li时，
    $li.click(function(){
        window.setInterval(timer);
        //找到当前索引
        step = $(this).index();
        $(this).addClass("select").siblings().removeClass("select");
        $aImgs.eq(step).addClass("select").siblings().removeClass("select");
    })

    //4.当实现左右点击时
    $(".tip-left").click(function(){
        //console.log(2);
        step--;
        if(step<0){
            step = $aImgs.length - 1;
        }
        $aImgs.eq(step).addClass("select").siblings().removeClass("select");
        showTip();
        console.log(step);
    })
    $(".tip-right").click(autoMove);

    //5.鼠标划在窗口上面，停止计时器
    $(".lun").hover(function(){

        window.clearInterval(timer);
        $tipClick.style.display="block";
    },function(){
        timer = window.setInterval(autoMove, 2000);
        $tipClick.style.display="none";
    })

    //6.设置定义计时器
    timer =window.setInterval(autoMove, 2000);
})

//推荐rec--animate动画
    $(function(){
        //原生写法，
        var $rec=$(".rec");
        var $lImgs = $(".adv-img > li");
        var $tipClick = $(".tip-click")[0];
        var $tipLeft = $(".tip-left");
        var $tipRight = $(".tip-right");


    })