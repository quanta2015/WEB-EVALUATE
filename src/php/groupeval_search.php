<?php
require_once 'conn.php';
require_once 'common.php';

//获取登录的用户名
LoginCheck::checklogin();
$dotask_id= $_POST['dotask_id'];
$role = $_SESSION['role'];
if($role ==1)
	ero(22,$_SESSION['class']);

if (!$conn) connfail();

  $sql = "select distinct totalgrade.*,user.user_name from `totalgrade`,`user` where totalgrade.dotask_id = {$dotask_id}  and user.user_number = totalgrade.evalute_user";
  $result = $conn->query($sql);

 if (0 == mysqli_num_rows($result))existempty();
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($rows);

?>