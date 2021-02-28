<?php
    $id = $_GET['sellerInfoid'];
    $num = $_GET['goods_num'];
    $username = $_GET['username'];

    $con = mysqli_connect('localhost','root','123456','yangmatou');

    $sql = "UPDATE `car` SET `goods_num` = '$num' WHERE `userName`= '$username' AND `sellerInfoid` = '$id'";

    $res = mysqli_query($con,$sql);

    if(!$res){
        die('数据库链接失败'  . mysqli_error($con));
    }

    print_r(json_encode(array('code'=>$res,'msg'=>'修改成功'),JSON_UNESCAPED_UNICODE));

?>