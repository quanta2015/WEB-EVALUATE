<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
$id = 15;
$setnum = 3;
//$class =  $_POST['class'];
//$setnum = $_POST['num'];
$sql = "select user_number from user where user_class = '软工162'";
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
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

$groups = array();
//$p = $setnum ;
$p=0;
$q = 0;
while($p <$setnum ){
	$a = array();
array_push($groups,$a);
$p++;}

while($q<$total){
$m = $p%$setnum;
if($data[$q]["user_number"] == $id);
$now = $m;

array_push($groups[$m],$data[$q]["user_number"]);
$q++;
$p++;
}


$length = count($groups[$now]);
$group = array();
for($i=0;$i<$length;$i++){
	$sid = $groups[$now][$i];
	$sql = "select dotask.id,task_title,user.user_number,user_name,user_class,g_grade from task,user,totalgrade,dotask where user.user_number = '{$sid}' and task.task_id =dotask.task_id and dotask.user_id = user.user_number and totalgrade.doTask_id = dotask.id";
	$result = mysqli_query($conn, $sql);
	$st = mysqli_fetch_all($result,MYSQLI_ASSOC);
	array_push($group,$st);
}

if ($group == array()) {
	$response = array(
		'code' =>77,
		"msg"=>"empty"
		);
	$response = CodeUtil::jsons_encode($response);
	mysqli_free_result($result);
	header("Content-Type:text/html;charset=utf-8");
	die (urldecode(json_encode($response)));
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