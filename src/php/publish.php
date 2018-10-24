<?php
require_once 'conn.php';
require_once 'common.php';


 $class = $_POST["class"];
 $title = $_POST["title"];
 $time = $_POST["daterange"];
 $task = $_POST["task"];
 $s_percent = $_POST["s_percent"];
 $g_percent = $_POST["g_percent"];
 $t_percent = $_POST["t_percent"];
 $publisher = $_SESSION['id'];
 $group_num = $_POST["group_num"];

function idFlag($ids,$total){
	$idflags = array();
	for($i = 0;$i< $total ;$i++){
		$colum = array("id"=>$ids[$i][0],"flag"=>0);
		array_push($idflags,$colum);
	}
	return $idflags;

}

function addTotalgrade($dotask_id,$role,$evalute_user,$conn){
    $sql = "INSERT INTO totalgrade (dotask_id,role,evalute_user) values('{$dotask_id}',{$role},'{$evalute_user}')";
    mysqli_query($conn,$sql);

}

function rangeNum($num,$total){

	$rand_array=range(0,$total); 
    shuffle($rand_array);//调用现成的数组随机排列函数 
    return array_slice($rand_array,0,$num+1);
}

function randgroup($task_id,$group_num,$result,$conn,$publisher){
$total = mysqli_num_rows($result);
$ids = mysqli_fetch_all($result,MYSQLI_NUM);
$idflags = idFlag($ids,$total);

for($i=0;$i<$total;$i++){
//为班级每位学生创建dotask
	$sql = "INSERT INTO `dotask`(user_id,task_id)values('{$ids[$i][0]}','{$task_id}')";
	mysqli_query($conn,$sql);

$dotask_id =  mysqli_insert_id($conn);
 addTotalgrade($dotask_id,1,$publisher,$conn);
 addTotalgrade($dotask_id,2,$ids[$i][0],$conn);
shuffle($idflags);
$j = $group_num-1;
$k = 0;

while($j>0){

while($idflags[$k]['flag'] ==$group_num-1||$idflags[$k]['id'] == $ids[$i][0]){
 $k++;
if($k == $total-1) $k=0;
}
 
 $evalute_user = $idflags[$k]['id'];

 addTotalgrade($dotask_id,3,$evalute_user,$conn);
  $idflags[$k]['flag'] ++;
  $k++;
  $j--;
}


}
}



if ($class == "" || $title == "" || $time== "" || $task == "") existempty();

else {
    $time= explode(" - ", $time);
    $begin=date_format(date_create($time[0]), 'Y-m-d H:i:s');
    $end=date_format(date_create($time[1]), 'Y-m-d H:i:s');

if (!$conn) connfail();


    $insert_sql = "insert into task(publish_class,task_title,publish_date,end_date,task_content,publisher,s_percent,g_percent,t_percent,group_num)values('{$class}','{$title}','{$begin}','{$end}','{$task}','{$publisher}','{$s_percent}','{$g_percent}','{$t_percent}','{$group_num}')";

  
   if(1== mysqli_query($conn,$insert_sql)){
   	$task_id =  mysqli_insert_id($conn);
   	$sql = "select user_number from user where user_class = '{$class}'";
    $result = mysqli_query($conn,$sql);
   	randgroup($task_id,$group_num,$result,$conn,$publisher);
   	success('');
     }

   else ero('20','unkonwfail');

    
}


