<?php
require_once 'conn.php';
require_once 'common.php';

//  登录系统开启一个session内容
if (!$conn) connfail();
mysqli_query($conn, "SET NAMES UTF8");
        // 设定字符集
        $query = "select * from user where user_number = '{$_POST['name']}' and user_password = '{$_POST['pwd']}'";
        $result = mysqli_query($conn, $query);

        if (1 == mysqli_num_rows($result)) {
                 $items = mysqli_fetch_assoc($result);
            $_SESSION['id'] = $_POST['name'];
            $_SESSION['class'] = $items['user_class'];
            $_SESSION['role'] = $items['user_role'];
            $_SESSION['name'] = $items['user_name'];
           success($items);
        }


        $query = "select * from user where user_number = '{$_POST['name']}' and user_password != '{$_POST['pwd']}'";
        $result = mysqli_query($conn, $query);
        if (1 == mysqli_num_rows($result)) 
              ero(99,'wrongpassword');
          
        $query = "select * from user where user_number = '{$_POST['name']}'";
        $result = mysqli_query($conn, $query);
        if (0 == mysqli_num_rows($result)) 
             ero(88,'wrongnumber');

    // 释放结果

?>
