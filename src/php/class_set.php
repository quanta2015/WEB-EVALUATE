<?php

require_once 'conn.php';
require_once 'common.php';

$id = $_SESSION["id"];
$do = $POST["do"];
$add = $POST["class"];

echo $do;

if($do == 1){
	$del = $_POST["selcId"];
	//$del = [2,5,6];
	echo $del[0];
	$length = sizeof($del);
	for($i=0;$i<$length;$i++){
		$sql = "DELETE FROM `class` WHERE `class_id` = {$del[$i]} ";
		$result = mysqli_query($conn, $sql);
		//echo $result;
	}
  
}
else{
	$sql = "INSERT INTO `class`(`class_name`, `teacher_num`) VALUES ({$add},{$id})";
	$result = mysqli_query($conn, $sql);
}

//if(1==$result)  success('');
//else ero('20','unkonwfail');


?>