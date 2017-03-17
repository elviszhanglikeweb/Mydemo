$(document).ready(function () {
    var devicewidth=document.documentElement.clientWidth;
    if(devicewidth<=414){
        $(".login").css('display','none');
        $(".mobile").css('display','block');
        $(document).ready(function () {
            $("button#submitmobile").on('click',function () {
                $("#getmobile").css('visibility','visible');
                $.get("login.php",{name:$("#usermobile").val()},function (data) {
                    if(($("#password1mobile").val())==data)
                    {
                        $("#getmobile").text("Done!");
                        document.location.href="demo.html";
                    }
                });
            });
        });
    }
    $("button#submit").on('click',function () {
        $("#get").css('visibility','visible');
        $.get("login.php",{name:$("#user").val()},function (data) {
            if(($("#password1").val())==data)
            {
                // alert(data);
                $("#get").text("Done!");
                document.location.href="demo.html";
            }
        });
    });
});
$(document).ready(function () {
    $("button#submit").on('click',function () {
        sessionStorage.numuser=$('#user').val();
        sessionStorage.numpasswd=$('#password1').val();
    });
    $("button#submitmobile").on('click',function () {
        sessionStorage.numuser=$('#usermobile').val();
        sessionStorage.numpasswd=$('#password1mobile').val();
    });
});