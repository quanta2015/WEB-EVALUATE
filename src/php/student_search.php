<?php
require_once 'conn.php';
require_once 'common.php';

//获取登录的用户名
LoginCheck::checklogin();

$class = $_POST['class'];


  $sql = "select  * from user where user_role = 1 and user_class = '{$class}'";
  $result = $conn->query($sql);
echo mysqli_error($conn);
 if (0 == mysqli_num_rows($result))existempty();
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($rows);

?>