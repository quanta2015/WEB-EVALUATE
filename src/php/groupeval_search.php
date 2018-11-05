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
	'totalgrade'=> '',
	'user_class'=>'',
	'group_avg'=>'',
	't_pgrade' =>'',
	's_pgrade' =>'',
	'g_pgrade' =>'',
	'group_tag' => 1,
	'total_tag' => 1

	);
$k =$m;

$g = array('name' => '',
	'grade' => '',
	'id' => ''
	);



$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$final = array();
$length = sizeof($rows); 
$group_tag = 1;
$total_tag = 1;

//print_r($rows);
for($i = 0;$i<$length;$i++){


	if($rows[$i]["role"] == 1){
		$k["teacher"]["name"]= $rows[$i]["user_name"];
		$k["teacher"]["grade"]= $rows[$i]["totalGrade"];
		if(!($k["teacher"]["grade"]))
			$k["total_tag"] =0;
		//$k["teacher"]["id"] = $rows[$i]["evalute_user"];
		//echo $k["teacher"]["name"];
	}

	if($rows[$i]["role"] == 2){
		$k["student"]["name"]= $rows[$i]["user_name"];
		$k["student"]["grade"]= $rows[$i]["totalGrade"];
		$k["student"]["id"] = $rows[$i]["evalute_user"];
		if(!($k["student"]["grade"]))
			$k["total_tag"] =0;
		
	}

	if($rows[$i]["role"] == 3){
		$g["name"]= $rows[$i]["user_name"];
		$g["grade"]= $rows[$i]["totalGrade"];
		$g["id"] = $rows[$i]["evalute_user"];
		$sumgroup += $rows[$i]["totalGrade"];
		if(!($rows[$i]["totalGrade"]))
			{	$k["group_tag"] = 0;
				$k["total_tag"] =0;

			}
			array_push($k["group"],$g);
		//print_r($k);
		}


		if($i<$length){


			if( $i == $length-1||$rows[$i]["doTask_id"] != $rows[$i+1]["doTask_id"]){
				$groupnum = sizeof($k["group"]);


				$k["task_title"] =  $rows[$i]["task_title"];
				$k["user_class"] =  $rows[$i]["publish_class"];
				$k["t_pgrade"] =  $k["teacher"]["grade"]*$rows[$i]["t_percent"]*0.01;
				$k["s_pgrade"] = $k["student"]["grade"]*$rows[$i]["s_percent"]*0.01;

				if($groupnum ==0){
				
					$t =  $k["teacher"]["grade"]*$rows[$i]["t_percent"]*0.01+ $k["student"]["grade"]*$rows[$i]["s_percent"]*0.01;
						$k["totalgrade"] = round($t, 2);
					$k["group_avg"] = 0;
					$k["g_pgrade"] = 0;
					$k["group_tag"] = 0;

				}
				else{
 
					$t =  $k["teacher"]["grade"]*$rows[$i]["t_percent"]*0.01+ $k["student"]["grade"]*$rows[$i]["s_percent"]*0.01+$sumgroup*$rows[$i]["g_percent"]*0.01/$groupnum;
					$k["totalgrade"] = round($t, 2);
					$k["group_avg"] = $sumgroup/$groupnum;
					$k["g_pgrade"] = $sumgroup*$rows[$i]["g_percent"]*0.01/$groupnum;
					$sumgroup = 0;
				}

				array_push($final,$k);
				array_splice($k["group"],0);
				$k["total_tag"] = 1;
				$k["group_tag"] = 1;

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