<?php
require_once 'conn.php';
require_once 'common.php';


$dotask_id = $_POST["dotask_id"];

 $sql = "select * from dotask where id = {$_POST["dotask_id"]} ";

   $result = $conn->query($sql);

if (1 == $result)
{$row1 = mysqli_fetch_all($result,MYSQLI_ASSOC);
  success($row1);}
else ero('20',mysqli_error($conn));



?>