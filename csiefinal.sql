-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- 主機: 127.0.0.1
-- 產生時間： 2016-01-17 19:13:45
-- 伺服器版本: 10.1.9-MariaDB
-- PHP 版本： 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `csiefinal`
--

-- --------------------------------------------------------

--
-- 資料表結構 `administrator`
--

CREATE TABLE `administrator` (
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `rank` int(5) NOT NULL,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `basketballschedule`
--

CREATE TABLE `basketballschedule` (
  `cycle` varchar(1) NOT NULL,
  `No` varchar(5) NOT NULL,
  `teamA` varchar(20) NOT NULL,
  `teamB` varchar(20) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `basketballsliderlink`
--

CREATE TABLE `basketballsliderlink` (
  `id` mediumint(9) NOT NULL,
  `filename` char(64) NOT NULL,
  `filetype` char(8) NOT NULL,
  `target` char(128) DEFAULT NULL,
  `title` text,
  `queue` int(5) NOT NULL,
  `uploadtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `basketballsliderlink`
--

INSERT INTO `basketballsliderlink` (`id`, `filename`, `filetype`, `target`, `title`, `queue`, `uploadtime`) VALUES
(1, 'hahaha', 'jpg', 'http://www.google.com', 'YEE~', 3, '2015-12-29 20:51:04'),
(2, 'hahaha', 'jpg', 'http://www.google.com', 'PikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPikaPika', 2, '2015-12-29 20:51:04'),
(3, 'hahaha', 'jpg', 'http://www.google.com', '歐大媽螺旋丸!', 4, '2015-12-29 20:51:04'),
(4, 'hahaha', 'jpg', 'http://www.google.com', '叫我卷神', 1, '2015-12-29 20:51:04');

-- --------------------------------------------------------

--
-- 資料表結構 `basketballteam`
--

CREATE TABLE `basketballteam` (
  `id` mediumint(9) NOT NULL,
  `school` char(128) NOT NULL,
  `department` char(64) NOT NULL,
  `nickName` varchar(20) NOT NULL,
  `leader` int(6) DEFAULT NULL,
  `type` tinyint(1) NOT NULL,
  `publishtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `basketballteam`
--

INSERT INTO `basketballteam` (`id`, `school`, `department`, `nickName`, `leader`, `type`, `publishtime`, `lastrevisetime`) VALUES
(1, '國立成功大學', '工業與資訊管理學系', '成大工資管', NULL, 1, '2016-01-17 13:58:45', '2016-01-17 13:58:45'),
(2, '國立台灣大學', '工商管理學系', '台大工管', NULL, 1, '2016-01-17 14:14:41', '2016-01-17 14:14:41');

-- --------------------------------------------------------

--
-- 資料表結構 `basketballteammember`
--

CREATE TABLE `basketballteammember` (
  `id` mediumint(9) NOT NULL,
  `number` char(32) NOT NULL,
  `name` char(32) NOT NULL,
  `phone` char(32) DEFAULT NULL,
  `email` char(64) DEFAULT NULL,
  `publishtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `mainannounce`
--

CREATE TABLE `mainannounce` (
  `id` mediumint(9) NOT NULL,
  `title` char(128) NOT NULL,
  `content` text NOT NULL,
  `publishtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lastrevisetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `mainannounce`
--

INSERT INTO `mainannounce` (`id`, `title`, `content`, `publishtime`, `lastrevisetime`) VALUES
(1, '新增籃球競賽章程ㄇ', '新增籃球競賽章程', '2015-12-04 20:30:10', '2015-12-20 08:30:54'),
(2, '新增排球競賽章程', '新增排球競賽章程', '2015-12-04 20:30:34', '2015-12-04 20:30:34'),
(3, '新增壘球競賽章程', '新增壘球競賽章程', '2015-12-04 20:30:38', '2015-12-04 20:30:38'),
(4, '新增桌球競賽章程', '新增桌球競賽章程', '2015-12-04 20:30:44', '2015-12-04 20:30:44'),
(5, '新增羽球競賽章程', '新增羽球競賽章程', '2015-12-04 20:30:58', '2015-12-04 20:30:58'),
(6, '新增競賽總則', '新增競賽總則', '2015-12-04 20:31:07', '2015-12-04 20:31:07'),
(7, '男籃冠軍出爐', '恭喜成大獲得冠軍', '2015-12-07 09:13:48', '2015-12-07 09:13:48'),
(8, '壘球冠軍出爐', '恭喜成大獲得冠軍', '2015-12-07 09:13:55', '2015-12-07 09:15:23'),
(94, 'dadas', 'dasdasasdads', '2015-12-28 07:26:45', '2015-12-28 07:28:20'),
(95, 'dasdas', 'dasdasd', '2015-12-28 09:06:19', '2015-12-28 09:06:19'),
(96, 'aaa', 'aaa', '2015-12-29 17:58:13', '2015-12-29 17:58:13'),
(97, '', '', '2015-12-30 00:44:31', '2015-12-30 00:44:31');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `administrator`
--
ALTER TABLE `administrator`
  ADD PRIMARY KEY (`username`);

--
-- 資料表索引 `basketballsliderlink`
--
ALTER TABLE `basketballsliderlink`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `basketballteam`
--
ALTER TABLE `basketballteam`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `basketballteammember`
--
ALTER TABLE `basketballteammember`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `mainannounce`
--
ALTER TABLE `mainannounce`
  ADD PRIMARY KEY (`id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `basketballsliderlink`
--
ALTER TABLE `basketballsliderlink`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用資料表 AUTO_INCREMENT `basketballteam`
--
ALTER TABLE `basketballteam`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用資料表 AUTO_INCREMENT `basketballteammember`
--
ALTER TABLE `basketballteammember`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT;
--
-- 使用資料表 AUTO_INCREMENT `mainannounce`
--
ALTER TABLE `mainannounce`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
