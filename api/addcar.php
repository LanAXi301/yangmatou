<?php
    $sellerInfoid = $_POST['sellerInfoid'];
    $username = $_POST['username'];
    $con = mysqli_connect('localhost','root','123456','yangmatou');

    // 先去判断 这个用户对应的这个goods_id是否存在，如果存在直接修改这条数据的goods_num
    // 如果不存在  才把这个条数据添加到购物车数据表中
    $sql = "SELECT *  FROM `car` WHERE `username` = '$username' AND `sellerInfoid` = '$sellerInfoid'";

    $res = mysqli_query($con,$sql);
    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }
    $row = mysqli_fetch_assoc($res);

    if(!$row){
        // 说明不存在 这个用户名对应的这个条goods_id
        // 把这条数据添加到购物车表
        // $addSql = "INSERT INTO `car` VALUES ('$sellerInfoid','$username','1')";
        $addSql = "INSERT INTO `car`(`id`,`sellerInfoid`, `username`, `goods_num`) VALUES (NULL,'$sellerInfoid','$username','1')";
        $addRes = mysqli_query($con,$addSql);
        if(!$addRes){
            die('数据库链接错误' . mysqli_error($con));
        }
        print_r(json_encode(array('code'=>$addRes,"msg"=>"添加成功"),JSON_UNESCAPED_UNICODE));
    }else{
        $goods_num = ++$row['goods_num'];
        $updat = "UPDATE `car` SET `goods_num` = '$goods_num' WHERE `username` = '$username' AND `sellerInfoid` = '$sellerInfoid'";
        $updataRes = mysqli_query($con,$updat);

        if(!$updataRes){
            die('数据库链接错误' . mysqli_error($con));
        }
        print_r(json_encode(array('code'=>$updataRes,"msg"=>"成功"),JSON_UNESCAPED_UNICODE));
    }
?>