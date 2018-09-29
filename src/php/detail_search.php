<?php
require_once 'conn.php';
require_once 'common.php';

if (!$conn) connfail();
$sql = "select * from evaluate"; //获取评价标准
$result = $conn->query($sql);

//错误返回
if(0 == mysqli_num_rows($result))ero(20,'unkonwfail');


//正确返回
$row1 = mysqli_fetch_all($result,MYSQLI_ASSOC);
success($row1);
?>