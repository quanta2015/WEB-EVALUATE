<?php
require_once 'conn.php';
require_once 'common.php';
$id = $_SESSION["id"];

$multi_info = $_FILES;
$dotask_id  = $_POST["dotask_id"];
foreach ($multi_info as $name => $up_info) {
    fileupload($up_info, $dotask_id, $name, $conn);
}
header("refresh:0;url=../pages/student.html");


function fileupload($up_info, $dotask_id, $name, $conn) {
    $allowedExts = array("doc", "docx", "pdf","txt", "ppt", "pptx", "zip", "rar","7z");

    $temp = explode(".", $up_info["name"]);

    $extension = end($temp); // 获取文件后缀名
    if (($up_info["size"] < 2000000) // 小于 2M
         && in_array($extension, $allowedExts)) {
        if ($up_info["error"] > 0) {
            echo "错误：: " . $up_info["error"] . "<br>";
        } else {
            // 判断当期目录下的 upload 目录是否存在该文件
            // 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
            $dir = "upload/dotask/" . $dotask_id;
            if (!file_exists($dir)) {
                mkdir($dir, 0777, true);
            }

            $url = "upload/dotask/" . $dotask_id . "/" . $dotask_id
                                . "." . $extension;
            // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
            move_uploaded_file($up_info["tmp_name"], $url);

            switch ($name) {
                case 'doc':
                    $sql = "UPDATE dotask SET doc_url ='{$url}' , `doc_tag` = 0 WHERE id = '{$dotask_id}'";
                    break;
                case 'ppt':
                    $sql = "UPDATE dotask SET ppt_url ='{$url}' , `ppt_tag` = 0 WHERE id = '{$dotask_id}'";
                    break;
                case 'video':
                    $sql = "UPDATE dotask SET video_url = '{$url}' , `video_tag` = 0 WHERE id = '{$dotask_id}'";
                    break;
            }

            $result = mysqli_query($conn, $sql);
            $sql    = "UPDATE dotask SET `total_tag` = 0 WHERE id = '{$dotask_id}'";
            $result = mysqli_query($conn, $sql);
            if (1 == $result) {
                echo "上传成功" . $name;
            } else {
                echo ("错误描述: " . mysqli_error($conn));
            }
        }} else {
        echo "非法的文件格式";
    }
}
