<?php 
//echo phpinfo(); //查看php.ini所在位置
require_once 'conn.php';
require_once 'common.php';
$path = "../upload.php";
$filename = "hahaha.doc";
 $newPath= $path.'/'.$filename;
echo $newPath.'<br/>';
echo "hhh<br/>";
$newpath = array("u大发","upload大法师.php","upload.p的放大法hp");
  $newPath1 = $newPath[0];
    $newPath2 = $newPath[1];
    $newPath3 = $newPath[2];

$id = 061;

if (!$conn)
   echo "aaaa";

    $sql = "UPDATE dotask SET doc_url = '$newPath[0]' where user_id = '47' and task_id = '102'";
   $result = mysqli_query($conn, $sql);
   $sql2 = "UPDATE dotask SET doc_url ='$newPath1',ppt_url = '$newPath2',video_url = '$newPath3' WHERE user_id = '$id' and task_id = '102'";

   $result2 = $conn->query($sql2);
   $sql3 = "select * from user";
   $result3 = $conn->query($sql3);

   if($result2){
   	    echo "<script>alert('上传成功');</script>";
     header("Refresh:1;url=../pages/homework.html");
   }
   else{
   	   echo "not ok";
   }
?>