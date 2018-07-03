<?php
require_once 'conn.php';
header("Content-type: text/html; charset=utf-8");
session_start();
$name = $_POST['username'];
$pwd = $_POST['pwd'];
$trueName = $_POST['name'];
$role = 1;
if ($name == "" || $pwd == "" || $trueName == "") {
    echo "<script>alert('信息不能为空，请重新填写');history.go(-1);</script>";
}
$sql1 = "select * from user where user_number = '{$name}'";
$result1 = $conn->query($sql1);
//统计执行结果影响的行数
$num1 = $result1->num_rows;
if ($num1) {
    echo "<script>alert('您输入的用户名已存在,请重新注册！');history.go(-1);</script>";
} 
else {
    if (!$num1) {
        if (3 > strlen($name) || 15 < strlen($name)) {
            echo "<script>alert('用户名3-15位,请重新填写');history.go(-1);</script>";
        } 
        else{
            if (6 > strlen($pwd) || 20 < strlen($pwd)) {
                echo "<script>alert('密码6-20位,请重新填写');history.go(-1);</script>";
            } 
            else {
                if (2 > strlen($trueName)) {
                    echo "<script>alert('姓名至少2字以上，请重新填写');history.go(-1);</script>";
                } 
                else {
                    $insert_sql = "insert into user(user_number,user_password,user_name,user_role)values('{$name}' , '{$pwd}','{$trueName}','{$role}')";
                    $stmt = mysqli_prepare($conn, $insert_sql);
                    $result_insert = mysqli_stmt_execute($stmt);
                    if ($result_insert) {
                        echo "<script>alert('您已注册成功，正在返回登录');location='../pages/login.html'</script>";
                        mysqli_free_result($result_insert);
                        exit;
                    }
                }
            }
        }
    }
}
mysqli_close($conn);