<?php
require_once 'conn.php';
require_once 'common.php';


$g_id = $_POST["id"];


 $sql = "select * from grade where dotask_id = {$_POST["dotask_id"]} and user_id = {$_SESSION['id']} ";

   $result = $conn->query($sql);

if (1 == $result)
{$row1 = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($row1);}
else ero('20','unkonwfail');



?>