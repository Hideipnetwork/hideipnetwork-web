-- --------------------------------------------------------
-- 主机:                           mysql.sqlpub.com
-- 服务器版本:                        8.0.33 - MySQL Community Server - GPL
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 导出  表 fastify.hnet_info 结构
CREATE TABLE IF NOT EXISTS `hnet_info` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `placeholder` varchar(255) DEFAULT NULL,
  `bg` varchar(255) DEFAULT NULL,
  `notify` varchar(255) DEFAULT NULL,
  `keywords` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `ispwd` tinyint(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  fastify.hnet_info 的数据：~1 rows (大约)
INSERT IGNORE INTO `hnet_info` (`id`, `title`, `password`, `placeholder`, `bg`, `notify`, `keywords`, `content`, `ispwd`, `create_time`, `update_time`) VALUES
	(1, 'HNet Web', 'MTIzNDU2', 'Please enter password', '', '1.这是网站公告,这是网站公告,这是网站公告,这是网站公告#2.这是网站公告#3.这是网站公告<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度啊</a>#1.这是网站公告,这是网站公告,这是网站公告,这是网站公告#2.这是网站公告#3.这是网站公告<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度啊</a>', '在线学习新思想，学习平台', '学习新思想，争做新青年。', 1, '2023-09-14 20:42:27', '2023-09-14 20:42:27');

-- 导出  表 fastify.hnet_site 结构
CREATE TABLE IF NOT EXISTS `hnet_site` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `website` varchar(255) DEFAULT NULL,
  `sitename` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `favicon` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  fastify.hnet_site 的数据：~3 rows (大约)
INSERT IGNORE INTO `hnet_site` (`id`, `website`, `sitename`, `status`, `remark`, `favicon`, `create_time`, `update_time`) VALUES
	(3, 'www.xvideos.com', 'xvidoes', 1, 'adfasd', 'www.xvideos.com', '2023-09-09 13:40:12', '2023-09-09 13:40:12'),
	(4, 'twitter.com', '推特', 1, '推特', 'twitter.com', '2023-09-09 13:41:39', '2023-09-09 20:39:37'),
	(6, 'www.baidu.com', '百度', 0, 'asdf233', 'www.baidu.com', '2023-09-09 22:12:37', '2023-09-16 15:31:26');

-- 导出  表 fastify.hnet_user 结构
CREATE TABLE IF NOT EXISTS `hnet_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  fastify.hnet_user 的数据：~1 rows (大约)
INSERT IGNORE INTO `hnet_user` (`id`, `username`, `password`, `isAdmin`, `create_time`, `update_time`) VALUES
	(1, 'hnetadmin', 'hnetpassword', 1, '2023-07-14 16:12:35', '2023-07-14 16:12:35');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
