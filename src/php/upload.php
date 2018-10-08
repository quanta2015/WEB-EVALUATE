<?php
require_once 'conn.php';
require_once 'common.php';
$id = $_SESSION["id"];
echo $id;
$allowtype = array("doc", "docx", "pdf", "ppt", "pptx", "mp4", "avi","flv", "wmv","mov","zip","rar","7z");  //允许上传的文件格式
$size = 100000000; //设置允许大小100M以内的文件
$path = "./upload"; //设置上传后保存文件的路径
$success = 0;
$newPath1;
$newPath2;
$newPath3;

//判断文件是否可以上传到服务器 $_FILES['myfile'][error]为0表示成功
//循环
for( $i = 0;$i < count($_FILES['file']['error']);$i++ ){

    $upfile[$i] = $_FILES['file']['name'][$i];

   if($_FILES['file']['error'][$i]>0){

        echo "上传错误";
        switch($_FILES['file']['error'][$i]){
        
            case 1:                    
                    ero(27,"文件上传文件大小超出了PHP配置文件中的约定值");
                    exit();
                  
            case 2: 
                    ero(30,'文件大小超出了表单中的约定值：MAX_FILE_SIZE');
                    exit();
                
            case 3: 
                    ero(33,'文件只被部分上传');
                    exit();
                  
            case 4: 
                    ero(35,'文件没有上传');
                    exit();
                    
            default: 
                     ero(39,'未知错误');
                     exit();
                    
        }
    }



    //判断上传的文件是否为允许的文件类型，通过文件的后缀名
    //array_pop 弹出并返回数组中的最后一个元素，并将array的长度减1
    $file = explode(".",$_FILES['file']['name'][$i]);
    $hz[$i] = array_pop($file);
    if(!in_array($hz[$i],$allowtype)){

        ero(53,"不是允许的文件类型！");
        exit();
    }

  

    //判断上传的文件是否允许大小
    if($_FILES['file']['size'][$i]>$size){

        ero(68,"文件超过了允许的大小");
    }


    //为了系统安全，同时也为了同名文件不被覆盖，上传后将文件名使用系统定义
    $filename[$i] = date("YmdHis").rand(100,999).".".$hz[$i];


    //判断是否为上传文件
    if(is_uploaded_file($_FILES['file']['tmp_name'][$i])){

        if(!move_uploaded_file($_FILES['file']['tmp_name'][$i],$path.'/'.$filename[$i])){
        
            ero(76,"不能将文件移动到指定目录");
        }
    }
    else{

        ero(86,"上传文件不是一个合法文件");
    }

    //如果文件上传成功
    $success++;
    $filesize[$i] = $_FILES['file']['size'][$i]/1024;
    echo "文件{$upfile[$i]}上传成功，保存在目录{$path}中，文件大小为{$filesize[$i]}KB<br>";
    $newPath[$i] = $path.'/'.$filename[$i];
    
    //echo $newPath.'<br/>';
}

if($success == 3){
    $newPath1 = $newPath[0];
    $newPath2 = $newPath[1];
    $newPath3 = $newPath[2];
    $sql = "UPDATE dotask SET doc_url ='{$newPath1}',ppt_url = '{$newPath2}',video_url = '{$newPath3}' WHERE user_id = '{$id}'";
   $result = mysqli_query($conn, $sql);

   if(1 == $result){
       success('');
       echo "<script>alert('上传成功');</script>";
      // header("Refresh:1;url=../pages/homework.html");
   }
   else{ 
       echo "<script>alert('上传失败');</script>";
       ero(88,'入库失败！');
       //exit();
   }
}
else{
   echo "<script>alert('上传失败');</script>";
   ero(115,'unkonwfail');
   //exit();
}
