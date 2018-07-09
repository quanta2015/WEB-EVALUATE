<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();
//获取登录的用户名
$ID = $_SESSION['id'];
$CLASS = $_SESSION['class'];

if (!$conn) {
    $response = array(
    'code' => 10,
    "msg"=>"connectfail",
    );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    die (urldecode(json_encode($response)));
}
$ID = $_SESSION['name'];
if ($ID == "" || $CLASS == "" ) {
    $response = array(
         'code' => 20,
         "msg"=>"empty loginmsg",
         );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    echo urldecode(json_encode($response));
}
else{
       $sql4 = "select task_title,publish_date,end_date,user.user_name from task,user where publish_class = '{$CLASS}' and publisher = user.user_number";

       $result4 = $conn->query($sql4);
       $arr1[] = array();
       header("Content-type: text/html; charset=utf-8");
       //错误
       if (0 == mysqli_num_rows($result4)) {
             $response = array(
             'code' => 68,
             "msg"=>"wrongtitle",  
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            mysqli_free_result($result4);
            header("Content-Type:text/html;charset=utf-8");
            die (urldecode(json_encode($response)));
        }
        //正确返回
       $rows1 = mysqli_fetch_all($result4);
         $response = array(
             'code' => 0,
             "msg"=>"success",
             'data'=>$rows1
              );
       $response = CodeUtil::jsons_encode($response);
       header("Content-Type:text/html;charset=utf-8");
       echo urldecode(json_encode($response));

   }
 
?>