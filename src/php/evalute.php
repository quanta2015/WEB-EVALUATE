<?php

require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();

$id = $_SESSION["id"];
$type = $_POST["role"];
$dotask_id = $_POST["dotask"];
$grade = json_decode ($_POST["grade"],true);
$length = $_POST["length"];

if (!$conn) {
	$response = array(
		'code' => 55,
		"msg"=>"connectfail",
		);
	$response = CodeUtil::jsons_encode($response);
	header("Content-Type:text/html;charset=utf-8");
	die (urldecode(json_encode($response)));
}

for($i=0;$i<$length - 2;$i++){
	$p=$i+1;
	$detail = $grade[$i];
	$sql = "INSERT INTO `grade`(dotask_id,user_id,user_type,eid,grade) values('{$dotask_id}','{$id}','{$type}','{$p}','{$detail}')";
	$result = mysqli_query($conn, $sql);

}

if($type == 0)
$sql2 = "INSERT INTO `totalgrade`(dotask_id,t_grade) values('{$dotask_id}','{$grade[$i]}')";
if($type == 1)
$sql2 = "INSERT INTO `totalgrade`(dotask_id,s_grade) values('{$dotask_id}','{$grade[$i]}')";
if($type == 2)
$sql2 = "INSERT INTO `totalgrade`(dotask_id,g_grade) values('{$dotask_id}','{$grade[$i]}')";

$result2 = mysqli_query($conn, $sql2);

if(1==$result2){
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


	?>