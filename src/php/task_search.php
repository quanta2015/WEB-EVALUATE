<?php
require_once 'conn.php';
header("Content-type: text/html; charset=utf-8");
session_start();
//获取登录用户的班级
$ID = $_SESSION['name'];
$sql1 = "select user_class from user where user_number ='$ID'";
$result1 = $conn->query($sql1);
$row1 = mysqli_fetch_array($result1);
$temp= $row1['user_class'];
//$_SESSION['temp'] = $temp;
//获取这个班级的作业信息
$publisher = 0;
$task_title = '无';
$publish_date = '0-0-0 00:00:00';
$end_date = '0-0-0 00:00:00' ;
$sql2 = "select count(task_id) from task";
$result2 = $conn->query($sql2);
$row2 =  mysqli_fetch_array($result2);
$count = $row2['count(task_id)'];

// $s = 2;
// echo $result2->return;

function homework(){
	static $i = 0;
    global $count;
	// global $publisher;
	// global $task_title;
	// global $publish_date;
	// global $end_date;
	// $conn = mysqli_connect('127.0.0.1', 'root',  '123456',  'jspj');   // 连接数据库
 //    $conn->query("SET NAMES utf8");
	if($i < $count){
	 //    $sql3 = "select publisher,publish_date,end_date,task_title from task where publish_class = '$temp' and task_id = '$i' ";
	 //    $result3 = $conn->query($sql3);
		// $row3 = mysqli_fetch_array($result3);
		// 	  $publisher = $row3['publisher'];
		// 	  $task_title = $row3['task_title'];
		// 	  $publish_date = $row3['publish_date'];
		// 	  $end_date = $row3['end_date'];
		 $i++;
	}
	else{
	   $i = 0;
	}
	return $i;
}

// $_SESSION['publisher'] = $row2['publisher'];
// $_SESSION['task_title'] = $row2['task_title'];
// $_SESSION['publish_date'] = $row2['publish_date'];
// $_SESSION['end_date'] = $row2['end_date'];

//echo "$row2['publisher']";
//echo "$publisher,$class,$title,$content,$publish_date,$end_date";
//$name = $_SESSION['T_pwd'];
//echo $name;
