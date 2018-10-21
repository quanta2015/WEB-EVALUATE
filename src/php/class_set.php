<?php

require_once 'conn.php';
require_once 'common.php';

$id = $_SESSION["id"];
$do = $_POST["do"];
$add = $_POST["class_name"];

echo $do;

if($do == 1){
	$del = $_POST["class_id"];
	//$del = [2,5,6];
	echo $del[0];
	$length = sizeof($del);
	for($i=0;$i<$length;$i++){
		$sql = "DELETE FROM `class` WHERE `class_id` = {$del[$i]} ";
		$result = mysqli_query($conn, $sql);
			
	}
  if(1==$result)  success('');
}
else{
	$sql = "INSERT INTO `class`(`class_name`, `teacher_num`) VALUES ('{$add}',{$id})";
	$result = mysqli_query($conn, $sql);
	$data =mysqli_insert_id($conn);
	if(1==$result)  success($data);
}

ero('20',mysqli_error($conn));

?>