<?php

header("Content-type: text/html; charset=utf-8");

if($_POST['submit']=='提交作业'){
	print_r($_FILES);
	function delEmpty($v){
		return $v!='';
	}
	$newUpFileName = array_filter($_FILES['file']['name'],'delEmpty');
	print_r($newUpFileName);
	$dirName = 'upload/';
	if(!is_dir($dirName)){
		mkdir($dirName,0777,1);
	}
	foreach($newUpFileName as $k=>$v){
		if(is_uploaded_file($_FILES['file']['tmp_name'][$k])){
			$upFileDir = $dirName.'/'.$_FILES['file']['name'][$k];
			if(move_uploaded_file($_FILES['file']['tmp_name'][$k],$upFileDir)){
				echo '<script type="text/javascript">
					alert("上传成功！");
					history.go(-1);
				</script>';
			}else{
				echo '<script type="text/javascript">
					alert("移动失败！");
					history.go(-1);
				</script>';
			}
		}else{
			echo '<script type="text/javascript">
				alert("不是通过http post上传的文件，请重新操作");
				history.go(-1);
			</script>';
		}
	}
}
?>