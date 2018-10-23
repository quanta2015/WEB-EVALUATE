<?php

$multi_info=$_FILES;  
$dotask_id = 333;
foreach($multi_info as $name=>$up_info){
  fileupload($up_info,$dotask_id,$name);

  sleep(3); header("location:url地址");
}


function fileupload($up_info,$dotask_id,$name){
$allowedExts = array("doc","docx","mp4","mpeg","ppt","pptx","avi","flv","wmv","mov","zip","rar","rar");

$temp = explode(".", $up_info["name"]);

$extension = end($temp);     // 获取文件后缀名
if ( ($up_info["size"] < 204800)   // 小于 200 kb
&& in_array($extension, $allowedExts))
{
	if ($up_info["error"] > 0)
	{
		echo "错误：: " . $up_info["error"] . "<br>";
	}
	else
	{
		echo "上传文件名: " .$up_info["name"] . "<br>";
		echo "文件类型: " . $up_info["type"] . "<br>";
		echo "文件大小: " . ($up_info["size"] / 1024) . " kB<br>";		
		// 判断当期目录下的 upload 目录是否存在该文件
		// 如果没有 upload 目录，你需要创建它，upload 目录权限为 777
         $dir ="upload/dotask/".$dotask_id;
        if (!file_exists($dir))
            mkdir ($dir,0777,true);
  	$url = "upload/dotask/" .$dotask_id."/" . $dotask_id.".".$extension;
    // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
			move_uploaded_file($up_info["tmp_name"], $url);


			switch($name){
				case 'doc':
				$sql = "UPDATE dotask SET doc_url ='{$url}' WHERE dotask_id = '{$dotask_id}'";
				break;
				case 'ppt':
			    $sql = "UPDATE dotask SET ppt_url ='{$url}' WHERE dotask_id = '{$dotask_id}'";
				break;
				case 'video':
			    $sql = "UPDATE dotask SET video_url = '{$url}' WHERE dotask_id = '{$dotask_id}'";
				break;
			}

			 $result = mysqli_query($conn, $sql);
			 if(1==$result)
			 	echo "上传成功".$name;

		
	
}}
else
	echo "非法的文件格式";
}

?>