<?php
require_once 'conn.php';
require_once 'common.php';


$g_id = $_POST["id"];


 $sql = "select  dotask.id,task_id,user_id,t_grade,s_grade,g_grade from dotask,totalgrade,user where totalgrade.dotask_id = dotask.id and user.user_number = dotask.user_id and dotask.task_id IN (select task_id from task where task_title  = '{$title}') and user.user_number = '{$id}'";

   $result = $conn->query($sql);

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