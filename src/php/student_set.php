<?php

require_once 'conn.php';
require_once 'common.php';


$id = $_SESSION["id"];
$do = $_POST["do"];


if($do == 1){
	$del = $_POST["student_id"];
	//$del = [2,5,6];
	echo $del[0];
	$length = sizeof($del);
	for($i=0;$i<$length;$i++){
		$sql = "DELETE FROM `user` WHERE `user_number` = {$del[$i]} ";
		$result = mysqli_query($conn, $sql);
			
	}
  if(1==$result)  success('');
}
else{
	$class = $_POST["student_class"];
$student_num = $_POST["student_id"];
$student_name = $_POST["student_name"];

	$sql = "INSERT INTO `user`(`user_number`,`user_name`,`user_class`,`user_role`, `user_password`) VALUES ({$student_num},'{$student_name}','{$class}',1,'123456')";
	$result = mysqli_query($conn, $sql);

//	$data =mysqli_insert_id($conn);
//	
  newStd($student_name,$student_num,$class,$conn);

	if(1==$result)  success('');
}


function addTotalgrade($dotask_id,$role,$evalute_user,$conn){
    $sql = "INSERT INTO totalgrade (dotask_id,role,evalute_user) values('{$dotask_id}',{$role},'{$evalute_user}')";
    mysqli_query($conn,$sql);

  	//echo "tt:".mysqli_error($conn);
}

function newStd($sname,$sid,$sclass,$conn){

  $sql = "select task_id,publisher,group_num from task where publish_class = '{$sclass}'";
  $result = mysqli_query($conn, $sql);
  $length = mysqli_num_rows($result);
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  mysqli_free_result($result); 

      $sql = "select user_number from user where user_class = '{$sclass}'";
    $result = mysqli_query($conn,$sql);
    $ids = mysqli_fetch_all($result,MYSQLI_NUM);
//print_r($rows);
for( $i = 0;$i< $length;++$i){
  	$sql = "INSERT INTO `dotask`(user_id,task_id)values('{$sid}','{$data[$i]['task_id']}')";
	mysqli_query($conn,$sql);
	//echo "task:".$data[$i]['task_id'];
  //	echo "data:".mysqli_error($conn);
	$dotask_id = mysqli_insert_id($conn); 
  	addTotalgrade($dotask_id,1,$data[$i]['publisher'],$conn);
    addTotalgrade($dotask_id,2,$sid,$conn);
    $groupnum = $data[$i]['group_num']-1;

    shuffle($ids);
    //print_r($ids);
       $j = 0;
    while($j<$groupnum){ 
    while($ids[$j][0] == $sid){
    	$j++;
    	if($j == $group_num )
    	$j=0;
  }
 // echo "d:".$ids[$j][0];
     addTotalgrade($dotask_id,3,$ids[$j][0],$conn);
     $j++;

//  	echo mysqli_error($conn);
}


}
}

ero('20',mysqli_error($conn));

?>