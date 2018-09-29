<?php

require_once 'conn.php';
require_once 'common.php';


//$id = $_SESSION["id"];
//$role = $_SESSION['role'];

$id = 7;
$role = 1;


  $sql = "select task.task_id,task.task_title,totalgrade.*,user.user_name,user.user_number,user.user_class,dotask.total_tag from dotask,totalgrade,user,task where task.task_id = dotask.task_id and totalgrade.dotask_id = dotask.id and user.user_number = dotask.user_id and totalgrade.role = {$role} and totalgrade.evalute_user = {$id}";


   $result = $conn->query($sql);
  if (0 == mysqli_num_rows($result)) existempty();

   $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($rows);
 

?>