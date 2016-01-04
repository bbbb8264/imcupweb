<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="index.css">
	<script src="jquery-2.1.4.min.js"></script>
	<script src="index.js"></script>
	<meta charset="UTF-8">
</head>
<body>
<div id="wrapper">
	<div id="topmenu">
		<!--<img src="logo.png"></img>-->
		2016第二十二屆資管盃in成大
	</div>
	<div id="downmenu">
		<div class="entrancebutton">
			<img src="volley.jpg"></img>
			<div class="entrance">排球入口</div>
		</div>
		<div class="entrancebutton" id="basketballentrance">
			<img src="basketball.jpg"></img>
			<div class="entrance">籃球入口</div>
		</div>
		<div class="entrancebutton">
			<img src="badminton.jpg"></img>
			<div class="entrance">羽球入口</div>
		</div>
		<div class="entrancebutton">
			<img src="softball.jpg"></img>
			<div class="entrance">壘球入口</div>
		</div>
		<div class="entrancebutton">
			<img src="pingpong.png"></img>
			<div class="entrance">桌球入口</div>
		</div>
	</div>
	<div id="content">
		<div id="leftmenu">
			<a class="leftmenubutton" href="index.php?current=announce">
				公告事項
			</a>
			<a class="leftmenubutton" href="index.php?current=editannounce">
				管理公告事項
			</a>
			<a class="leftmenubutton" href="index.php?current=constitution">
				競賽章程
			</a>
			<a class="leftmenubutton">
				住宿資訊
			</a>
			<a class="leftmenubutton">
				交通資訊
			</a>
			<a class="leftmenubutton">
				失物招領
			</a>
		</div>
		<div id="rightmenu">
			<?php
				if(isset($_GET['current'])){
					if($_GET['current'] == "announce"){
						include 'announce.php';
					}else if($_GET['current'] == "editannounce"){
						include 'editannounce.php';
					}else if($_GET['current'] == "addannounce"){
						include 'addannounce.html';
					}else if($_GET['current'] == "constitution"){
						include 'constitution.php';
					}
				}else{
					include 'announce.php';
				}
			?>
		</div>
	</div>
</div>
</body>
</html>