<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();

$class = $_POST["class"];
$title = $_POST["title"];
$time = $_POST["daterange"];
$wd = $_POST["task_wd"];
$pt = $_POST["task_pt"];
$vd = $_POST["task_vd"];
$publisher = $_SESSION['name'];
   //echo $class. $title. $begin. $end. $wd. $pt. $vd. $publisher;
if ($class == "" || $title == "" || $time== "" || $wd == "" || $pt == "" || $vd == "") {
    $response = array(
         'code' => 80,
         "msg"=>"existempty",

         );
        $response = CodeUtil::jsons_encode($response);
        header("Content-Type:text/html;charset=utf-8");
        echo urldecode(json_encode($response));
} 
else {
    $time= explode(" - ", $time);
    $begin=date_format(date_create($time[0]), 'Y-m-d H:i:s');
    $end=date_format(date_create($time[1]), 'Y-m-d H:i:s');



    if (!$conn) {
         $response = array(
         'code' => 55,
         "msg"=>"connectfail",
         );
        $response = CodeUtil::jsons_encode($response);
        header("Content-Type:text/html;charset=utf-8");
        die (urldecode(json_encode($response)));
    }
    $insert_sql = "insert into task(publish_class,task_title,publish_date,end_date,task_content_wd,task_content_pt,task_content_vd,publisher)values('{$class}','{$title}','{$begin}','{$end}','{$wd}','{$pt}','{$vd}','{$publisher}')";
    
   // print_r($insert_sql);
   if(1==mysqli_query($conn,$insert_sql)){
    $response = array(
         'code' => 0,
         "msg"=>"success",
         );
        $response = CodeUtil::jsons_encode($response);
        header("Content-Type:text/html;charset=utf-8");
        die (urldecode(json_encode($response)));}

     $response = array(
         'code' => 20,
         "msg"=>"unknownfail",
         );
        $response = CodeUtil::jsons_encode($response);
        header("Content-Type:text/html;charset=utf-8");
        echo (urldecode(json_encode($response)));


    
}

mysqli_close($conn);

