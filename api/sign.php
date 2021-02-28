<?php

    $con = mysqli_connect('localhost','root','123456','yangmatou');
    $tel = $_POST['tel'];
    $password = $_POST['password'];
    $username = $_POST['username'];

    // $sql = "SELECT * FROM `userlist` WHERE `username`='$username' AND `password`='$password'";
    // $sql = "INSERT INTO `users` (`name`, `password`, `tel`) VALUES ('$tel', '$password', '$username')";

    // $res = mysqli_query($con,$sql);

    // if (!$res) {
    //     die('error for mysql: ' . mysqli_error());
    // }

    // $row = mysqli_fetch_assoc($res);

    // if (!$row) {
    //     // 没有匹配的数据 登录失败
    //     echo json_encode(array(
    //     "code" => 0,
    //     "message" => "注册失败"
    //     ));
    // } else {
    //     // 有匹配的数据 登录成功
    //     echo json_encode(array(
    //     "code" => 1,
    //     "message" => "注册成功"
    //     ));
    // }
    # 整体用双引号，表名和字段用反引号，变量和字符串用单引号
    $sql = "SELECT * FROM `userlist` WHERE `username`='$username'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }

    $row = mysqli_fetch_assoc($res);

    // 如果$row 有数据的时候表示 已经存在该用户名
    if($row){
        print_r('该用户名已经存在，请重新输入');
    }else{
        // $sql1 = "INSERT INTO `user` VALUES(null,'$user','$pass')";
        $sql1 = "INSERT INTO `userlist` (`id`, `tel`, `password`, `username`) VALUES (null,'$tel', '$password', '$username')";
        $res1 = mysqli_query($con,$sql1);
        print_r($res1);
    }
?>