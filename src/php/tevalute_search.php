<?php

require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");

$id = $_SESSION["id"];

//if($class == '全部' && $title =='全部'){
	$sql = "select task_title,dotask.id,task.task_id,user_id,user_class,user_name,t_grade from dotask,totalgrade,user,task where task.task_id = dotask.task_id and totalgrade.dotask_id = dotask.id and user.user_number = dotask.user_id ";
//}
/*if($class != '全部' && $title =='全部'){
   $sql = "select  dotask.id,task_id,user_id,user_class,user_name,t_grade from dotask,totalgrade,user where totalgrade.dotask_id = dotask.id and user.user_number = dotask.user_id and user.user_class = '{$class}'";
}
if($class == '全部' && $title !='全部'){
   $sql = "select  dotask.id,task_id,user_id,user_class,user_name,t_grade from dotask,totalgrade,user where totalgrade.dotask_id = dotask.id and user.user_number = dotask.user_id and dotask.task_id IN (select task_id from task where task_title  = '{$title}')";
}

if($class != '全部' && $title !='全部'){
   $sql = "select  dotask.id,task_id,user_id,user_class,user_name,t_grade from dotask,totalgrade,user where totalgrade.dotask_id = dotask.id and user.user_number = dotask.user_id and dotask.task_id IN (select task_id from task where task_title  = '{$title}') and user.user_class = '{$class}'";
}*/

   $result = $conn->query($sql);
   header("Content-type: text/html; charset=utf-8");
       //错误
   if (0 == mysqli_num_rows($result)) {
     $response = array(
       'code' =>77,
       "msg"=>"empty"
       );
     $response = CodeUtil::jsons_encode($response);
     mysqli_free_result($result);
     header("Content-Type:text/html;charset=utf-8");
     die (urldecode(json_encode($response)));
   }
        //正确返回
   $rows1 = mysqli_fetch_all($result,MYSQLI_ASSOC);
   $response = array(
     'code' => 0,
     "msg"=>"success",
     'data'=>$rows1
     );
   $response = CodeUtil::jsons_encode($response);
   header("Content-Type:text/html;charset=utf-8");
   echo urldecode(json_encode($response)); 
 

?>