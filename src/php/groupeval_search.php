<?php
require_once 'conn.php';
require_once 'common.php';

//获取登录的用户名
LoginCheck::checklogin();
$id=  $_SESSION['id'];
$role = $_SESSION['role'];

/*$id = 7;
$role =0;
*/

$sql = "select distinct totalgrade.*,user.user_name,user.user_number,task.* from `totalgrade`,`user` ,`task`,`dotask` where task.task_id and user.user_number = totalgrade.evalute_user and task.task_id = dotask.task_id and dotask.id = totalgrade.doTask_id and task.publisher ='{$id}'";
$result = $conn->query($sql);


$m = array(
	'teacher'=> array('name' => '',
		'grade' => '',
		'id' => ''
		),
	'student' =>array('name' => '',
		'grade' => '',
		'id' => ''
		),
	'group'=> array(),
	'task_title'=>'',
	'totalGrade'=> '',
	'user_class'=>''

	);
$k =$m;

$g = array('name' => '',
	'grade' => '',
	'id' => ''
	);



$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$final = array();
$length = sizeof($rows); 

//print_r($rows);
for($i = 0;$i<$length;$i++){

	if($rows[$i]["role"] == 1){
		$k["teacher"]["name"]= $rows[$i]["user_name"];
		$k["teacher"]["grade"]= $rows[$i]["totalGrade"];
		//$k["teacher"]["id"] = $rows[$i]["evalute_user"];
		//echo $k["teacher"]["name"];
	}

	if($rows[$i]["role"] == 2){
		$k["student"]["name"]= $rows[$i]["user_name"];
		$k["student"]["grade"]= $rows[$i]["totalGrade"];
		$k["student"]["id"] = $rows[$i]["evalute_user"];
	
	}

	if($rows[$i]["role"] == 3){
		$g["name"]= $rows[$i]["user_name"];
		$g["grade"]= $rows[$i]["totalGrade"];
		$g["id"] = $rows[$i]["evalute_user"];
		$sumgroup += $rows[$i]["totalGrade"];
		array_push($k["group"],$g);
		//print_r($k);
	}


	if($i<$length-1){

		if($rows[$i]["doTask_id"] != $rows[$i+1]["doTask_id"] ){
			$groupnum = sizeof($k["group"]);

			$k["task_title"] =  $rows[$i]["task_title"];
			$k["user_class"] =  $rows[$i]["publish_class"];
			$k["totalgrade"] =  $k["teacher"]["grade"]*$rows[$i]["t_percent"]*0.01+ $k["student"]["grade"]*$rows[$i]["s_percent"]*0.01+$sumgroup*$rows[$i]["g_percent"]*0.01/$groupnum;
			array_push($final,$k);
			array_splice($k["group"],0);

		}
	}
}

//print_r($final);

//if (0 == mysqli_num_rows($result))existempty();

success($final);

//if (0 == mysqli_num_rows($result))existempty();
/*
success($rows);*/

?>