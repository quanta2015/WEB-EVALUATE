<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();
//获取登录的用户名
$failitem = array("task_title"=>NULL,"publish_date"=>NULL,"end_date"=>NULL);
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
if ($ID == "" ) {
    $response = array(
         'code' => 20,
         "msg"=>"ID existempty",
         );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    echo urldecode(json_encode($response));
}
else{
    //根据用户名获取到班级
    $sql1 = "select user_class from user where user_number ='$ID'";
    $result1 = $conn->query($sql1);
    $row1 = mysqli_fetch_array($result1);
    $temp= $row1['user_class'];
    if ($temp == "" ) {
    $response = array(
         'code' => 80,
         "msg"=>"class existempty",
         );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    die (urldecode(json_encode($response)));
    }
    else{
  
      //查询title
      //查询发布者姓名

       $sql4 = "select task_title,publish_date,end_date from task where publish_class = '$temp'";

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
 }
?>