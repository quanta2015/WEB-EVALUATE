<?php
require_once 'conn.php';
require_once 'common.php';

//获取登录的用户名
LoginCheck::checklogin();
$id = $_SESSION['id'];
$role = $_SESSION['role'];
if($role ==1)
	ero(22,$_SESSION['class']);

if (!$conn) connfail();

  $sql = "select  class_id,class_name from class where teacher_num = {$id}";
  $result = $conn->query($sql);

 if (0 == mysqli_num_rows($result))existempty();
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($rows);

?>