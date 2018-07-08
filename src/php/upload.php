<?php
//print_r($_FILES['file']);
header('Content-Type:text/html;charset=utf-8');
//if(@$_FILES['file'])echo "ddddddddd";;
include 'uploadHelp.php';
$upfile = new UploadFiles(array('filepath' => './upload', 'allowtype' => array(
'doc', 'docx', 'ppt', 'pptx', 'mp4', 'avi', 'flv', 'wmv'), 'israndfile' => true,
						       'maxsize' => '2000000'));
if ($upfile->uploadeFile('file')) {
	$arrfile = $upfile->getnewFile();
	foreach ($arrfile as $v) {
		echo $v, "<br/>";
	}
	echo "上传成功！";
} else {
	$err = $upfile->gteerror();
	if (is_array($err)) {
		foreach ($err as $v1) {
			echo $v1, "<br/>";
		}
	} else {
		echo $err;
	}
	//var_dump($err);
}
//var_dump($upfile);

?>