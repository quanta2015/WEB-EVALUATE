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


if($_SESSION['role'] == 0 ){
  $sql = "select class_name from class where teacher_num = {$id}";
  $result = $conn->query($sql);

  if (0 == mysqli_num_rows($result)) {
   $response = array(
     'code' =>77,
     "msg"=>"empty"
     );
   $response = CodeUtil::jsons_encode($response);
   mysqli_free_result($result4);
   header("Content-Type:text/html;charset=utf-8");
   die (urldecode(json_encode($response)));
 }
 else{
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
  $response = array(
   'code' => 0,
   "msg"=>"successclass",
   'data'=>$rows
   );
  $response = CodeUtil::jsons_encode($response);
  header("Content-Type:text/html;charset=utf-8");
  echo urldecode(json_encode($response));}
}


?>