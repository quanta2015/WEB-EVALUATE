<?php
$id = $_SESSION["id"];
$do = $POST["do"];
$add = $POST["class"];


if($do == 1){
	$del = $_POST["del_id"];
	for($i=0;$del[$i];$i++){
		$sql = "DELETE FROM `class` WHERE `class_id` = {$del[$i]} ";
		$result = mysqli_query($conn, $sql);
	}
  
}
else{
	$sql = "INSERT INTO `class`(`class_name`, `teacher_num`) VALUES ({$add},{$id})";
	$result = mysqli_query($conn, $sql);
}

if(1==$result2)  success('');
else ero('20','unkonwfail');


?>