<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();

//连接失败
if (!$conn){
    $response = array(
    'code' => 55,
    "msg"=>"connectfail",
);
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    die (urldecode(json_encode($response)));
}

$sql = "select * from evaluate"; //获取评价标准
$result = $conn->query($sql);

//错误返回
if(0 == mysqli_num_rows($result)){   
	$response = array(
        'code' => 77,
        "msg" => "empty"
	);
	$response = CodeUtil::jsons_encode($response);
	mysqli_free_result($result);
	die(urldecode(json_encode($response)));
}

//正确返回
$row1 = mysqli_fetch_all($result,MYSQLI_ASSOC);
$response = array(
   'code' => 0,
   "msg" => "success",
   'data' => $row1   
);
//var_dump($row1);
$response = CodeUtil::jsons_encode($response);
echo urldecode(json_encode($response));

?>