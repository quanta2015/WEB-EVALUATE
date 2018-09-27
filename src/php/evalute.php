<?php

require_once 'conn.php';
require_once 'common.php';

$id = $_SESSION["id"];
$type = $_POST["role"];
$dotask_id = $_POST["dotask"];
$grade = json_decode ($_POST["grade"],true);
$length = $_POST["length"];

if (!$conn) connfail();
function detailgrade(){
for($i=0;$i<$length - 2;$i++){
	$p=$i+1;
	$detail = $grade[$i];
	$sql = "INSERT INTO `grade`(dotask_id,user_id,user_type,eid,grade) values('{$dotask_id}','{$id}','{$type}','{$p}','{$detail}')";
	$result = mysqli_query($conn, $sql);
}
}

function totalgrade($role){

	$sql = "INSERT INTO `totalgrade`(dotask_id,`role`) values('{$dotask_id}','{$grade[$i]}',{$role})";
	$result2 = mysqli_query($conn, $sql2);

if(1==$result2)  success('');
else ero('20','unkonwfail');
}


detailgrade();

switch ($type) {
	case 0:
		totalgrade(1);
		break;
	case 1:
		totalgrade(2);
		break;
	case 2:
		totalgrade(3);
		break;
}

	?>