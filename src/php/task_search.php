<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();
//获取登录的用户名
$id= $_SESSION['id'];
if ($id == "" ) {
  $response = array(
   'code' => 20,
   "msg"=>"empty loginmsg"
   );
  $response = CodeUtil::jsons_encode($response);
  header("Content-Type:text/html;charset=utf-8");
  die (urldecode(json_encode($response)));
}


if (!$conn) {
  $response = array(
    'code' => 10,
    "msg"=>"connectfail",
    );
  $response = CodeUtil::jsons_encode($response);
  header("Content-Type:text/html;charset=utf-8");
  die (urldecode(json_encode($response)));
}

 if($_SESSION['role']==0){
    $CLASS = $_POST['class'];
    if($CLASS == '全部' )
     $sql4 = "select task_id,task_title,publish_date,end_date,user.user_name  from task,user where publisher = user.user_number";
   else 
     $sql4 = "select task_id,task_title,publish_date,end_date,user.user_name  from task,user where publish_class = '{$CLASS}' and publisher = user.user_number";
 }
else {
  $CLASS = $_SESSION['class'];
  $sql4 = "select task_id,task_title,publish_date,end_date,user.user_name,total_tag from task,user,dotask where publish_class = '{$CLASS}' and user.user_number = publisher and dotask.user_id = '{$id}' and dotask.task_id = task.task_id";

}
  
   $result4 = $conn->query($sql4);
   header("Content-type: text/html; charset=utf-8");
       //错误
   if (0 == mysqli_num_rows($result4)) {
     $response = array(
       'code' =>77,
       "msg"=>"empty"
       );
     $response = CodeUtil::jsons_encode($response);
     mysqli_free_result($result4);
     header("Content-Type:text/html;charset=utf-8");
     die (urldecode(json_encode($response)));
   }
        //正确返回
   $rows1 = mysqli_fetch_all($result4,MYSQLI_ASSOC);
   $response = array(
     'code' => 0,
     "msg"=>"success",
     'data'=>$rows1
     );
   $response = CodeUtil::jsons_encode($response);
   header("Content-Type:text/html;charset=utf-8");
   echo urldecode(json_encode($response)); 
 ?>