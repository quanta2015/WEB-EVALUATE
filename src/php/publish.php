<?php

header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin: *");

session_start();
if (isset($_POST['submit'])) {
    $class = $_POST["class"];
    $title = $_POST["title"];
    $begin = $_POST["begin"];
    $end = $_POST["end"];
    $wd = $_POST["task_wd"];
    $pt = $_POST["task_pt"];
    $vd = $_POST["task_vd"];
    if ($class == "" || $title == "" || $begin == "" || $end == "" || $wd == "" || $pt == "" || $vd == "") {
        echo "<script>alert('信息不能为空，请重新填写');history.go(-1);</script>";
    }
    else {
        require_once 'conn.php';
        if (!$conn) {
            die('Could not connect: ' . mysqli_connect_error());
        }
        mysqli_query($conn, "SET NAMES UTF8");
        $query = "insert into task (publish_class,task_title,task_content_wd,task_content_pt,task_content_vd,publish_date,end_date) values('{$_POST['class']}','{$_POST['title']}','{$_POST['task_wd']}','{$_POST['task_pt']}','{$_POST['task_vd']}','{$_POST['begin']}','{$_POST['end']}')";
        
        $result=mysqli_query($conn, $query);
        echo "<script>alert('发布成功!');location.href='../pages/task.html';</script>";
    }
    mysqli_free_result($result);
}
mysqli_close($conn);

?>