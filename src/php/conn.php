<?php
header("Content-type:text/html;charset=utf-8"); //定义编码和页面
header("Access-Control-Allow-Origin: *");   //跨域问题
  
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'jspj');
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
$conn->query("SET NAMES utf8");

?>