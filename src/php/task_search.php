<?php
require_once 'conn.php';
require_once 'common.php';
header("Content-type: text/html; charset=utf-8");
session_start();
//获取登录的用户名
$failitem = array("task_title"=>NULL,"publish_date"=>NULL,"end_date"=>NULL);
if (!$conn) {
    $response = array(
    'code' => 10,
    "msg"=>"connectfail",
    );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    die (urldecode(json_encode($response)));
}
$ID = $_SESSION['name'];
if ($ID == "" ) {
    $response = array(
         'code' => 20,
         "msg"=>"ID existempty",
         );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    echo urldecode(json_encode($response));
}
else{
    //根据用户名获取到班级
    $sql1 = "select user_class from user where user_number ='$ID'";
    $result1 = $conn->query($sql1);
    $row1 = mysqli_fetch_array($result1);
    $temp= $row1['user_class'];
    if ($temp == "" ) {
    $response = array(
         'code' => 80,
         "msg"=>"class existempty",
         );
    $response = CodeUtil::jsons_encode($response);
    header("Content-Type:text/html;charset=utf-8");
    echo urldecode(json_encode($response));
    }
    else{
/*
//获取这个班级的作业信息
$title = $_SESSION['title'];
$sql2 = "select count(task_id) from task where publish_class = '$temp'";
$result2 = $conn->query($sql2);
$row2 =  mysqli_fetch_array($result2);
$count = $row2['count(task_id)'];
//echo $count;
//$s = 2;
$sql3 = "select publisher,publish_date,end_date,task_title from task where task_title = '$title'";
//print_r($sql3);
$result3 = $conn->query($sql3);  
$row3 = mysqli_fetch_array($result3);
$publisher = $row3['publisher'];
$publish_date = $row3['publish_date'];
$end_date = $row3['end_date'];
*/    
      //查询title
       $sql4 = "select task_title from task where publish_class = '$temp'";
       $result4 = $conn->query($sql4);
       $arr1[] = array();
       header("Content-type: text/html; charset=utf-8");
       //错误
       if (0 == mysqli_num_rows($result4)) {
             $response = array(
             'code' => 68,
             "msg"=>"wrongtitle",  
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            mysqli_free_result($result4);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));
        }
        //正确返回
       $rows1 = mysqli_fetch_all($result4);
       $response = array(
             'code' => 0,
             "msg"=>"success",
             'data'=>$rows1
              );
       $response = CodeUtil::jsons_encode($response);
       header("Content-Type:text/html;charset=utf-8");
       echo urldecode(json_encode($response));
       
       //查询发布时间
       $sql5 = "select publish_date from task where publish_class = '$temp'";
       $result5 = $conn->query($sql5);
       $arr2[] = array();
       header("Content-type: text/html; charset=utf-8");
       //错误
        if (0 == mysqli_num_rows($result5)) {
             $response = array(
             'code' => 96,
             "msg"=>"wrong publish_date",  
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            mysqli_free_result($result5);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));
        }
        //正确
       $rows2 = mysqli_fetch_assoc($result5);
       $response = array(
             'code' => 0,
             "msg"=>"success",
             'data'=>$rows2
              );
       $response = CodeUtil::jsons_encode($response);
       header("Content-Type:text/html;charset=utf-8");
       echo urldecode(json_encode($response));
     
       //查询结束时间
       $sql6 = "select end_date from task where publish_class = '$temp'";
       $result6 = $conn->query($sql6);
       $arr3[] = array();
       header("Content-type: text/html; charset=utf-8");
       //错误
        if (0 == mysqli_num_rows($result5)) {
             $response = array(
             'code' => 125,
             "msg"=>"wrong end_date",  
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            mysqli_free_result($result6);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));
        }
        //正确
       $rows3 = mysqli_fetch_assoc($result6);
       $response = array(
             'code' => 0,
             "msg"=>"success",
             'data'=>$rows3
              );
       $response = CodeUtil::jsons_encode($response);
       header("Content-Type:text/html;charset=utf-8");
       echo urldecode(json_encode($response));
   }
}


/*
for($i = 1;$i<=$count;$i++){
    $str=$arr[$i];
    $t1 = mb_strpos($str,'>')+1;
    $t2 = mb_strpos($str,')');
    echo $s = mb_substr($str,$t1,$t2-$t1);
	echo "<br>";
}
*/
/*
  $str=$rows[1];
  
    $t1 = mb_strpos($str,'>')+1;
    $t2 = mb_strpos($str,')');
    echo $s = mb_substr($str,$t1,$t2-$t1);
	echo "<br>";
*/


/*
//绘制一个作业框
$str = '<li class="lookLi">
		   <div class="titTxt">
			    <p style="padding-top: 11px;">
					<a href="../pages/homework.html" onclick="javascript:void(0);">作业： '.$title.';
					</a>
				</p>
				<div title="" class="pt5">
				    <span class="f1">开始时间：'.$publish_date.'</span>
				</div>
				<div title="" class="pt5">
				    <span class="f1">截止时间：'.$end_date.'</span>
				</div>
			    <div title="" class="pt5">
			        <span class="f1">作业状态:</span>
			            <strong></strong>
			    </div>
			</div>
			<div class="titOper">
				<p class="clearfix">
					<a class="Btn_blue" href="../pages/homework.html">
	                   <span>查看</span>
					</a>
				</p>
			</div>
	    </li>';
echo $str;
*/
// $_SESSION['publisher'] = $row2['publisher'];
// $_SESSION['task_title'] = $row2['task_title'];
// $_SESSION['publish_date'] = $row2['publish_date'];
// $_SESSION['end_date'] = $row2['end_date'];

//echo "$row2['publisher']";
//echo "$publisher,$class,$title,$content,$publish_date,$end_date";
//$name = $_SESSION['T_pwd'];
//echo $name;

?>
