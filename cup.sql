DROP TABLE IF EXISTS `mainannounce`;
CREATE TABLE `mainannounce` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `title` char(128) NOT NULL,
  `content` text NOT NULL,
  `publishtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8;
LOCK TABLES `mainannounce` WRITE;
INSERT INTO `mainannounce` VALUES (1,'新增籃球競賽章程ㄇ','新增籃球競賽章程','2015-12-05 04:30:10','2015-12-20 16:30:54'),(2,'新增排球競賽章程','新增排球競賽章程','2015-12-05 04:30:34','2015-12-05 04:30:34'),(3,'新增壘球競賽章程','新增壘球競賽章程','2015-12-05 04:30:38','2015-12-05 04:30:38'),(4,'新增桌球競賽章程','新增桌球競賽章程','2015-12-05 04:30:44','2015-12-05 04:30:44'),(5,'新增羽球競賽章程','新增羽球競賽章程','2015-12-05 04:30:58','2015-12-05 04:30:58'),(6,'新增競賽總則','新增競賽總則','2015-12-05 04:31:07','2015-12-05 04:31:07'),(7,'男籃冠軍出爐','恭喜成大獲得冠軍','2015-12-07 17:13:48','2015-12-07 17:13:48'),(8,'壘球冠軍出爐','恭喜成大獲得冠軍','2015-12-07 17:13:55','2015-12-07 17:15:23'),(94,'dadas','dasdasasdads','2015-12-28 15:26:45','2015-12-28 15:28:20'),(95,'dasdas','dasdasd','2015-12-28 17:06:19','2015-12-28 17:06:19'),(96,'aaa','aaa','2015-12-30 01:58:13','2015-12-30 01:58:13'),(97,'','','2015-12-30 08:44:31','2015-12-30 08:44:31');
UNLOCK TABLES;

DROP TABLE IF EXISTS `basketballteam`;
CREATE TABLE `basketballteam` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `school` char(128) NOT NULL,
  `department` char(64) NOT NULL,
  `leader` int(6) DEFAULT NULL,
  `type` tinyint(1) NOT NULL,
  `publishtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
LOCK TABLES `basketballteam` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `basketballteammember`;
CREATE TABLE `basketballteammember` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `number` char(32) NOT NULL,
  `name` char(32) NOT NULL,
  `phone` char(32) DEFAULT NULL,
  `email` char(64) DEFAULT NULL,
  `publishtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
LOCK TABLES `basketballteammember` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `basketballsliderlink`;
CREATE TABLE `basketballsliderlink` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `filename` char(64) NOT NULL,
  `filetype` char(8) not null,
  `target` char(128) DEFAULT NULL,
  `title` text,
  `queue` int(5) NOT NULL,
  `uploadtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
LOCK TABLES `basketballsliderlink` WRITE;
INSERT INTO `basketballsliderlink` VALUES (1,'hahaha','jpg','http://www.google.com','YEE~',3,'2015-12-30 04:51:04'),(2,'hahaha','jpg','http://www.google.com','PikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPika',2,'2015-12-30 04:51:04'),(3,'hahaha','jpg','http://www.google.com','歐大媽螺旋丸!',4,'2015-12-30 04:51:04'),(4,'hahaha','jpg','http://www.google.com','叫我卷神',1,'2015-12-30 04:51:04');
UNLOCK TABLES;

DROP TABLE IF EXISTS `administrator`;
CREATE TABLE `administrator` (
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `rank` int(5) NOT NULL,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
LOCK TABLES `administrator` WRITE;
UNLOCK TABLES;