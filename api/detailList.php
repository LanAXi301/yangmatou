<?php
    $con = mysqli_connect('localhost','root','123456','yangmatou');
    # 设置SQL语句
    $sql = "SELECT * FROM `listguess` WHERE 1 ";

    # 执行SQL语句
    $res = mysqli_query($con,$sql);
    if(!$res){
        die('error' . mysqli_error());
    }
    # 数据的处理
    $dataArr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($dataArr,$row);
        $row = mysqli_fetch_assoc($res);
    }
    echo json_encode(array(
        "code" => 1,
        "message" => "获取商品信息成功",
        "detail" => $dataArr
    ))
?>