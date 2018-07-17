<?php

require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();

$id = $_SESSION["id"];
$type = $_POST["type"];
$dotask_id = $_POST["task"];
$grade = json_decode ($_POST["grade"],true);
$length = $_POST["length"];

for($i=0;$i<$length - 2;$i++){
	$p=$i+1;
	$detail = $grade[$i];
	$sql = "INSERT INTO `grade`(dotask_id,user_id,user_type,eid,grade) values('{$dotask_id}','{$id}','{$type}','{$p}','{$detail}')";
	$result = mysqli_query($conn, $sql);
}

?>