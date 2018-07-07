<?php
require_once 'conn.php';
header("Content-type: text/html; charset=utf-8");
session_start();
//获取登录的用户名
$ID = $_SESSION['name'];

//根据用户名获取到班级
$sql1 = "select user_class from user where user_number ='$ID'";
$result1 = $conn->query($sql1);
$row1 = mysqli_fetch_array($result1);
$temp= $row1['user_class'];

//获取这个班级的作业信息
$title = $_SESSION['title'];
$sql2 = "select count(task_id) from task";
$result2 = $conn->query($sql2);
$row2 =  mysqli_fetch_array($result2);

$count = $row2['count(task_id)'];
//echo $count;
//$s = 2;
$sql3 = "select publisher,publish_date,end_date,task_title from task where task_title = '$title'";
//print_r($sql3);
$result3 = $conn->query($sql3);  
$row3 = mysqli_fetch_array($result3);
$publisher = $row3['publisher'];
$publish_date = $row3['publish_date'];
$end_date = $row3['end_date'];
//绘制一个作业框
$str = '<li class="lookLi">
		   <div class="titTxt">
			    <p style="padding-top: 11px;">
					<a href="../pages/homework.html" onclick="javascript:void(0);">作业1 '.$title.';
					</a>
				</p>
				<div title="" class="pt5">
				    <span class="f1">开始时间：'.$publish_date.'</span>
				</div>
				<div title="" class="pt5">
				    <span class="f1">截止时间：'.$end_date.'</span>
				</div>
			    <div title="" class="pt5">
			        <span class="f1">作业状态:</span>
			            <strong></strong>
			    </div>
			</div>
			<div class="titOper">
				<p class="clearfix">
					<a class="Btn_blue" href="../pages/homework.html">
	                   <span>查看</span>
					</a>
				</p>
			</div>
	    </li>';
echo $str;

// $_SESSION['publisher'] = $row2['publisher'];
// $_SESSION['task_title'] = $row2['task_title'];
// $_SESSION['publish_date'] = $row2['publish_date'];
// $_SESSION['end_date'] = $row2['end_date'];

//echo "$row2['publisher']";
//echo "$publisher,$class,$title,$content,$publish_date,$end_date";
//$name = $_SESSION['T_pwd'];
//echo $name;
?>