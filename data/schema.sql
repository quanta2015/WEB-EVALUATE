/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50510
 Source Host           : localhost:3306
 Source Schema         : evaluate

 Target Server Type    : MySQL
 Target Server Version : 50510
 File Encoding         : 65001

 Date: 31/05/2018 22:55:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dotask
-- ----------------------------
DROP TABLE IF EXISTS `dotask`;
CREATE TABLE `dotask`  (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `user_id` int(15) NOT NULL,
  `task_id` int(11) NOT NULL,
  `task_type` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file_url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `upload_date` datetime NOT NULL,
  `tag` int(2) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for evaluate
-- ----------------------------
DROP TABLE IF EXISTS `evaluate`;
CREATE TABLE `evaluate`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` tinyint(4) NOT NULL,
  `table_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `item_order` tinyint(4) NULL DEFAULT NULL,
  `item_title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `item_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `item_point` float NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of evaluate
-- ----------------------------
INSERT INTO `evaluate` VALUES (1, 1, '教学设计', 1, '目标设计', '教学目标清楚、具体，易于理解，便于实施，行为动词使用正确，阐述规范；符合课标要求、学科特点和学生实际；体现对知识、能力与创新思维等方面的要求', 3);
INSERT INTO `evaluate` VALUES (2, 1, '教学设计', 2, '内容分析', '教学内容前后知识点关系、地位、作用描述准确，重点、难点分析清楚', 2);
INSERT INTO `evaluate` VALUES (3, 1, '教学设计', 3, '学情分析', '学生认知特点和水平表述恰当，学习习惯和能力分析合理', 2);
INSERT INTO `evaluate` VALUES (4, 1, '教学设计', 4, '教学过程设计1', '教学主线描述清晰，教学内容处理符合课程标准要求，具有较强的系统性和逻辑性', 2);
INSERT INTO `evaluate` VALUES (5, 1, '教学设计', 5, '教学过程设计2', '教学重点突出，点面结合，深浅适度；难点清楚，把握准确；化难为易，处理恰当', 2);
INSERT INTO `evaluate` VALUES (6, 1, '教学设计', 6, '教学过程设计3', '教学方法清晰适当，符合教学对象要求，有利教学内容完成、难点解决和重点突出', 2);
INSERT INTO `evaluate` VALUES (7, 1, '教学设计', 7, '教学过程设计4', '教学辅助手段准备与使用清晰无误，教具及现代化教学手段运用恰当', 1);
INSERT INTO `evaluate` VALUES (8, 1, '教学设计', 8, '教学过程设计5', '内容充实精要，适合学生水平；结构合理，过渡自然，便于操作；理论联系实际，注重教学互动，启发学生思考及问题解决', 3);
INSERT INTO `evaluate` VALUES (9, 1, '教学设计', 9, '教学过程设计6', '注重形成性评价及生成性问题解决和利用', 1);
INSERT INTO `evaluate` VALUES (10, 1, '教学设计', 10, '延伸设计', '课时分配科学、合理；辅导与答疑设置合理，练习、作业、讨论安排符合教学目标，有助强化学生反思、理解和问题解决', 2);
INSERT INTO `evaluate` VALUES (11, 1, '教学设计', 11, '文档规范', '文字、符号、单位和公式符合标准规范；语言简洁、明了，字体、图表运用适当；文档结构完整，布局合理，格式美观', 2);
INSERT INTO `evaluate` VALUES (12, 1, '教学设计', 12, '设计创新', '教学方案的整体设计富有创新性，较好体现课程改革的理念和要求；教学方法选择适当，教学过程设计有突出的特色', 3);
INSERT INTO `evaluate` VALUES (13, 2, '多媒体课件制作', 1, '科学性', '课件取材适宜，内容科学、正确、规范 课件演示符合现代教育理念', 4);
INSERT INTO `evaluate` VALUES (14, 2, '多媒体课件制作', 2, '教育性', '课件设计新颖，能体现教学设计思想；知识点结构清晰，能调动学生的学习热情', 6);
INSERT INTO `evaluate` VALUES (15, 2, '多媒体课件制作', 3, '技术性1', '课件制作和使用上恰当运用多媒体效果', 1.5);
INSERT INTO `evaluate` VALUES (16, 2, '多媒体课件制作', 4, '技术性2', '操作简便、快捷，交流方便，适于教学', 1.5);
INSERT INTO `evaluate` VALUES (17, 2, '多媒体课件制作', 5, '艺术性', '画面设计具有较高艺术性，整体风格相对统一', 2);
INSERT INTO `evaluate` VALUES (18, 3, '即席讲演', 1, '讲演内容', '主题鲜明切题，内容充实、针对性强 问题分析到位，解决策略得当、新颖，说服力强 论据贴切，符合实际，阐释充分 内容构架结构严谨、层次分明、条理清晰', 5);
INSERT INTO `evaluate` VALUES (19, 3, '即席讲演', 2, '语言艺术', '普通话(英语发音)标准，用语规范，节奏处理得当，说服力强', 3);
INSERT INTO `evaluate` VALUES (20, 3, '即席讲演', 3, '思维艺术', '思维敏捷，逻辑清晰；灵活而有效地调整、组织讲演内容 ', 3);
INSERT INTO `evaluate` VALUES (21, 3, '即席讲演', 4, '仪表形象', '神态自然，动作适度，与讲演内容吻合', 3);
INSERT INTO `evaluate` VALUES (22, 3, '即席讲演', 5, '讲演时间', '时间在2-3分钟之间，不超时', 1);
INSERT INTO `evaluate` VALUES (23, 4, '模拟上课板书设计', 1, '模拟上课教学目标', '目标设置明确，符合课标要求和学生实际', 3);
INSERT INTO `evaluate` VALUES (24, 4, '模拟上课板书设计', 2, '模拟上课教学内容', '重点内容讲解明白，教学难点处理恰当，关注学生已有知识和经验，注重学生能力培养，强调课堂交流互动，知识阐释正确', 5);
INSERT INTO `evaluate` VALUES (25, 4, '模拟上课板书设计', 3, '模拟上课教学方法', '按新课标的教学理念处理教学内容以及教与学、知识与能力的关系，较好落实教学目标；突出自主、探究、合作学习方式，体现多元化学习方法；实现有效师生互动 ', 7);
INSERT INTO `evaluate` VALUES (26, 4, '模拟上课板书设计', 4, '模拟上课教学过程', '教学整体安排合理，环节紧凑，层次清晰；创造性使用教材；教学特色突出；恰当使用多媒体课件辅助教学，教学演示规范', 7);
INSERT INTO `evaluate` VALUES (27, 4, '模拟上课板书设计', 5, '模拟上课教学素质', '教态自然亲切、仪表举止得体，注重目光交流，教学语言规范准确、生动简洁', 4);
INSERT INTO `evaluate` VALUES (28, 4, '模拟上课板书设计', 6, '模拟上课教学效果', '按时完成教学任务，教学目标达成度高', 4);
INSERT INTO `evaluate` VALUES (29, 4, '模拟上课板书设计', 7, '模拟上课教学创新', '教学过程富有创意；能创造性的使用教材；教学方法灵活多样，有突出的特色', 5);
INSERT INTO `evaluate` VALUES (30, 4, '模拟上课板书设计', 8, '板书设计内容匹配', '反映教学设计意图，突显重点、难点，能调动学生主动性和积极性', 4);
INSERT INTO `evaluate` VALUES (31, 4, '模拟上课板书设计', 9, '板书设计构图', '构思巧妙，富有创意，构图自然，形象直观，教学辅助作用显著', 4);
INSERT INTO `evaluate` VALUES (32, 4, '模拟上课板书设计', 10, '板书设计书写', '书写快速流畅，字形大小适度，清楚整洁，美观大方，规范正确', 2);

-- ----------------------------
-- Table structure for grade
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dotask_id` int(15) NOT NULL COMMENT '任务编号',
  `user_id` int(15) NOT NULL COMMENT '用户编号',
  `user_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户类型 0 老师  1自身  2 组员',
  `eid` int(11) NULL DEFAULT NULL COMMENT '评价模板的评分编号',
  `grade` int(11) NOT NULL COMMENT '评价模板每项的分数',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for parameter
-- ----------------------------
DROP TABLE IF EXISTS `parameter`;
CREATE TABLE `parameter`  (
  `group_size` int(11) NOT NULL,
  `teacher_evaluation` int(11) NOT NULL,
  `self_evaluation` int(11) NOT NULL,
  `group_evaluation` int(11) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `publisher` tinyint(4) NOT NULL,
  `publish_class` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `task_title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `task_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `publish_date` datetime NULL DEFAULT NULL,
  `end_date` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`task_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for totalgrade
-- ----------------------------
DROP TABLE IF EXISTS `totalgrade`;
CREATE TABLE `totalgrade`  (
  `doTask_id` int(15) NOT NULL,
  `totalGrade` int(11) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int(15) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_number` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_class` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_role` int(11) NULL DEFAULT NULL,
  `user_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
