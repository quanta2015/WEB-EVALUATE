<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");

$class =  $_POST['class'];
$setnum = $_POST['num'];
$sql = "select user_number,user_name from user where user_class = '{$class}'";


if (!$conn) {
	$response = array(
		'code' => 55,
		"msg"=>"connectfail",
		);
	$response = CodeUtil::jsons_encode($response);
	header("Content-Type:text/html;charset=utf-8");
	die (urldecode(json_encode($response)));
}



$result=mysqli_query($conn,$sql);
$total = mysqli_num_rows($result);
$data = mysqli_fetch_all($result);


if (0 == mysqli_num_rows($result)) {
	$response = array(
		'code' =>77,
		"msg"=>"empty"
		);
	$response = CodeUtil::jsons_encode($response);
	mysqli_free_result($result);
	header("Content-Type:text/html;charset=utf-8");
	die (urldecode(json_encode($response)));
}


$p = 0;$q = 0;
if($total % $setnum ==0)
	$gnum = $total/$setnum;
else
	$gnum = $total/$setnum +1;

$now = $data[0];
$group = array($now);

while($p +1<$setnum ){
	if($q + $setnum <$total)
		$q = $q + $setnum;
	else {
		$p = $p+1;
		$q = $p;
	}


@	$now = $data[$q];
	array_push($group,$now);

}

$response = array(
	'code' => 0,
	"msg"=>"successclass",
	'data'=>$group
	);
$response = CodeUtil::jsons_encode($response);
header("Content-Type:text/html;charset=utf-8");
echo urldecode(json_encode($response));

?>