<?php

require_once 'conn.php';
require_once 'common.php';

$id = $_SESSION["id"];
$type = $_POST["role"];
$dotask_id = $_POST["dotask"];
$gradelast = json_decode ($_POST["grade"],true);
$length = $_POST["length"];

if (!$conn) connfail();

   
    $sql = "select * from `grade` where dotask_id = {$dotask_id} and user_id = {$id} and  user_type = {$type} ";
    if(!(mysqli_query($conn, $sql)))
	$sql = "INSERT INTO `grade`(dotask_id,user_id,user_type,grade) values('{$dotask_id}','{$id}','{$type}','{$_POST["grade"]}')";
    else 
    $sql = "UPDATE `grade` SET `grade` = '{$_POST["grade"]}' where dotask_id = {$dotask_id} and user_id = {$id} and  user_type = {$type}";
	$result = mysqli_query($conn, $sql);


	$total = $gradelast[$length-1];

	$sql2 = "INSERT INTO `totalgrade`(dotask_id,`totalGrade`,`role`) values('{$dotask_id}','{$total}',{$type})";
	$result2 = mysqli_query($conn, $sql2);
if(1==$result2&&1 == $result )  success('');
else ero('20','unkonwfail');

	?>