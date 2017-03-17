<?php
if(isset($_GET['name']))
{
    $singal=$_GET['name'];
    $servername="localhost";
    $username="alpha";
    $password="wjsygr1127";
    $dbname="test";
//创建连接
    $conn=new mysqli($servername,$username,$password,$dbname);
//检测连接
    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    }
    $sql="SELECT user FROM `person` where user='{$_GET['name']}'";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {

        while($row=$result->fetch_all())
        {
            echo $row[0][0];
        }
    }
    else{

        echo"所查找的用户并不存在";
    }
    $conn->close();
}
else
{
    echo"error";
}
?>
