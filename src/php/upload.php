<?php
require_once 'conn.php';
require_once 'common.php';
$id = $_SESSION["id"];
echo $id . "<br/>";
$dotask_id = $POST['dotask_id'];
// echo $dotask_id . "hhhhh" . "<br/>";
$size    = 100000000; //设置允许大小100M以内的文件
$path    = "./upload"; //设置上传后保存文件的路径
$success = 0;
if (IS_AJAX) {
    $postfix = '';
    foreach ($_FILES['file']['tmp_name'] as $k => $v) {
        //获取文件名后缀
        $file    = explode(".", $_FILES['file']['name'][$k]);
        $postfix = array_pop($file);

        //判断文件类型是否正确

        //文件名转码
        $name = iconv("UTF-8", "gb2312", $_FILES['file']['name'][$k]);

        //保存文件
        move_uploaded_file($v, $path . '/' . $name); //文件名，地址

        echo $k . " " . $_FILES['file']['name'][$k] . "<br/>";
        $newPath = $path . '/' . $_FILES['file']['name'][$k];
        echo $newPath . "<br/>";
        switch ($k) {
            case '0':
                $sql = "UPDATE dotask SET doc_url ='{$newPath}' WHERE user_id = '{$id}'";
                break;
            case '01':
                $sql = "UPDATE dotask SET ppt_url = '{$newPath}' WHERE user_id = '{$id}'";
                break;
            case '02':
                $sql = "UPDATE dotask SET video_url = '$newPath' WHERE user_id = '{$id}'";
                break;
            default:
                break;
        }
        $result = mysqli_query($conn, $sql);
    }
    if (1 == $result) {
        success('');
    } else {
        ero(99, 'fail');
    }
}