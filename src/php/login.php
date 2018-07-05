<?php

header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin: *");

session_start();
session_regenerate_id(TRUE);
session_name("mysessionid");

if (isset($_POST['submit'])) {
    $user = $_POST["name"];
    $pwd = $_POST["pwd"];
    
    if ($user == "" || $pwd == "") {
        echo "<script>alert('信息不能为空，请重新填写');history.go(-1);</script>";
    } 
    else {
        require_once 'conn.php';

        if (!$conn) {
            die('Could not connect: ' . mysqli_connect_error());
        }
        mysqli_query($conn, "SET NAMES UTF8");
        
        $query = "select * from user where user_number = '{$_POST['name']}' and user_password = '{$_POST['pwd']}'";
        $result = mysqli_query($conn, $query);
        if (1 == mysqli_num_rows($result)) {
            $json_arr = array('success' => 1);

            $_SESSION['is_login'] = "true";
            $_SESSION['username'] = $_POST['name'];
            $_SESSION['password'] = $_POST['pwd'];

            header("Location:../pages/task.html");
        }

        $query = "select * from user where user_number = '{$_POST['name']}' and user_password != '{$_POST['pwd']}'";
        $result = mysqli_query($conn, $query);
        $rows = mysqli_num_rows($result);
        if (1 == $rows) {
            $json_arr = array('success' => -2);
            // echo "<script>alert('密码填写有误,请重新填写');history.go(-1);</script>";
        }

        $query = "select * from user where user_number = '{$_POST['name']}'";
        $result = mysqli_query($conn, $query);
        $rows = mysqli_num_rows($result);
        if (0 == rows) {
            $json_arr = array('success' => -1);
            // echo "<script>alert('用户不存在,请重新填写');history.go(-1);</script>";
        }
    }
    mysqli_free_result($result);

    $login_json = json_encode($json_arr,TRUE);
    echo $login_json;
}
mysqli_close($conn);