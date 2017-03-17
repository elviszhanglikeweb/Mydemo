$(document).ready(function(){
    var deviceheight=document.documentElement.clientHeight;
    $(".mainbody").css('height',deviceheight);
    var devicewidth=document.documentElement.clientWidth;
    if(devicewidth<=414){
        $(".register").css('display','none');
        $(".mobile").css('display','block');
        $("button#submitmobile").on('click',function () {
            $("#getmobile").css('visibility','visible');
            $.get("check.php",{name:$("#usermobile").val()},function (data) {
                if(data!=($("#usermobile").val()))
                {
                    if(($("#password1mobile1").val())==($("#password1mobile2").val())){
                        $.get("register.php",{name:$("#usermobile").val(),pd:$("#password1mobile1").val(),mail:$("#emailmobile").val()},function (data) {
                            $("span#getmobile").text(data);
                            document.location.href="login.html";
                        });
                    }
                    else {
                        $("span#getmobile").text("密码不一致");
                    }
                }
                else
                {
                    $("span#getmobile").text("已经存在用户");
                }
            });
        });
    }
});
$(document).ready(function () {
    $("button#submit").on('click',function () {
        $("#get").css('visibility','visible');
        $.get("check.php",{name:$("#user").val()},function (data) {
            if(data!=($("#user").val()))
            {
                if(($("#password1").val())==($("#password2").val())){
                    $.get("register.php",{name:$("#user").val(),pd:$("#password1").val(),mail:$("#email").val()},function (data) {
                        $("span#get").text(data);
                    });
                }
                else {
                    $("span#get").text("密码不一致");
                }
            }
            else
            {
                $("span#get").text("已经存在用户");
            }
        });
    });
});