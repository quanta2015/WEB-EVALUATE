<?php
require_once 'conn.php';
require_once 'common.php';

header("Content-type: text/html; charset=utf-8");
session_start();

$id = $_SESSION['id'];
$newpassword         = $_POST['newpassword'];
$newpasswordconfirm  = $_POST['newpasswordconfirm'];

if ($newpassword == $newpasswordconfirm) {
    $sql = "UPDATE user SET user_password = '$newpassword' WHERE user_number = '$id'";
    $result = mysqli_query($conn, $sql);

    if ($result) { //   密码修改成功
        $response = array(
            'code' => 0,
            "msg"  => "success"
        );
        $response = CodeUtil::jsons_encode($response);
        echo urldecode(json_encode($response));
    }
    else{//  密码修改失败
        $response = array(
            'code' => 99,
            "msg"  => "updatefail"
        );
        $response = CodeUtil::jsons_encode($response);
        echo urldecode(json_encode($response));
    }
} 
else { //   两次密码不一致
    $response = array(
            'code' => 1,
            "msg"  => "confirmfail"
        );
        $response = CodeUtil::jsons_encode($response);
        echo urldecode(json_encode($response));
}