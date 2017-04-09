//当前浏览器类型
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isAndroid||isiOS) {
    body();
    function body(){
           var red=document.querySelector("#red");
           var ma=document.documentElement.clientWidth;
           var ni=document.documentElement.clientHeight;
        //alert(ma);
        //alert(ni);
         if(ma < ni){
             var gg=ma/ni;
             //alert(gg);

             if(gg <= 0.57){
                 var gameCanvas=document.querySelector("#gameCanvas");
                // alert(gameCanvas.style.width);
               //console.log(gameCanvas.style.width);
                // alert(ma);
                 var win = ma / 12;
                 var hei = ni / 9.8;
                 var male=ma-win;
                 //alert(male);
                 red.style.marginLeft=male+"px";
                 red.style.width = hei + "px";
                 red.style.height = win + "px";
             }else if(gg>0.74||gg<=0.75){
                 var win = ma / 12;
                 var hei = ni / 9.8;
                 var malef=win*10;
                 red.style.width = hei + "px";
                 red.style.height = win + "px";
                 red.style.marginLeft=malef+"px";
             }else{
                 var gameCanvas=document.querySelector("#gameCanvas");
                 var winli=gameCanvas.style.width;
                 //alert(winli);
                 var winlileng=winli.length-2;
                 var mar=gameCanvas.style.margin;

                 var swinliwin = winli.substring(0,winlileng);
                 //alert(swinliwin);
                 var win = ma / 12;
                 var hei = ni / 9.8;
                 var malef=((ma-460)/2)+425;
                 red.style.width = hei + "px";
                 red.style.height = win + "px";
                 red.style.marginLeft=malef+"px";
             }

         }else{
             var www=ma/ni;
           if(www>1.77){
               var gameCanvas=document.querySelector("#gameCanvas");
             var mar=gameCanvas.style.margin;
             var win = ma / 12;
             var hei = ni / 9.8;
             red.style.width = win + "px";
             red.style.height = hei + "px";
             red.style.margin=mar;
           }else{
              // alert(456);
             var win = ma / 12;
             var hei = ni / 9.8;
             red.style.width = win + "px";
             red.style.height = hei + "px";
         }
         }
    }
   // alert(123545666);
  //手机端单机事件
    var content = document.querySelector("#red");
    content.addEventListener("touchend", function(){
        touchStartt ();
    });
 //滑出消失
    var content = document.querySelector("#luck");
    content.addEventListener("touchend", function(){
       displayy ();
    });

    //手机点击事件
    var content1 = document.querySelector("#stauts");
    content1.addEventListener("touchend", function(){
        var value=content1.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        displayy();
    });
    var content2 = document.querySelector("#semll");
    content2.addEventListener("touchend", function(){
        var value=content2.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        displayy();
    });
    var content3 = document.querySelector("#zhong");
    content3.addEventListener("touchend", function(){
        var value=content3.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        displayy();
    });
    var content4 = document.querySelector("#big");
    content4.addEventListener("touchend", function(){
        var value=content4.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        displayy();
    });
    var content5 = document.querySelector("#ying");
    content5.addEventListener("touchend", function(){
        var value=content5.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        displayy();
    });
    var content6 = document.querySelector("#game");
    content6.addEventListener("touchend", function(){
        var value=content6.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        displayy();
    });
    var content7 = document.querySelector("#comeput");
    content7.addEventListener("touchend", function(){
        var value=content7.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        displayy();
    });
     function displayy(){
         var zzz = document.getElementById("luck");
         zzz.style.display="none";
     }
     //滑出  弹框消失

        function touchStartt (){
            var x = document.getElementById("luck");
            var z = document.getElementById("Cocos2dGameContainer");
            var width = z.style.width;
            var lenwidth = width.length - 2;
            var height = z.style.height;
            var lenheight = height.length - 2;
            var margin = z.style.margin;
            var swidth = width.substring(0,lenwidth);
            var sheight = height.substring(0,lenheight);
            var ma=document.documentElement.clientWidth;
            var ni=document.documentElement.clientHeight;
            //alert(ma);
            if (ni > ma) {
                $("#luck").css("transform", "rotate(90deg)");
                $("#luck").css("-ms-transform", "rotate(90deg)");
                $("#luck").css("-moz-transform", "rotate(90deg)");
                $("#luck").css("-webkit-transform", "rotate(90deg)");
                $("#luck").css("-o-transform", "rotate(90deg)");
                $("#luck").css("width", height);
                $("#luck").css("transform-origin",'78px 78px');
                var zhen=ma/ni;
               if(zhen<=0.6){
                   var left=ma-150;

                   $("#luck").css("margin-left",left);
               }else{
                   var left2=(ma-swidth)/2;
                   var left3=ma-left2-150;
                   $("#luck").css("margin-left",left3);

               }

                $("#luck").css("display", "block");
            } else {
                var sb=ma/ni;
                if(sb>1.77){
                    x.style.width = width;
                    x.style.margin=margin;
                    $("#luck").css("display", "block");
                }else{
                    x.style.width = width;
                    x.style.margin="0px 0px";
                    $("#luck").css("display", "block");
                }

            }

        }
}else{
   // alert(123);
//键码获取
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        //alert(e.keyCode);
        if (e.keyCode == 90 && e.ctrlKey) {
            var x = document.getElementById("luck");
            var z = document.getElementById("Cocos2dGameContainer");
            var margin = z.style.margin;
            var width = z.style.width;
            var height = z.style.height;

            //alert(margin);
            var leng=width.length-2;
            var ao = width.substring(0,leng);
            var ma=document.documentElement.clientWidth;
            var ni=document.documentElement.clientHeight;
           // alert(ma);
           // alert(ni);
            var etah= ma/ni;
            if(etah<=1.78){
                x.style.margin="0px 0px";
            }else{
            x.style.margin=margin;
        }
           // alert(ma);
             // if()

            x.style.width = width;
            x.style.display = "block";

            //alert(navigator.userAgent.indexOf("MSIE"));
            // x.style.marginLeft= "4.9%";
        }
    };
     //当浏览器发生改变时调用函数
    window.onresize = function () {
        var x = document.getElementById("luck");
        x.style.display="none";
        var e = event || window.event || arguments.callee.caller.arguments[0];
        // alert(e.keyCode);
        if (e.keyCode == 90&&e.ctrlKey) {

            var z = document.getElementById("Cocos2dGameContainer");
            var margin = z.style.margin;
            var width = z.style.width;
            var height = z.style.height;

            //alert(margin);
            var leng=width.length-2;
            var helen=height.length-2;
            var ao = width.substring(0, leng);
            var liu=height.substring(0,helen);
            var ma=document.documentElement.clientWidth;
            var ni=document.documentElement.clientHeight;
            var etah= ma/ni;
            if(etah>=1.78){
                x.style.margin="0px 0px";
            }else{
                x.style.margin=margin;
            }


            x.style.width = width;
            x.style.display = "block";
        }else{
            var x = document.getElementById("luck");
            x.style.display = "none";
        }

    }

