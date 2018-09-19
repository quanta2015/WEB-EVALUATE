<?

function expExcel($arr, $name) {
  require_once '../lib/PHPExcel/Classes/PHPExcel.php';
  //实例化
  $objPHPExcel = new PHPExcel();
  /*右键属性所显示的信息*/
  $objPHPExcel->getProperties()->setCreator("zxf") //作者
              ->setLastModifiedBy("zxf") //最后一次保存者
              ->setTitle('数据EXCEL导出') //标题
              ->setSubject('数据EXCEL导出') //主题
              ->setDescription('导出数据') //描述
              ->setKeywords("excel") //标记
              ->setCategory("result file"); //类别

  //设置当前的表格
  $objPHPExcel->setActiveSheetIndex(0);
  // 设置表格第一行显示内容
  $objPHPExcel->getActiveSheet()
              ->setCellValue('A1', '学生姓名')
              ->setCellValue('B1', '学号')
              //设置第一行为红色字体
              ->getStyle('A1:B1')->getFont()->getColor()->setARGB(
                PHPExcel_Style_Color::COLOR_RED);

  $key = 1;
  /*以下就是对处理Excel里的数据，横着取数据*/
  foreach ($arr as $v) {
    //设置循环从第二行开始
    $key++;
    $objPHPExcel->getActiveSheet()

                //Excel的第A列，name是你查出数组的键值字段，下面以此类推
                ->setCellValue('A' . $key, $v['user_name'])
                ->setCellValue('B' . $key, $v['user_number']);
  }
  //设置当前的表格
  $objPHPExcel->setActiveSheetIndex(0);
// 　　    ob_end_clean();     //清除缓冲区,避免乱码
  header('Content-Type: application/vnd.ms-excel'); //文件类型
  header('Content-Disposition: attachment;filename="' . $name . '.xls"');
                     //文件名
  header('Cache-Control: max-age=0');
  header('Content-Type: text/html; charset=utf-8'); //编码
  $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5'); //excel 2003
  $objWriter->save('php://output');
  exit;
}

/***********调用**********************/
header("Content-type:text/html;charset=utf-8");

//链接数据库
$link = @mysql_connect('localhost', 'root', '') or die('连接数据库失败')
                        ;
mysql_select_db('test', $link);
mysql_query('set names utf8');

//先获取数据
$sql = "select * from user";
$res = mysql_query($sql);
$arr = array();
//把$res=>$arr,把结果集内容转移到一个数组中
while ($row = mysql_fetch_assoc($res)) {
  $arr[] = $row;
}

//excel表格名
$name = "学生名单";

//调用
expExcel($arr, $name);

?>