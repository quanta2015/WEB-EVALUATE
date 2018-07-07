<?php


header("Content-type: text/html; charset=utf-8");
session_start();

$_SESSION['name'] = $_POST['name'];

$failitem = array("user_id"=>NULL,"user_name"=>NULL,"user_number"=>NULL,"user_class"=>NULL,"user_role"=>NULL,"user_password"=>NULL);
 
//  登录系统开启一个session内容
if ($_POST['name']) {
    

    $pwd = $_POST["pwd"];
    // 验证填写信息是否合乎规范
    if ($pwd == "") {
            $response = array(
             'code' => 80,
             "msg"=>"emptypwd",
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));
    } 
    else {
        require_once 'conn.php';
        if (!$conn) {
            die('Could not connect: ' . mysqli_connect_error());
        }
        mysqli_query($conn, "SET NAMES UTF8");
        // 设定字符集
        $query = "select * from user where user_number = '{$_POST['name']}' and user_password = '{$_POST['pwd']}'";
        $result = mysqli_query($conn, $query);

        if (1 == mysqli_num_rows($result)) {
            $items = mysqli_fetch_assoc($result);
            $response = array(
             'code' => 0,
             "msg"=>"success",
              'data' => $items    // $items为关联数组
              );

            $response = CodeUtil::jsons_encode($response);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));
            $_SESSION['name'] = $_POST['name'];
            if($_POST['name'] == 'admin'){
                $_SESSION['name'] = 1;
            }


        }
        $query = "select * from user where user_number = '{$_POST['name']}' and user_password != '{$_POST['pwd']}'";
        $result = mysqli_query($conn, $query);
        if (1 == mysqli_num_rows($result)) {

             $response = array(
             'code' => 99,
             "msg"=>"wrongpassword", 
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));
            mysqli_free_result($result);
           // echo "<script>alert('密码填写有误,请重新填写');history.go(-1);</script>";
        }
        $query = "select * from user where user_number = '{$_POST['name']}'";


        $result = mysqli_query($conn, $query);
        if (0 == mysqli_num_rows($result)) {
             $response = array(
             'code' => 88,
             "msg"=>"wrongnumber",  
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            mysqli_free_result($result);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));
          //  echo "<script>alert('账号填写有误,请重新填写');history.go(-1);</script>";
        }
    }

}


else {  $response = array(
             'code' => 70,
             "msg"=>"emptynumber",
             'data'=>$failitem
              );
            $response = CodeUtil::jsons_encode($response);
            header("Content-Type:text/html;charset=utf-8");
            echo urldecode(json_encode($response));}

    // 释放结果

// CodeUtil类,用来给array中的中文进行urlencode
class CodeUtil
{
    public static function jsons_encode($array)
    {
        //遍历已有数组，将每个值 urlencode 一下
        foreach ($array as $key => $value) {
            if(is_string($value))
                $array[$key] = urlencode($value);
        }
        //用urldecode将值反解
        return $array;
    }
}




/*if($_POST['name']){
    echo '接受到数据'.$_POST['name'];
}else{
    echo '没有接受到数据';
}
*/

?>
