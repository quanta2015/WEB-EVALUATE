<?php
require_once 'conn.php';
require_once 'common.php';

//获取登录的用户名
LoginCheck::checklogin();
$id = $_SESSION['id'];
if (!$conn) connfail();

  $sql = "select class_name from class where teacher_num = {$id}";
  $result = $conn->query($sql);

 if (0 == mysqli_num_rows($result))existempty();
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($rows);

?>