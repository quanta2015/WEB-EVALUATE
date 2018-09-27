<?php
require_once 'conn.php';
$id = $_SESSION['id'];
//$sql1 = "select dotask_id,user_id,sum(grade) from grade where dotask_id = '1' and eid in('1','2','3') and user_id = '$id'";//1换成点开的作业编号.这句话写在评分完成的PHP中
//$result1 = mysqli_query($conn,$sql1);
//if(mysqli_num_rows($result1)){
	//$sql2 = "insert into totalgrade(user_number,doTask_id,totalGrade) values('$id','1','sum(grade)')"; //同上
	//$result2 = mysqli_query($conn,$sql2);
    $sql3 = "select * from totalgrade where user_number = '$id' and dotask_id = '1'" ;
    //1为任务编号，之后根据前端页面再修改
    $result3 = mysqli_query($conn,$sql3);

if($arr = mysqli_fetch_assoc($result3)){
    ?>
    <table border='1'>
    <tr>
       <td>学号</td>
       <td>总成绩</td>
    </tr>
    <tr>
      <td><?php echo $arr['user_number'];?></td>
      <td><?php echo $arr['totalGrade']; ?></td>
    </tr>
</table>
    <?php
}
else{
    alert("未找到该学生的成绩信息！");
    exit;
}
?>