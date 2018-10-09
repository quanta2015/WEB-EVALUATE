<?php
require_once 'conn.php';
require_once 'common.php';
//获取登录的用户名
LoginCheck::checklogin();
$id = $_SESSION['id'];
$CLASS = $_SESSION['class'];
if (!$conn) connfail();


 if($_SESSION['role']==0)

     $sql = "select * from task where publisher = {$id}";

else 
  $sql = "select task.*,user.user_name,total_tag,dotask.id from task,user,dotask where publish_class = '{$CLASS}' and user.user_number = publisher and dotask.user_id = '{$id}' and dotask.task_id = task.task_id";


 $result = $conn->query($sql);

       //错误
   if (0 == mysqli_num_rows($result)) existempty();
        //正确返回
   $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 success($rows);
 ?>