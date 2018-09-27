<?php
require_once 'conn.php';
require_once 'common.php';

$id                 = $_SESSION['id'];
$newpassword        = $_POST['newpassword'];
if (!$conn) connfail();

    $sql    = "UPDATE user SET user_password = '$newpassword' WHERE user_number = '$id'";
    $result = mysqli_query($conn, $sql);

    if ($result) success('');
    else ero(99,'updatefail');
?>