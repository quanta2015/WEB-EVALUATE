<?php
require_once 'conn.php';
require_once 'common.php';

LoginCheck::checklogin();
$id = $_SESSION['id'];
$role = $_SESSION['role'];

$sql1 = "create or replace view b AS select a.doTask_id,AVG(a.totalGrade) as `groupGrade` from totalgrade a where role = 3 GROUP BY doTask_id";
$sql2 = "create or replace view c AS select doTask_id,totalGrade as `teacherGrade` from totalgrade where role = 1 ";
$sql3 = " create or replace view a AS select doTask_id,totalGrade as `selfGrade` from totalgrade where role = 2 ";
$sql4 =" create or replace view d AS select a.doTask_id ,teacherGrade,selfGrade,`groupGrade` from a,b,c where a.doTask_id = b.doTask_id and c.doTask_id = a.doTask_id";
mysqli_query($conn, $sql1);
mysqli_query($conn, $sql2);
mysqli_query($conn, $sql3);
mysqli_query($conn, $sql4);

if($role == 1)
 $sql = "select distinct d.*,s_percent,t_percent,g_percent,task.task_id,task.task_title,user.user_number,user.user_class,user.user_name from task,d,user where task.task_id in (select task_id from dotask where dotask.id = doTask_id) and doTask_id in(select id from dotask where user_id = {$id}) and user.user_number = {$id}";

else $sql = "select distinct d.*,s_percent,t_percent,g_percent,task.task_id,task.task_title,user.user_number,user.user_class,user.user_name from task,d,user where task.task_id in (select task_id from dotask where dotask.id = doTask_id) and task.publisher = {$id} and user.user_number in (select user_id from dotask where dotask.id = doTask_id) ";
$result = mysqli_query($conn, $sql);

if(!($result))
	ero('20',mysqli_error($conn));

$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
success($row);
?>