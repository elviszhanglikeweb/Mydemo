$(document).ready(function(){
    var user;
    var devicewidth=document.documentElement.clientWidth;
    if(sessionStorage.numuser&&sessionStorage.numpasswd)
    {
        $.get("login.php",{name:sessionStorage.numuser},function (data) {
            if(sessionStorage.numpasswd==data)
            {
                $('#bottomlabel').css('display','none');
                user=sessionStorage.numpasswd;
                $('#bottomlabe2').css('display','none');
                document.getElementById("change").innerHTML="你好,"+user;
            }
        });
    }
    $("button#login").on('click',function () {
        document.location.href="login.html";
    });
    $("button#register").on('click',function () {
        document.location.href="Register.html";
    });
    $("button#loginmobile").on('click',function () {
        document.location.href="login.html";
    });
    $("button#registermobile").on('click',function () {
        document.location.href="Register.html";
    });
    if(devicewidth==1920){
        $(".Thewholepage").css('display','block');

    }
    if(devicewidth==1680){
        $(".Thewholepage").css('display','block');
        $(document).ready(function () {
            $(".righttittle").css('padding-top','2%');
            $(".arighttittle").css('font-size','medium');
            $(".Thesecondcontainer").css('width','100%');
            $(".Thesecondcontainer").css('margin','0px');
            $(".controlbutton").css('margin-left','9%');
            $(".controlbutton").css('width','15%');
            $(".controlbutton").css('margin-left','9%');
            $(".rightcontrolbutton").css('width','15%');
            $(".rightcontrolbutton").css('margin-right','14%');
        });
    }
    if(devicewidth==1600){
        $(".Thewholepage").css('display','block');
        $(document).ready(function () {
            $(".righttittle").css('padding-top','1%');
            $(".arighttittle").css('font-size','medium');
            $(".Thesecondcontainer").css('width','100%');
            $(".Thesecondcontainer").css('margin','0px');
            $(".controlbutton").css('margin-left','9%');
            $(".controlbutton").css('width','15%');
            $(".rightcontrolbutton").css('width','15%');
            $(".rightcontrolbutton").css('margin-left','74%');
            $(".Thetittle").css('height','10%');
            $("p#labelword").css('font-size','x-large');
        });
    }
    if(devicewidth==1440){
        $(".Thewholepage").css('display','block');
        $(document).ready(function () {
            $(".righttittle").css('padding-top','2%');
            $(".arighttittle").css('font-size','medium');
            $(".listclasses").css('width','100%');
            $(".Thesecondcontainer").css('margin','0px');
            $(".controlbutton").css('margin-left','9%');
            $(".controlbutton").css('width','15%');
            $(".rightcontrolbutton").css('width','15%');
            $(".rightcontrolbutton").css('margin-left','74%');
            $(".thearange").css('margin-left','2%');
            $(".Thetittle").css('height','9%');
            $("p#labelword").css('font-size','large');
        });
    }
    if(devicewidth==1400){
        $(".Thewholepage").css('display','block');
        $(document).ready(function () {
            $(".righttittle").css('padding-top','2%');
            $(".arighttittle").css('font-size','medium');
            $(".listclasses").css('width','90%');
            $(".Thesecondcontainer").css('margin','0px');
            $(".controlbutton").css('margin-left','9%');
            $(".controlbutton").css('width','15%');
            $(".rightcontrolbutton").css('width','15%');
            $(".rightcontrolbutton").css('margin-left','74%');
            $(".thearange").css('margin-left','2%');
            $(".bottomwords").css('margin-left','17%');
            $(".listclasses9").css('display','none');
            $(".listclasses10").css('display','none');
            $(".listclasses5").css('margin-left','0%');
            $(".listclasses6").css('margin-left','1%');
            $(".listclasses").css('margin-left','15%');
            $("h1#classes").css('margin-left','5%');
            $("p#labelword").css('font-size','x-large');
        });
    }
    if(1280<=devicewidth&&devicewidth<=1366){
        $(".Thewholepage").css('display','block');
        $(document).ready(function () {
            $(".righttittle").css('padding-top','2%');
            $(".arighttittle").css('font-size','medium');
            $(".listclasses").css('width','90%');
            $(".Thesecondcontainer").css('margin','0px');
            $(".controlbutton").css('margin-left','9%');
            $(".controlbutton").css('width','15%');
            $(".rightcontrolbutton").css('width','15%');
            $(".rightcontrolbutton").css('margin-left','74%');
            $(".thearange").css('margin-left','1%');
            $(".bottomwords").css('margin-left','17%');
            $(".Thetittle").css('height','11%');
            $(".arighttittle").css('font-size','small');
            $(".listclasses").css('margin-left','15%');
            $(".listclasses9").css('display','none');
            $(".listclasses10").css('display','none');
            $(".listclasses5").css('margin-left','0%');
            $(".listclasses6").css('margin-left','1%');
            $("h1#classes").css('margin-left','5%');
            $(".thearange2").css('margin-left','40%');
            $(".thearange3").css('margin-left','4%');
            $(".col-lg-6").css('margin-left','34%');
            $('.bottomlabe1').css('height','5%');
            $("p#labelword").css('font-size','5px');
        });
    }
    if(devicewidth<=414){
        if(devicewidth==375){
            $(".first").css('height','110%');
            $(".two").css('height','110%');
            $(".alpha").css('height','27%');
            $(".mobile").css('display','block');
            var deviceheight=document.documentElement.clientHeight;
            $(".mobile").css('height',deviceheight);
            $(".Thewholepage").hide();
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                effect : 'fade',
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplay : 2000,
                speed:300,
            });
            var one = new Swiper('.swiper-container2',{
                slidesPerView : 4,//'auto'
                freeMode: true,
            })
            $("button#justtest").click(function () {
                $(".arrow_box").css('display','block');
                $(".shield").css('display','block');
                $(".arrow_box").css('z-index','9999');
                $(".mobile").css('overflow-y','hidden');
            })
            $(".shield").click(function () {
                $(".shield").css('display','none');
                $(".arrow_box").css('display','none');
                $(".mobile").css('overflow-y','visible');
            })
        }
        $(".alpha").css('height','27%');
        $(".mobile").css('display','block');
        var deviceheight=document.documentElement.clientHeight;
        $(".mobile").css('height',deviceheight);
        $(".Thewholepage").hide();
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            effect : 'fade',
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay : 2000,
            speed:300,
        });
        var one = new Swiper('.swiper-container2',{
            slidesPerView : 4,//'auto'
            freeMode: true,

        })
        $("button#justtest").click(function () {
            $(".arrow_box").css('display','block');
            $(".shield").css('display','block');
            $(".arrow_box").css('z-index','9999');
            $(".mobile").css('overflow-y','hidden');
        })
        $(".shield").click(function () {
            $(".shield").css('display','none');
            $(".arrow_box").css('display','none');
            $(".mobile").css('overflow-y','visible');
        })
    }
    $(document).ready(function(){
        var deviceheight=document.documentElement.clientHeight;
        $("body").css('height',deviceheight);
        $(".arighttittle").hover(function(){
            $(".arighttittle").css('color','#00B38A');
        });
        $(".arighttittle").mouseleave(function(){
            $(".arighttittle").css('color','#000000');
        });
        $(document).ready(function(){
            $(".listclasses1").hover(function(){
                $(".listclasses1").css('border','1px solid #bbbebf');
                $(".listclasses1").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses1").mouseleave(function(){
                $(".listclasses1").css('border','1px solid #f5f5f5');
                $(".listclasses1").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses2").hover(function(){
                $(".listclasses2").css('border','1px solid #bbbebf');
                $(".listclasses2").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses2").mouseleave(function(){
                $(".listclasses2").css('border','1px solid #f5f5f5');
                $(".listclasses2").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses3").hover(function(){
                $(".listclasses3").css('border','1px solid #bbbebf');
                $(".listclasses3").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses3").mouseleave(function(){
                $(".listclasses3").css('border','1px solid #f5f5f5');
                $(".listclasses3").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses4").hover(function(){
                $(".listclasses4").css('border','1px solid #bbbebf');
                $(".listclasses4").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses4").mouseleave(function(){
                $(".listclasses4").css('border','1px solid #f5f5f5');
                $(".listclasses4").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses5").hover(function(){
                $(".listclasses5").css('border','1px solid #bbbebf');
                $(".listclasses5").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses5").mouseleave(function(){
                $(".listclasses5").css('border','1px solid #f5f5f5');
                $(".listclasses5").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses6").hover(function(){
                $(".listclasses6").css('border','1px solid #bbbebf');
                $(".listclasses6").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses6").mouseleave(function(){
                $(".listclasses6").css('border','1px solid #f5f5f5');
                $(".listclasses6").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses7").hover(function(){
                $(".listclasses7").css('border','1px solid #bbbebf');
                $(".listclasses7").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses7").mouseleave(function(){
                $(".listclasses7").css('border','1px solid #f5f5f5');
                $(".listclasses7").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses8").hover(function(){
                $(".listclasses8").css('border','1px solid #bbbebf');
                $(".listclasses8").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses8").mouseleave(function(){
                $(".listclasses8").css('border','1px solid #f5f5f5');
                $(".listclasses8").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses9").hover(function(){
                $(".listclasses9").css('border','1px solid #bbbebf');
                $(".listclasses9").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses9").mouseleave(function(){
                $(".listclasses9").css('border','1px solid #f5f5f5');
                $(".listclasses9").css('box-shadow','3px 3px #f5f5f5');
            });
            $(".listclasses10").hover(function(){
                $(".listclasses10").css('border','1px solid #bbbebf');
                $(".listclasses10").css('box-shadow','3px 3px #d6d6d6');
            });
            $(".listclasses10").mouseleave(function(){
                $(".listclasses10").css('border','1px solid #f5f5f5');
                $(".listclasses10").css('box-shadow','3px 3px #f5f5f5');
            });
        });
        $(document).ready(function(){
            $(".justcontainer").mouseleave(function(){
                $(".aboutID").css('background-color','#474A4B');
                $("h1#aboutID1").css('color','white');
                $("a#aboutID2").css('color','white');
                $("a#aboutID3").css('color','white');
                $(".aboutIT").css('background-color','#474A4B');
                $("h1#aboutIT1").css('color','white');
                $("a#aboutIT2").css('color','white');
                $("a#aboutIT3").css('color','white');
                $(".aboutIA").css('background-color','#474A4B');
                $("h1#aboutIA1").css('color','white');
                $("a#aboutIA2").css('color','white');
                $("a#aboutIA3").css('color','white');
                $(".aboutIF").css('background-color','#474A4B');
                $("h1#aboutIF1").css('color','white');
                $("a#aboutIF2").css('color','white');
                $("a#aboutIF3").css('color','white');
                $("a#aboutIF4").css('color','white');
                $(".aboutAT").css('background-color','#474A4B');
                $("h1#aboutAT1").css('color','white');
                $("a#aboutAT2").css('color','white');
                $("a#aboutAT3").css('color','white');
                $("a#aboutAT4").css('color','white');
                $(".aboutST").css('background-color','#474A4B');
                $("h1#aboutST1").css('color','white');
                $("a#aboutST2").css('color','white');
                $("a#aboutST3").css('color','white');
                $(".swiper-wrapper").css('display','block');
                $(".swiper-pagination").css('display','block');
                $(".swiper-button-prev").css('display','block');
                $(".swiper-button-next").css('display','block');
                $(".aboutITdetail").css('display','none');
                $(".aboutIDdetail").css('display','none');
                $(".aboutIAdetail").css('display','none');
                $(".aboutIFdetail").css('display','none');
                $(".aboutSTdetail").css('display','none');
                $(".aboutATdetail").css('display','none');
            });
            $(".aboutIT").hover(function(){
                $(".aboutIT").css('background-color','white');
                $("h1#aboutIT1").css('color','#000000');
                $("a#aboutIT2").css('color','#000000');
                $("a#aboutIT3").css('color','#000000');
                $(".aboutID").css('background-color','#474A4B');
                $("h1#aboutID1").css('color','white');
                $("a#aboutID2").css('color','white');
                $("a#aboutID3").css('color','white');
                $(".aboutIA").css('background-color','#474A4B');
                $("h1#aboutIA1").css('color','white');
                $("a#aboutIA2").css('color','white');
                $("a#aboutIA3").css('color','white');
                $(".aboutIF").css('background-color','#474A4B');
                $("h1#aboutIF1").css('color','white');
                $("a#aboutIF2").css('color','white');
                $("a#aboutIF3").css('color','white');
                $("a#aboutIF4").css('color','white');
                $(".aboutAT").css('background-color','#474A4B');
                $("h1#aboutAT1").css('color','white');
                $("a#aboutAT2").css('color','white');
                $("a#aboutAT3").css('color','white');
                $("a#aboutAT4").css('color','white');
                $(".aboutST").css('background-color','#474A4B');
                $("h1#aboutST1").css('color','white');
                $("a#aboutST2").css('color','white');
                $("a#aboutST3").css('color','white');
                $(".swiper-wrapper").css('display','none');
                $(".swiper-pagination").css('display','none');
                $(".swiper-button-prev").css('display','none');
                $(".swiper-button-next").css('display','none');
                $(".aboutITdetail").css('display','block');
                $(".aboutIDdetail").css('display','none');
                $(".aboutIAdetail").css('display','none');
                $(".aboutIFdetail").css('display','none');
                $(".aboutSTdetail").css('display','none');
                $(".aboutATdetail").css('display','none');
            });
            $(".aboutID").hover(function(){
                $(".aboutID").css('background-color','white');
                $("h1#aboutID1").css('color','#000000');
                $("a#aboutID2").css('color','#000000');
                $("a#aboutID3").css('color','#000000');
                $(".aboutIT").css('background-color','#474A4B');
                $("h1#aboutIT1").css('color','white');
                $("a#aboutIT2").css('color','white');
                $("a#aboutIT3").css('color','white');
                $(".aboutIA").css('background-color','#474A4B');
                $("h1#aboutIA1").css('color','white');
                $("a#aboutIA2").css('color','white');
                $("a#aboutIA3").css('color','white');
                $(".aboutIF").css('background-color','#474A4B');
                $("h1#aboutIF1").css('color','white');
                $("a#aboutIF2").css('color','white');
                $("a#aboutIF3").css('color','white');
                $("a#aboutIF4").css('color','white');
                $(".aboutAT").css('background-color','#474A4B');
                $("h1#aboutAT1").css('color','white');
                $("a#aboutAT2").css('color','white');
                $("a#aboutAT3").css('color','white');
                $("a#aboutAT4").css('color','white');
                $(".aboutST").css('background-color','#474A4B');
                $("h1#aboutST1").css('color','white');
                $("a#aboutST2").css('color','white');
                $("a#aboutST3").css('color','white');
                $(".swiper-wrapper").css('display','none');
                $(".swiper-pagination").css('display','none');
                $(".swiper-button-prev").css('display','none');
                $(".swiper-button-next").css('display','none');
                $(".aboutIDdetail").css('display','block');
                $(".aboutITdetail").css('display','none');
                $(".aboutIAdetail").css('display','none');
                $(".aboutIFdetail").css('display','none');
                $(".aboutSTdetail").css('display','none');
                $(".aboutATdetail").css('display','none');
            });
            $(".aboutIA").hover(function(){
                $(".aboutIA").css('background-color','white');
                $("h1#aboutIA1").css('color','#000000');
                $("a#aboutIA2").css('color','#000000');
                $("a#aboutIA3").css('color','#000000');
                $(".aboutID").css('background-color','#474A4B');
                $("h1#aboutID1").css('color','white');
                $("a#aboutID2").css('color','white');
                $("a#aboutID3").css('color','white');
                $(".aboutIT").css('background-color','#474A4B');
                $("h1#aboutIT1").css('color','white');
                $("a#aboutIT2").css('color','white');
                $("a#aboutIT3").css('color','white');
                $(".aboutIF").css('background-color','#474A4B');
                $("h1#aboutIF1").css('color','white');
                $("a#aboutIF2").css('color','white');
                $("a#aboutIF3").css('color','white');
                $("a#aboutIF4").css('color','white');
                $(".aboutAT").css('background-color','#474A4B');
                $("h1#aboutAT1").css('color','white');
                $("a#aboutAT2").css('color','white');
                $("a#aboutAT3").css('color','white');
                $("a#aboutAT4").css('color','white');
                $(".aboutST").css('background-color','#474A4B');
                $("h1#aboutST1").css('color','white');
                $("a#aboutST2").css('color','white');
                $("a#aboutST3").css('color','white');
                $(".swiper-wrapper").css('display','none');
                $(".swiper-pagination").css('display','none');
                $(".swiper-button-prev").css('display','none');
                $(".swiper-button-next").css('display','none');
                $(".aboutIAdetail").css('display','block');
                $(".aboutITdetail").css('display','none');
                $(".aboutIDdetail").css('display','none');
                $(".aboutIFdetail").css('display','none');
                $(".aboutSTdetail").css('display','none');
                $(".aboutATdetail").css('display','none');
            });
            $(".aboutIF").hover(function(){
                $(".aboutIF").css('background-color','white');
                $("h1#aboutIF1").css('color','#000000');
                $("a#aboutIF2").css('color','#000000');
                $("a#aboutIF3").css('color','#000000');
                $("a#aboutIF4").css('color','#000000');
                $(".aboutIA").css('background-color','#474A4B');
                $("h1#aboutIA1").css('color','white');
                $("a#aboutIA2").css('color','white');
                $("a#aboutIA3").css('color','white');
                $(".aboutID").css('background-color','#474A4B');
                $("h1#aboutID1").css('color','white');
                $("a#aboutID2").css('color','white');
                $("a#aboutID3").css('color','white');
                $(".aboutIT").css('background-color','#474A4B');
                $("h1#aboutIT1").css('color','white');
                $("a#aboutIT2").css('color','white');
                $("a#aboutIT3").css('color','white');
                $(".aboutAT").css('background-color','#474A4B');
                $("h1#aboutAT1").css('color','white');
                $("a#aboutAT2").css('color','white');
                $("a#aboutAT3").css('color','white');
                $("a#aboutAT4").css('color','white');
                $(".aboutST").css('background-color','#474A4B');
                $("h1#aboutST1").css('color','white');
                $("a#aboutST2").css('color','white');
                $("a#aboutST3").css('color','white');
                $(".swiper-wrapper").css('display','none');
                $(".swiper-pagination").css('display','none');
                $(".swiper-button-prev").css('display','none');
                $(".swiper-button-next").css('display','none');
                $(".aboutIFdetail").css('display','block');
                $(".aboutITdetail").css('display','none');
                $(".aboutIDdetail").css('display','none');
                $(".aboutIAdetail").css('display','none');
                $(".aboutSTdetail").css('display','none');
                $(".aboutATdetail").css('display','none');
            });
            $(".aboutST").hover(function(){
                $(".aboutST").css('background-color','white');
                $("h1#aboutST1").css('color','#000000');
                $("a#aboutST2").css('color','#000000');
                $("a#aboutST3").css('color','#000000');
                $(".aboutIA").css('background-color','#474A4B');
                $("h1#aboutIA1").css('color','white');
                $("a#aboutIA2").css('color','white');
                $("a#aboutIA3").css('color','white');
                $(".aboutID").css('background-color','#474A4B');
                $("h1#aboutID1").css('color','white');
                $("a#aboutID2").css('color','white');
                $("a#aboutID3").css('color','white');
                $(".aboutIT").css('background-color','#474A4B');
                $("h1#aboutIT1").css('color','white');
                $("a#aboutIT2").css('color','white');
                $("a#aboutIT3").css('color','white');
                $(".aboutIF").css('background-color','#474A4B');
                $("h1#aboutIF1").css('color','white');
                $("a#aboutIF2").css('color','white');
                $("a#aboutIF3").css('color','white');
                $("a#aboutIF4").css('color','white');
                $(".aboutAT").css('background-color','#474A4B');
                $("h1#aboutAT1").css('color','white');
                $("a#aboutAT2").css('color','white');
                $("a#aboutAT3").css('color','white');
                $("a#aboutAT4").css('color','white');
                $(".swiper-wrapper").css('display','none');
                $(".swiper-pagination").css('display','none');
                $(".swiper-button-prev").css('display','none');
                $(".swiper-button-next").css('display','none');
                $(".aboutSTdetail").css('display','block');
                $(".aboutITdetail").css('display','none');
                $(".aboutIDdetail").css('display','none');
                $(".aboutIAdetail").css('display','none');
                $(".aboutIFdetail").css('display','none');
                $(".aboutATdetail").css('display','none');
            });
            $(".aboutAT").hover(function(){
                $(".aboutAT").css('background-color','white');
                $("h1#aboutAT1").css('color','#000000');
                $("a#aboutAT2").css('color','#000000');
                $("a#aboutAT3").css('color','#000000');
                $("a#aboutAT4").css('color','#000000');
                $(".aboutIA").css('background-color','#474A4B');
                $("h1#aboutIA1").css('color','white');
                $("a#aboutIA2").css('color','white');
                $("a#aboutIA3").css('color','white');
                $(".aboutID").css('background-color','#474A4B');
                $("h1#aboutID1").css('color','white');
                $("a#aboutID2").css('color','white');
                $("a#aboutID3").css('color','white');
                $(".aboutIT").css('background-color','#474A4B');
                $("h1#aboutIT1").css('color','white');
                $("a#aboutIT2").css('color','white');
                $("a#aboutIT3").css('color','white');
                $(".aboutIF").css('background-color','#474A4B');
                $("h1#aboutIF1").css('color','white');
                $("a#aboutIF2").css('color','white');
                $("a#aboutIF3").css('color','white');
                $("a#aboutIF4").css('color','white');
                $(".aboutST").css('background-color','#474A4B');
                $("h1#aboutST1").css('color','white');
                $("a#aboutST2").css('color','white');
                $("a#aboutST3").css('color','white');
                $(".swiper-wrapper").css('display','none');
                $(".swiper-pagination").css('display','none');
                $(".swiper-button-prev").css('display','none');
                $(".swiper-button-next").css('display','none');
                $(".aboutATdetail").css('display','block');
                $(".aboutITdetail").css('display','none');
                $(".aboutIDdetail").css('display','none');
                $(".aboutIAdetail").css('display','none');
                $(".aboutIFdetail").css('display','none');
                $(".aboutSTdetail").css('display','none');
            });
        });
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            autoplay : 2000,
            speed:300,
            loop: false,
            effect:'fade',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination : '.swiper-pagination',
            paginationClickable :true,
            runCallbacksOnInit : true,
            autoplayDisableOnInteraction : false,
        });
        document.getElementById("alpha").addEventListener("mousewheel",function(){
            var beta;
            beta=$(document).scrollTop();
            if(beta<600)
            {
                $("nav#guide").css('visibility','hidden');
            }
            if(beta>600)
            {
                $("nav#guide").css('visibility','visible');
            }
        });
    });
});

