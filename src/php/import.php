<?php
header("Content-type:text/html;charset=utf-8");

//链接数据库
$link = @mysql_connect('127.0.0.1', 'root', '') or die('连接数据库失败')
                                          ;
mysql_select_db('test', $link);
mysql_query('set names utf8');

function upExecel() {
//判断是否选择了要上传的表格
    if (empty($_POST['myfile'])) {
        echo
           "<script>alert(您未选择表格);history.go(-1);</script>";
    }

//获取表格的大小，限制上传表格的大小5M
    $file_size = $_FILES['myfile']['size'];
    if ($file_size > 5 * 1024 * 1024) {
        echo
"<script>alert('上传失败，上传的表格不能超过5M的大小');history.go(-1);</script>"
                                           ;
        exit();
    }

//限制上传表格类型
    $file_type = $_FILES['myfile']['type'];
//application/vnd.ms-excel  为xls文件类型
    if ($file_type != 'application/vnd.ms-excel') {
        echo
"<script>alert('上传失败，只能上传excel2003的xls格式!');history.go(-1)</script>"
                                           ;
        exit();
    }

//判断表格是否上传成功
    if (is_uploaded_file($_FILES['myfile']['tmp_name'])) {
        require_once '../lib/PHPExcel/Classes/PHPExcel.php';
        require_once '../lib/PHPExcel/Classes/PHPExcel/IOFactory.php';
        require_once
              '../lib/PHPExcel/Classes/PHPExcel/Reader/Excel5.php';
        //以上三步加载phpExcel的类

        $objReader = PHPExcel_IOFactory::createReader('Excel5'); //use excel2007 for 2007 format
        //接收存在缓存中的excel表格
        $filename    = $_FILES['myfile']['tmp_name'];
        $objPHPExcel = $objReader->load($filename); //$filename可以是上传的表格，或者是指定的表格
        $sheet       = $objPHPExcel->getSheet(0);
        $highestRow  = $sheet->getHighestRow(); // 取得总行数
        // $highestColumn = $sheet->getHighestColumn(); // 取得总列数

        //循环读取excel表格,读取一条,插入一条
        //j表示从哪一行开始读取  从第二行开始读取，因为第一行是标题不保存
        //$a表示列号
        for ($j = 2; $j <= $highestRow; $j++) {
            $a = $objPHPExcel->getActiveSheet()->getCell("A" . $j)
                  ->getValue(); //获取A(学生名字)列的值
            $b = $objPHPExcel->getActiveSheet()->getCell("B" . $j)
                    ->getValue(); //获取B(学号)列的值

            //null 为主键id，自增可用null表示自动添加
            $sql = "
           INSERT INTO user(user_name, user_number) VALUES('$a','$b')";
            // echo "$sql";
            // exit();
            $res = mysql_query($sql);
            if ($res) {
                echo
"<script>alert('添加成功！');window.location.href='./PHPExcel/success.html';</script>"
                                           ;
            } else {
                echo
"<script>alert('添加失败！');window.location.href='./PHPExcel/success.html';</script>"
                                           ;
                exit();
            }
        }
    }
}

//调用
upExecel();

?>