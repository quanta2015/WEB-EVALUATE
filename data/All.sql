-- ----------------------------
-- Table structure for user
-- ----------------------------

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
	`user_id` int(15) NOT NULL AUTO_INCREMENT,
	`user_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
	`user_number` varchar(15),
	`user_class` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
	`user_role` int CHECK(user_role = `0` OR user_role = `1` OR user_role = `2`),
	`user_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
	PRIMARY KEY (`user_id`) USING BTREE
)ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for task
-- ----------------------------

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
	`task_id` int(11) NOT NULL AUTO_INCREMENT,
	`publisher` tinyint(4) NOT NULL,
	`publish_class` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
	`task_title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
	`task_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
	`publish_date` datetime,
	`end_date` datetime,
	PRIMARY KEY (`task_id`) USING BTREE
)ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for dotask
-- ----------------------------

DROP TABLE IF EXISTS `doTask`;
CREATE TABLE `doTask`(
	`doTask_id` int(15) NOT NULL AUTO_INCREMENT,
    `user_id` int(15) NOT NULL,
    `task_id` int(11) NOT NULL,
    `task_type` varchar(4) CHECK (task_type=`doc` OR task_type=`ppt` OR task_type=`mp4`) ,
    `file_url` varchar(100) NOT NULL,
    `upload_date` datetime NOT NULL,
    `tag` int(2) NOT NULL CHECK(tag = 0 OR tag = 1),
    PRIMARY KEY(`doTask_id`) USING BTREE,
    FOREIGN KEY (`user_id`) REFERENCES user(`user_id`),
    FOREIGN KEY (`task_id`) REFERENCES task(`task_id`)
)ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for grade
-- ----------------------------

DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`doTask_id` int(15) NOT NULL,
	`user_id` int(15) NOT NULL,
	`grade` int(11) NOT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	FOREIGN KEY (`doTask_id`) REFERENCES doTask(`doTask_id`),
	FOREIGN KEY (`user_id`) REFERENCES user(`user_id`)
)ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- -----------------------------------------------
-- Table structure for parameter//分组，分数参数
-- -----------------------------------------------

DROP TABLE IF EXISTS `parameter`;
CREATE TABLE `parameter` (
	`group_size` int NOT NULL,
	`teacher_evaluation` int NOT NULL,
	`self_evaluation` int NOT NULL,
	`group_evaluation` int NOT NULL
)ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ------------------------------
-- Table structure for totalgrade
-- ------------------------------

DROP TABLE IF EXISTS `totalGrade`;
CREATE TABLE `totalGrade` (
	`doTask_id` int(15) NOT NULL,
	`totalGrade` int NOT NULL
)ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;
