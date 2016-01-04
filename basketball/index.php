<?php
	$servername = "localhost";
	$username = "root";
	$password = "1234";
	$dbname = "csiefinal";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../UI-Icon-master/icon.min.css">
	<link rel="stylesheet" type="text/css" href="index.css">
	<script src="../jquery-2.1.4.min.js"></script>
	<script src="index.js"></script>
	<meta charset="UTF-8">
</head>
<body>
<div id="wrapper">
	<div id="topmenu">
		<!--<img src="logo.png"></img>-->
		2016第二十二屆資管盃in成大
	</div>
	<div id="slider">
		<div id="sliderpics">
		<?php
			$sql = "SELECT target, id, title ,filetype FROM basketballsliderlink order by queue asc";
			$result = $conn->query($sql);
			$count = $result->num_rows;
			if ($count > 0) {
			    while($row = $result->fetch_assoc()) {
			    	if(isset($row['target'])){
			        	echo '<div class="picitem" data-target="'.$row['target'].'"><img class="pic" src="slider_image/'.$row['id'].'.'.$row['filetype'].'"><img class="block" src="../logo.png"><div class="pictitle">'.$row['title'].'</div></div>';
			    	}else{
			    		echo '<div class="picitem" style="cursor:default!important"><img class="pic" src="slider_image/'.$row['id'].'.'.$row['filetype'].'"><img class="block" src="../logo.png"><div class="pictitle">'.$row['title'].'</div></div>';
			    	}
			    }
			} else {
			    echo "0 results";
			}
		?>
		</div>
		<div id="sliderbuttons" style="<?php echo 'left:'.(500-$count*12).'px' ?>">
			<?php
				for($i = 0;$i < $count;$i++){
					echo '<div class="sliderbutton" data-marginleft="'.($i*1000*(-1)).'px"';
					if($i == 0){
						echo 'style="color:#8E8E8E"';
					}
					echo '><i class="circle icon"></i></div>';
				}
			?>
		</div>
	</div>
	<div id="downmenu">
		
	<div id="content">
		<div id="leftmenu">
			<a class="leftmenubutton" href="index.php?current=announce">
				公告事項
			</a>
			<a class="leftmenubutton" href="index.php?current=editannounce">
				管理公告事項
			</a>
			<a class="leftmenubutton" href="../index.php?current=constitution">
				競賽章程
			</a>
			<a class="leftmenubutton">
				參賽隊伍
			</a>
			<a class="leftmenubutton" href="index.php?current=addteam">
				新增參賽隊伍
			</a>
			<a class="leftmenubutton">
				賽程
			</a>
			<a class="leftmenubutton" href="index.php?current=addslider">
				新增投影片
			</a>
			<a class="leftmenubutton" href="index.php?current=editslider">
				編輯投影片
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
					}else if($_GET['current'] == "editslider"){
						include 'editslider.php';
					}else if($_GET['current'] == "addslider"){
						include 'addslider.html';
					}else if($_GET['current'] == "addteam"){
						include 'addteam.html';
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