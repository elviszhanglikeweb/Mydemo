<?php
if(isset($_GET['name'])&&isset($_GET['pd'])&&isset($_GET['mail'])){
    $servername="localhost";
    $username="alpha";
    $password="wjsygr1127";
    $dbname="test";
// 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
    if (!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO `person` (user, password,email)VALUES ('{$_GET['name']}', '{$_GET['pd']}','{$_GET['mail']}')";
    if (mysqli_query($conn, $sql)) {
        echo "注册成功";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
else
{
    echo "error";
}
?>