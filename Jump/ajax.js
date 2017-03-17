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