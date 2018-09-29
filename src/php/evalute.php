<?php

require_once 'conn.php';
require_once 'common.php';

$id = $_SESSION["id"];
$role = $_POST["role"];
$dotask_id = $_POST["dotask"];
$grade = json_decode ($_POST["grade"],true);
$length = $_POST["length"];

if (!$conn) connfail();
function detailgrade($id,$type,$grade){
for($i=0;$i<$length - 2;$i++){
	$p=$i+1;
	$detail = $grade[$i];
	$sql = "INSERT INTO `grade`(dotask_id,user_id,user_type,eid,grade) values('{$dotask_id}','{$id}','{$type}','{$p}','{$detail}')";
	$result = mysqli_query($conn, $sql);
}

}

function totalgrade($role,$total){

	$sql = "INSERT INTO `totalgrade`(dotask_id,`role`) values('{$dotask_id}','{$total}',{$role})";
	$result2 = mysqli_query($conn, $sql2);

if(1==$result2)  success('');
else ero('20','unkonwfail');
}



detailgrade($id,$role,$grade);
$total = $grade[$length-1];
totalgrade($role,$total);

}
	?>