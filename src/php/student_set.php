<?php

require_once 'conn.php';
require_once 'common.php';

$id = $_SESSION["id"];
$do = $_POST["do"];

echo $do;

if($do == 1){
	$del = $_POST["student_id"];
	//$del = [2,5,6];
	echo $del[0];
	$length = sizeof($del);
	for($i=0;$i<$length;$i++){
		$sql = "DELETE FROM `user` WHERE `user_number` = {$del[$i]} ";
		$result = mysqli_query($conn, $sql);
			
	}
  if(1==$result)  success('');
}
else{
	$class = $_POST["student_class"];
$student_num = $_POST["student_id"];
$student_name = $_POST["student_name"];

	$sql = "INSERT INTO `user`(`user_number`,`user_name`,`user_class`,`user_role`, `user_password`) VALUES ({$student_num},'{$student_name}','{$class}',1,'123456')";
	$result = mysqli_query($conn, $sql);
//	$data =mysqli_insert_id($conn);
	if(1==$result)  success('');
}

ero('20',mysqli_error($conn));

?>