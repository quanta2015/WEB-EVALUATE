<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();

//连接失败
if (!$conn){
    connfail();
 }

$sql = "select * from evaluate"; //获取评价标准
$result = $conn->query($sql);

//错误返回
if(0 == mysqli_num_rows($result)){   
	   existempty();
}

//正确返回
$row1 = mysqli_fetch_all($result,MYSQLI_ASSOC);
success($row1);

?>