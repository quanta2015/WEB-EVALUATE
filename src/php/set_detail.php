<?php
require_once 'conn.php';
require_once 'common.php';

$id = $POST['id'];
$opr = $POST['operate'];
$content = $POST['$content'];

switch($opr){
	case 1: $sql = "UPDATE `evaluate` SET `item_title`= {$content["item_title"]},`item_content`={$content["item_content"]},`item_point`={$content["item_point"]} WHERE id = {$id}";
	break;
	case 2:$sql = "INSERT INTO `evaluate`(`tid`, `table_name`, `item_title`, `item_content`, `item_point`) VALUES ({$content["tid"]},{$content["table_name"]},{$content["item_title"]},{$content["item_content"]},{$content["item_point"]})";
	break;
	case 3:$sql = "DELETE FROM `evaluate` WHERE id = {$id}";
}

if (!$conn) connfail();

  $result = $conn->query($sql);

 if (0 == mysqli_num_rows($result))ero('20','unknow');

  success('');






?>