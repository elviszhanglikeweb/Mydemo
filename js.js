$(document).ready(function(){
    $(document).ready(function(){
        var deviceheight=document.documentElement.clientHeight||document.body.clientHeight;
        $(".new").css('height',deviceheight);
        $(".swiper-slide").css('height',deviceheight);
    });
    $(document).ready(function(){
        $("img#myself").fadeIn(1000);
        $("p#coverwords").css('display','block');
    });
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        touchRatio : 1,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        observer:true,
        observeParents:true,
        mousewheelControl : true,
    });
    $(document).ready(function(){
        var devicewidth=document.documentElement.clientWidth;
        if(devicewidth>1680){
            $("ul#backup1").hide();
            $("ul#backup3").hide();
            $("ul#backup2").show();
            $("ul#backup4").show();
            $("ul#backup5").hide();
            $("ul#backup6").hide();
            $("ul#backupnew2").hide();
            $(document).ready(function(){
                $("img#demo").hover(function () {
                    $("p#demowords").fadeIn();
                });
                $("img#formobile1").hover(function () {
                    $("img#formobile1").css('opacity','0.8');
                    $(".arrow_box").show();
                });
                $("img#formobile1").mouseleave(function () {
                    $("img#formobile1").css('opacity','1');
                    $(".arrow_box").hide();
                });
                document.getElementById("one").addEventListener("mousewheel",function () {
                    $(".headword1").fadeIn(600);
                    $("img#myphoto").fadeIn(1000);
                    $(".myfiledetails").fadeIn(1500);
                    $(".myexperience").fadeIn(1500);
                });
                document.getElementById("two").addEventListener("mousewheel",function () {
                    $("h1#test2").css('display','block');
                    kube();
                });
                document.getElementById("three").addEventListener("mousewheel",function () {
                    $("h1#Self-appraisal").fadeIn(1000);
                    $(".projects1").fadeIn(1500);
                });
                document.getElementById("four").addEventListener("mousewheel",function () {
                    $("h1#myobjectwords").fadeIn(1000);
                    $(".working").fadeIn(1500);
                });
                document.getElementById("five").addEventListener("mousewheel",function () {
                    $("h1#endwords").fadeIn(1000);
                    $("p#aboutme").fadeIn(1500);
                    $(".communication").fadeIn(1500);
                });
            })
        }
        if(1400<=devicewidth&&devicewidth<=1680){
            if(devicewidth==1680){
                $(".projects").css('width','40%');
                $(".projects").css('margin-left','5%');
            }
            if(devicewidth==1600){
                $(".projects").css('width','40%');
                $(".projects").css('margin-left','5%');
            }
            if(devicewidth==1440){
                $(".projects").css('width','45%');
                $(".projects").css('margin-left','3%');
            }
            if(devicewidth==1400){
                $(".projects").css('width','46%');
                $(".projects").css('margin-left','2%');
            }
            $("ul#backup1").show();
            $("ul#backup3").show();;
            $("ul#backup2").hide();
            $("ul#backup4").hide();
            $("ul#backup5").hide();
            $("ul#backup6").hide();
            $("ul#backupnew2").hide();
            $("p#myselful1").css('font-size',10);
            $("p#myselful2").css('font-size',10);
            $("p#myselful3").css('font-size',10);
            $("p#myselful4").css('font-size',10);
            $("p#myselful5").css('font-size',10);
            $("p#myselful6").css('font-size',10);
            $("p#myselful7").css('font-size',10);
            $(document).ready(function(){
                $("img#demo").hover(function(){
                    $("img#demo").css('opacity','0.8');
                    $("p#demowords").fadeIn();
                });
                $("img#demo").mouseleave(function(){
                    $("img#demo").css('opacity','1');
                });
            });
            $("img#formobile1").hover(function () {
                $("img#formobile1").css('opacity','0.8');
                $(".arrow_box").show();
            });
            $("img#formobile1").mouseleave(function () {
                $("img#formobile1").css('opacity','1');
                $(".arrow_box").hide();
            });
            document.getElementById("one").addEventListener("mousewheel",function () {
                $(".headword1").fadeIn(600);
                $("img#myphoto").fadeIn(1000);
                $(".myfiledetails").fadeIn(1500);
                $(".myexperience").fadeIn(1500);
            });
            document.getElementById("two").addEventListener("mousewheel",function () {
                $("h1#test2").css('display','block');
                kube();
            });
            document.getElementById("three").addEventListener("mousewheel",function () {
                $("h1#Self-appraisal").fadeIn(1000);
                $(".projects1").fadeIn(1500);
            });
            document.getElementById("four").addEventListener("mousewheel",function () {
                $("h1#myobjectwords").fadeIn(1000);
                $(".working").fadeIn(1500);
            });
            document.getElementById("five").addEventListener("mousewheel",function () {
                $("h1#endwords").fadeIn(1000);
                $("p#aboutme").fadeIn(1500);
                $(".communication").fadeIn(1500);
            });
        }
        if(1280<=devicewidth&&devicewidth<=1366){
            if(devicewidth==1366){
                $(".projects").css('width','48%');
                $(".projects").css('margin-left','1%');
            }
            if(devicewidth==1360){
                $(".projects").css('width','48%');
                $(".projects").css('margin-left','15px');
            }
            if(devicewidth==1280){
                $(".photos").css('width','64px');
                $(".photos1").css('width','64px');
                $(".photos1").css('height','64px');
                $(".projects").css('width','40%');
                $(".projects").css('margin-left','5%');
            }
            $("ul#backup1").hide();
            $("ul#backup3").hide();;
            $("ul#backup2").hide();
            $("ul#backup4").hide();
            $("ul#backup5").show();
            $("ul#backup6").show();
            $("ul#backupnew2").hide();
            $("p#myselful1").css('font-size',10);
            $("p#myselful2").css('font-size',10);
            $("p#myselful3").css('font-size',10);
            $("p#myselful4").css('font-size',10);
            $("p#myselful5").css('font-size',10);
            $("p#myselful6").css('font-size',10);
            $("p#myselful7").css('font-size',10);
            $(document).ready(function(){
                $("img#demo").hover(function(){
                    $("img#demo").css('opacity','0.8');
                    $("p#demowords").fadeIn();
                });
                $("img#demo").mouseleave(function(){
                    $("img#demo").css('opacity','1');
                });
            });
            $("img#formobile1").hover(function () {
                $("img#formobile1").css('opacity','0.8');
                $(".arrow_box").show();
            });
            $("img#formobile1").mouseleave(function () {
                $("img#formobile1").css('opacity','1');
                $(".arrow_box").hide();
            });
            document.getElementById("one").addEventListener("mousewheel",function () {
                $(".headword1").fadeIn(600);
                $("img#myphoto").fadeIn(1000);
                $(".myfiledetails").fadeIn(1500);
                $(".myexperience").fadeIn(1500);
            });
            document.getElementById("two").addEventListener("mousewheel",function () {
                $("h1#test2").css('display','block');
                kube();
            });
            document.getElementById("three").addEventListener("mousewheel",function () {
                $("h1#Self-appraisal").fadeIn(1000);
                $(".projects1").fadeIn(1500);
            });
            document.getElementById("four").addEventListener("mousewheel",function () {
                $("h1#myobjectwords").fadeIn(1000);
                $(".working").fadeIn(1500);
            });
            document.getElementById("five").addEventListener("mousewheel",function () {
                $("h1#endwords").fadeIn(1000);
                $("p#aboutme").fadeIn(1500);
                $(".communication").fadeIn(1500);
            });
        }
        if(devicewidth<=414){
            $(document).ready(function(){
                $(".photos").css('width','64px');
                $(".photos1").css('width','64px');
                $(".photos1").css('height','64px');
                $(".projects").css('width','20%');
                $(".projects").css('margin-left','5%');
                $("img#myself").css('height','130');
                $("img#myself").css('width','130');
                $("img#myphoto").css('width','80');
                $("img#myphoto").css('height','80');
                $("img#formobile1").css('height','60');
                $("img#formobile1").css('width','60');
                $("img#formobile2").css('height','60');
                $("img#formobile2").css('width','60');
                $(".bigcontainer").hide();
                $("h1#test").css('font-size','xx-large');
                $("h1#test2").css('font-size','xx-large');
                $("h1#endwords").css('font-size','xx-large');
                $("h1#myobjectwords").css('font-size','xx-large');
                $("p#aboutme").css('font-size',20);
                $("p#English").css('font-size',20);
            });
            $("ul#backup1").hide();
            $("ul#backup3").hide();
            $("ul#backup2").hide();
            $("ul#backup5").show();
            $("ul#backup4").hide();
            $("ul#backup6").show();
            $("ul#backupnew").hide();
            $(".bigcontainer2").show() ;
            $("p#myselful1").css('font-size',10);
            $("p#myselful2").css('font-size',10);
            $("p#myselful3").css('font-size',10);
            $("p#myselful4").css('font-size',10);
            $("p#myselful5").css('font-size',10);
            $("p#myselful6").css('font-size',10);
            $("p#myselful7").css('font-size',10);
            document.getElementById("one").addEventListener("touchmove",function () {
                $(".headword1").fadeIn(600);
                $("img#myphoto").fadeIn(1000);
                $(".myfiledetails").fadeIn(1500);
                $(".myexperience").fadeIn(1500);
            });
            document.getElementById("two").addEventListener("touchmove",function () {
                $("h1#test2").css('display','block');
                $(".ps").fadeIn(1500);
                $("div#aa").css('display','block');
                $("div#bb").css('display','block');
                $("div#cc").css('display','block');
                $("div#qw").css('display','block');
                $("div#ee").css('display','block');
                $("div#ff").css('display','block');
                $(".ps2").css('display','block');
            });
            document.getElementById("three").addEventListener("touchmove",function () {
                $("h1#Self-appraisal").fadeIn(1000);
                $(".projects2").fadeIn(1500);
            });
            document.getElementById("four").addEventListener("touchmove",function () {
                $("h1#myobjectwords").fadeIn(1000);
                $(".working2").fadeIn(1000);
                $("p#demowords2").fadeIn(1200);
            });
            document.getElementById("five").addEventListener("touchmove",function () {
                $("h1#endwords").fadeIn(1000);
                $("p#aboutme").fadeIn(1500);
                $("p#English").fadeIn(1500);
            });
        }
    });
    function kube(){
        setTimeout(function () {
            $("div#09").css('background-color', '#39B54A');
        }, 500);
        setTimeout(function () {
            $("div#08").css('background-color', '#39B54A');
        }, 700);
        setTimeout(function () {
            $("div#07").css('background-color', '#39B54A');
        }, 900);
        setTimeout(function () {
            $("div#06").css('background-color', '#39B54A');
        }, 1100);
        setTimeout(function () {
            $("div#05").css('background-color', '#39B54A');
        }, 1200);
        setTimeout(function () {
            $("div#04").css('background-color', '#39B54A');
        }, 1400);
        setTimeout(function () {
            $("div#03").css('background-color', '#39B54A');
        }, 1600);
        setTimeout(function () {
            $("div#02").css('background-color', '#39B54A');
        }, 1800);
        setTimeout(function () {
            $("div#19").css('background-color', '#39B54A');
        }, 500);
        setTimeout(function () {
            $("div#18").css('background-color', '#39B54A');
        }, 700);
        setTimeout(function () {
            $("div#17").css('background-color', '#39B54A');
        }, 900);
        setTimeout(function () {
            $("div#16").css('background-color', '#39B54A');
        }, 1100);
        setTimeout(function () {
            $("div#15").css('background-color', '#39B54A');
        }, 1200);
        setTimeout(function () {
            $("div#14").css('background-color', '#39B54A');
        }, 1400);
        setTimeout(function () {
            $("div#13").css('background-color', '#39B54A');
        }, 1400);
        setTimeout(function () {
            $("div#29").css('background-color', '#39B54A');
        }, 500);
        setTimeout(function () {
            $("div#28").css('background-color', '#39B54A');
        }, 700);
        setTimeout(function () {
            $("div#27").css('background-color', '#39B54A');
        }, 900);
        setTimeout(function () {
            $("div#26").css('background-color', '#39B54A');
        }, 1100);
        setTimeout(function () {
            $("div#25").css('background-color', '#39B54A');
        }, 1200);
        setTimeout(function () {
            $("div#24").css('background-color', '#39B54A');
        }, 1400);
        setTimeout(function () {
            $("div#39").css('background-color', '#39B54A');
        }, 500);
        setTimeout(function () {
            $("div#38").css('background-color', '#39B54A');
        }, 700);
        setTimeout(function () {
            $("div#37").css('background-color', '#39B54A');
        }, 900);
        setTimeout(function () {
            $("div#36").css('background-color', '#39B54A');
        }, 1100);
        setTimeout(function () {
            $("div#35").css('background-color', '#39B54A');
        }, 1200);
        setTimeout(function () {
            $("div#34").css('background-color', '#39B54A');
        }, 1400);
        setTimeout(function () {
            $("div#49").css('background-color', '#39B54A');
        }, 500);
        setTimeout(function () {
            $("div#48").css('background-color', '#39B54A');
        }, 700);
        setTimeout(function () {
            $("div#47").css('background-color', '#39B54A');
        }, 900);
        setTimeout(function () {
            $("div#46").css('background-color', '#39B54A');
        }, 1100);
        setTimeout(function () {
            $("div#45").css('background-color', '#39B54A');
        }, 1200);
        setTimeout(function () {
            $("div#44").css('background-color', '#39B54A');
        }, 1400);
        setTimeout(function () {
            $("div#59").css('background-color', '#39B54A');
        }, 500);
        setTimeout(function () {
            $("div#58").css('background-color', '#39B54A');
        }, 700);
        setTimeout(function () {
            $("div#57").css('background-color', '#39B54A');
        }, 900);
        setTimeout(function () {
            $("div#56").css('background-color', '#39B54A');
        }, 1100);
        setTimeout(function () {
            $("div#55").css('background-color', '#39B54A');
        }, 1200);
    }
});


