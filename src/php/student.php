<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>学生作业管理</title>
	<link rel="stylesheet" type="text/css" href="../sys/css/homework.css">
	<link rel="stylesheet" type="text/css" href="../lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../lib/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="../lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css">

	<script type="text/javascript" src="../lib/jquery/jquery.min.js"></script>
	<!-- <script type="text/javascript" src="../sys/js/homework.js"></script> -->
	<script type="text/javascript" src="../lib/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
</head>
<body>
	<div class="g-index">
		<div class="nav">
			<div class="nav-top">
				<div class="nav-logo"><img src="../img/logo02.png"></div>
				<i class="fa fa-chevron-right nav-more" id="nav_icon3" style="display: none;"></i>
			</div>
			<ul>
				<li class="nav-item has-chosen">
					<a href="javascript:;" style="display: flex;">
						<!--<i class="fa fa-file-text nav-icon"></i>-->
						<span>我的作业</span>
						<div class="hidden"></div>
						<i class="fa fa-chevron-right nav-more" id="nav_icon1" ></i>
					</a>
				</li>
				<li class="nav-item"></li>
				<li class="nav-item">
					<a href="javascript:;" style="display: flex;">
						<!--<i class="fa fa-search nav-icon"></i>-->
						<span>成绩评定</span>
						<div class="hidden"></div>
						<i class="fa fa-chevron-right nav-more" id="nav_icon1" ></i>
					</a>
				</li>
				<li class="nav-item"></li>
				<li class="nav-item">
					<a href="javascript:;" style="display: flex;">
						<!--<i class="fa fa-check-square-o nav-icon"></i>-->
						<span>成绩评定</span>
						<div class="hidden"></div>
						<i class="fa fa-chevron-right nav-more" id="nav_icon1" ></i>
					</a>
				</li>
				<li class="nav-item"></li>
				<li class="nav-item">
					<a href="javascript:;" style="display: flex;">
						<!--<i class="fa fa-check-square-o nav-icon"></i>-->
						<span>设置</span>
						<div class="hidden"></div>
						<i class="fa fa-chevron-right nav-more" id="nav_icon1" ></i>
					</a>
				</li>
				<li class="nav-item"></li>
			</ul>
		</div>
		<div class="content">
			<!-- 列表内容开始 -->
			<div class="ulDiv">
				<ul class="clearfix" style="*width:1020px;">
					<li class="lookLi">
						<div class="titTxt">
							<?php 
							    require_once('task_search.php'); 
								$i = homework(); 
							    $sql3 = "select publisher,publish_date,end_date,task_title from task where publish_class = '$temp' and task_id = '$i' ";
								$result3 = $conn->query($sql3);  
		                        $row3 = mysqli_fetch_array($result3);
		                        $publisher = $row3['publisher'];
		                        $task_title = $row3['task_title'];
	                            $publish_date = $row3['publish_date'];
		                        $end_date = $row3['end_date'];
		                     ?>
							<p style="padding-top: 11px;">
								<a href="../pages/homework.html" onclick="javascript:void(0);" title="作业1">作业1 <?php echo "$task_title"; ?></a>
							</p>
							<div title="" class="pt5"><span class="f1">开始时间：<?php 
									 echo "$publish_date"; ?></span><span></span></div>
							<div title="" class="pt5"><span class="f1">截止时间：<?php  
								    echo "$end_date"; ?></span><span></span></div>
							<div title="" class="pt5"><span class="f1">作业状态：</span><strong></strong></div>
						</div>
						<div class="titOper">
							<p class="clearfix">
								<a class="Btn_blue" href="../pages/homework.html">
									<span>进入</span>
								</a>
							</p>
						</div>
					</li>
					<li class="lookLi">
						
						<div class="titTxt">
                            <?php
								$i = homework(); 
							    $sql3 = "select publisher,publish_date,end_date,task_title from task where publish_class = '$temp' and task_id = '$i' ";
								$result3 = $conn->query($sql3);  
		                        $row3 = mysqli_fetch_array($result3);
		                        $publisher = $row3['publisher'];
		                        $task_title = $row3['task_title'];
	                            $publish_date = $row3['publish_date'];
		                        $end_date = $row3['end_date'];
		                     ?>
							<p style="padding-top: 11px;">
								<a href="../pages/homework.html" onclick="javascript:void(0);" title="作业1">作业2 <?php 
									echo "$task_title"; ?></a>
							</p>
							<div title="" class="pt5"><span class="f1">开始时间：<?php 
									 echo "$publish_date"; ?></span><span></span></div>
							<div title="" class="pt5"><span class="f1">截止时间：<?php 
									 echo "$publish_date"; ?></span><span></span></div>
							<div title="" class="pt5"><span class="f1">作业状态:</span><strong></strong></div>
						</div>
						<div class="titOper">
							<p style="float: none;" class="clearfix">
								<a class="Btn_blue fr" href="../pages/homework.html">
									<span>进入</span>
								</a>
							</p>
						</div>
					</li>
				</ul>
			</div>
    		<!-- 列表内容结束 -->
		</div>
                <!--<div class="userBox">
                    <div class="userBox-top">
                        <img src="images/userPic.jpg" class="userPic">
                        <div class="userInf">
                            <span class="userName">毛婕</span>
                            <span class="userID">2016210405054</span>
                        </div>
                    </div>
                    <div class="userBox-bottom">
                        <i class="fa fa-power-off nav-more" id="nav_icon2" style="color: rgb(141, 145, 153);"></i>
                        <a href="../index.html" style="color: rgb(141, 145, 153);">退出当前用户</a>
                    </div>
                </div>-->
            </div>
        </div>
    </body>
    </html>
