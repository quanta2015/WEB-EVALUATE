<?php
include 'conn.php';

//允许上传的文件格式
$allowtype = array("doc", "docx", "pdf", "ppt", "pptx", "mp4", "avi","flv", "wmv","mov","zip","rar","7z"); 

$size = 100000000; //设置允许大小10M以内的文件
$path = "../../upload"; //设置上传后保存文件的路径


//判断文件是否可以上传到服务器 $_FILES['myfile'][error]为0表示成功
//循环
for( $i = 0;$i < count($_FILES['file']['error']);$i++ ){

    $upfile[$i] = $_FILES['file']['name'][$i];

    if($_FILES['file']['error'][$i]>0){

        echo "上传错误";
        switch($_FILES['file']['error'][$i]){
        
            case 1: die('第'.($i+1).'个文件上传文件大小超出了PHP配置文件中的约定值：upload_max_filesize');
            case 2: die('上传第'.($i+1).'个文件大小超出了表单中的约定值：MAX_FILE_SIZE');
            case 3: die('第'.($i+1).'个文件只被部分上传');
            case 4: die('第'.($i+1).'个文件没有上传');
            default: die('未知错误');
        }
    }



    //判断上传的文件是否为允许的文件类型，通过文件的后缀名
    //array_pop 弹出并返回数组中的最后一个元素，并将array的长度减1
    $file = explode(".",$_FILES['file']['name'][$i]);
    $hz[$i] = array_pop($file);
    if(!in_array(strtolower($hz[$i]),$allowtype)){

        die("第".($i+1)."个文件后缀是<b>{$hz}</b>,不是允许的文件类型！");
    }

 /*
    list($maintype,$subtype) = explode("/",$_FILES['myfile']['type']);
    if($maintype == "text"){

        die("不能上传文本文件");
    }
    */

    //判断上传的文件是否允许大小
    if($_FILES['file']['size'][$i]>$size){

        die("第".($i+1)."个文件超过了允许的<b>{$size}</b>");
    }


    //为了系统安全，同时也为了同名文件不被覆盖，上传后将文件名使用系统定义
    $filename[$i] = date("YmdHis").rand(100,999).".".$hz[$i];


    //判断是否为上传文件
    if(is_uploaded_file($_FILES['file']['tmp_name'][$i])){

        if(!move_uploaded_file($_FILES['file']['tmp_name'][$i],$path.'/'.$filename[$i])){
        
            die("不能将文件移动到指定目录");
        }
    }else{

        die("上传文件{$_FILES['file']['name'][$i]}不是一个合法文件");
    }

    //如果文件上传成功
    $filesize[$i] = $_FILES['file']['size'][$i]/1024;
    //$sql = "inser into dotask(doc_url,ppt_url,vedio_url) values ($path,$path,$path);";
    //mysql_query(conn,$sql);
    echo "文件{$upfile[$i]}上传成功，保存在目录{$path}中，文件大小为{$filesize[$i]}KB<br>";
}