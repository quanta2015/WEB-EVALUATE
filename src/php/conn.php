<?php
  // Define database connection constants
  define('DB_HOST', '127.0.0.1');
  define('DB_USER', 'root');
  define('DB_PASSWORD', '');
  define('DB_NAME', 'jspj');
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);   // 连接数据库
  $conn->query("SET NAMES utf8");
?>
