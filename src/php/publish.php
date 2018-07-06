<?php
require_once 'conn.php';
header("Content-type: text/html; charset=utf-8");
session_start();
if (isset($_POST['submit'])) {
    $class = $_POST["class"];
    $title = $_POST["title"];
    $begin = $_POST["begin"];
    $end = $_POST["end"];
    $wd = $_POST["task_wd"];
    $pt = $_POST["task_pt"];
    $vd = $_POST["task_vd"];
    $publisher = $_SESSION['name'];
    if ($class == "" || $title == "" || $begin == "" || $end == "" || $wd == "" || $pt == "" || $vd == "") {
        echo "<script>alert('信息不能为空，请重新填写');history.go(-1);</script>";
    } 
    else {
        if (!$conn) {
            die('Could not connect: ' . mysqli_connect_error());
        }
        $insert_sql = "insert into task(publish_class,task_title,publish_date,end_date,task_content_wd,task_content_pt,task_content_vd,publisher)values('{$class}','{$title}','{$begin}','{$end}','{$wd}','{$pt}','{$vd}','{$publisher}')";
        //print_r($insert_sql);
        $result = mysqli_query($conn, $insert_sql);
        echo "<script>alert('发布成功!');location.href='../pages/evalute.html';</script>";
    }
}
mysqli_close($conn);
