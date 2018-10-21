<?php
require_once 'conn.php';
require_once 'common.php';

//获取登录的用户名
LoginCheck::checklogin();

$class = $_POST['class'];

if (!$conn) connfail();

  $sql = "select  * from user where user_role = 1 and user_class = {$class}";
  $result = $conn->query($sql);

 if (0 == mysqli_num_rows($result))existempty();
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($rows);

?>