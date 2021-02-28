<?php

    $con = mysqli_connect('localhost','root','123456','yangmatou');

    $sellerInfoid = $_GET['sellerInfoid'];

    $sql = "SELECT * FROM `listguess` WHERE `sellerInfoid`='$sellerInfoid'";

    $res = mysqli_query($con,$sql);

    if (!$res) {
        die('error for mysql: ' . mysqli_error());
    }

    $row = mysqli_fetch_assoc($res);

    echo json_encode(array(
        "code" => 1,
        "message" => "获取商品信息成功",
        "detail" => $row
    ))
?>