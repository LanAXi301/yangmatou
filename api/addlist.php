<?php
    $id = $_GET['id'];
    $name = $_GET['name'];
    $deliveryName = $_GET['deliveryName'];
    $pic = $_GET['pic'];
    $price = $_GET['price'];
    $sellerInfoid = $_GET['sellerInfoid'];
    $avatarUrl = $_GET['avatarUrl'];
    $sellerInfoname = $_GET['sellerInfoname'];
    $countryName = $_GET['countryName'];
    $countryIconUrl = $_GET['countryIconUrl'];
    
    $con = mysqli_connect('localhost','root','123456','yangmatou');
    $sql = "SELECT * FROM `listguess` WHERE `name` = '$name'";
    $res = mysqli_query($con,$sql);
    if(!$res){
        die('数据库链接错误' . mysqli_error($con));
    }
    $row = mysqli_fetch_assoc($res);
    if(!$row){
        // $sql1 = "INSERT INTO `goodslist`(`goodsId`, `categoryId`, `categoryName`, `couponDiscount`, `descTxt`, `goodsImageUrl`, `goodsName`, `goodsSign`, `goodsType`, `lgstTxt`, `mallName`, `minGroupPrice`, `optId`, `salesTip`, `servTxt`,`detail`) VALUES (null,'$categoryId','$categoryName','$couponDiscount','$descTxt','$goodsImageUrl','$goodsName','$goodsSign','$goodsType','$lgstTxt','$mallName','$minGroupPrice','$optId','$salesTip','$servTxt','1')";
        $sql1 = "INSERT INTO `listguess` (`id`,`name`,`deliveryName`,`pic`,`price`,`sellerInfoid`,`avatarUrl`,`sellerInfoname`,`countryName`,`countryIconUrl`) VALUES ('$id','$name','$deliveryName','$pic','$price','$sellerInfoid','$avatarUrl','$sellerInfoname','$countryName','$countryIconUrl')";
        $res1 = mysqli_query($con,$sql1);
        print_r($res1);
    }
?>