//当鼠标移除或者单击按钮时弹框关闭
    var btn = document.getElementById("luck");
    btn.onmouseout = function () {
        btn.style.display = "none";
    };
    btn.onmouseover = function () {
        btn.style.display = "block";
    };
    var stauts = document.getElementById("stauts");
    stauts.onmouseover = function () {
        btn.style.display = "block";
    };
    stauts.onclick = function () {
        var value=stauts.getAttribute('value');
         // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        btn.style.display = "none";
    };
    var semll = document.getElementById("semll");
    semll.onmouseover = function () {
        btn.style.display = "block";
    };
    semll.onclick = function () {
        var value=semll.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        btn.style.display = "none";
    };
    var zhong = document.getElementById("zhong");
    zhong.onmouseover = function () {
        btn.style.display = "block";
    };
    zhong.onclick = function () {
        var value=zhong.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        btn.style.display = "none";
    };
    var big = document.getElementById("big");
    big.onmouseover = function () {
        btn.style.display = "block";
    };
    big.onclick = function () {
        var value=big.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        btn.style.display = "none";
    };
    var ying = document.getElementById("ying");
    ying.onmouseover = function () {
        btn.style.display = "block";
    };
    ying.onclick = function () {
        var value=ying.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        btn.style.display = "none";
    };
    var game = document.getElementById("game");
    game.onmouseover = function () {
        btn.style.display = "block";
    };
    game.onclick = function () {
        var value=game.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        btn.style.display = "none";
    };
    var comeput = document.getElementById("comeput");
    comeput.onmouseover = function () {
        btn.style.display = "block";
    };
    comeput.onclick = function () {
        var value=comeput.getAttribute('value');
        // alert("您当前单击的状态值为"+value);
        g_spinstate = value;
        btn.style.display = "none";
    };
}


