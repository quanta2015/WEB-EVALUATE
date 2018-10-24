<?php

require_once 'conn.php';
require_once 'common.php';


$id = $_SESSION["id"];
$role = $_POST['role'];


  $sql = "select DISTINCT totalgrade.*,user.user_name,user.user_number,task.task_title,task.task_id from totalgrade,dotask,user,task where totalgrade.evalute_user = '{$id}' and totalgrade.role = '{$role}' and user.user_number IN(SELECT dotask.user_id FROM dotask WHERE dotask.id = totalgrade.doTask_id) and task.task_id IN(SELECT dotask.task_id FROM dotask WHERE dotask.id = totalgrade.doTask_id)";


   $result = $conn->query($sql);
  if (0 == mysqli_num_rows($result)) existempty();

   $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($rows);
 

?>