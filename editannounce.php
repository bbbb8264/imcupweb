<html>
<head>
	<script src="jquery-2.1.4.min.js"></script>
	<?php
		if(isset($_GET['announceid'])){
			echo'<script src="jquery-2.1.4.min.js"></script>
				<link rel="stylesheet" type="text/css" href="addannounce.css">
				<link rel="stylesheet" type="text/css" href="UI-Form-master/form.min.css">
				<script src="UI-Form-master/form.min.js"></script>
				<link rel="stylesheet" type="text/css" href="UI-Icon-master/icon.min.css">
				<script src="UI-Progress-master/progress.min.js"></script>
				<link rel="stylesheet" type="text/css" href="UI-Progress-master/progress.min.css">
				<link rel="stylesheet" type="text/css" href="UI-Loader-master/loader.min.css">
				<script src="editannounce.js"></script>';
		}else{
			echo '<link rel="stylesheet" type="text/css" href="editannounce.css">';
			echo '<script src="editallannounce.js"></script>';
		}
	?>
</head>
<body>
	<?php
	$servername = "localhost";
	$username = "root";
	$password = "1234";
	$dbname = "csiefinal";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	if(isset($_GET['announceid'])){
		$sql = "select title,content from mainannounce where id='".$_GET['announceid']."'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		echo '<div id="currentpage">
				<div id="currentpagedescription">編輯公告</div>
				<form class="ui form" action="addannounce.php" method="post">
					<div class="field">
						<label>標題</label>
						<input type="text" name="title" value="'.$row['title'].'">
					</div>
					<div class="field">
						<label>內容</label>
						<textarea name="content">'.$row['content'].'</textarea>
					</div>
					<div class="field">
						<label onclick="document.querySelector("#fff").click()">檔案</label>
						<div id="addfilebutton">
							點此新增檔案
						</div>
					</div>
					<div id="filelist">';
		if(is_dir('mainannouncedata/'.$_GET['announceid'])){
			if($handle = opendir('mainannouncedata/'.$_GET['announceid'])){
				while (false !== ($entry = readdir($handle))) {
					if ($entry != "." && $entry != "..") {
			            $entry = iconv('BIG5','UTF-8',trim($entry));
			        	$filestr = '<div class="fileitem"><div style="flex: 1 1 0%;font-size:28px;"><i class="disk outline icon"></i></div><div class="filetype">';
			        	$info = new SplFileInfo($entry);
			        	switch ($info->getExtension()) {
			        		case 'mp3':
			        		case 'wma':
			        			$filestr = $filestr.'<i class="file audio outline icon"></i>';
			        			break;
			        		case 'xlsx':
			        		case 'xls':
			        			$filestr = $filestr.'<i class="file excel outline icon"></i>';
			        			break;
			        		case 'mov':
			        		case 'wmv':
			        		case 'mp4':
			        		case 'avi':
			        		case 'rmvb':
			        			$filestr = $filestr.'<i class="file video outline icon"></i>';
			        			break;
			        		case 'docx':
			        		case 'doc':
			        			$filestr = $filestr.'<i class="file word outline icon"></i>';
			        			break;
			        		case 'pptx':
			        		case 'ppt':
			        			$filestr = $filestr.'<i class="file powerpoint outline icon"></i>';
			        			break;
			        		case 'pdf':
			        			$filestr = $filestr.'<i class="file pdf outline icon"></i>';
			        			break;
			        		case 'rar':
			        		case 'zip':
			        		case '7z':
			        		case 'gz':
			        			$filestr = $filestr.'<i class="file archive outline icon"></i>';
			        			break;
			        		case 'jpeg':
			        		case 'bmp':
			        		case 'png':
			        		case 'jpg':
			        			$filestr = $filestr.'<i class="file image outline icon"></i>';
			        			break;
			        		default:
			        			$filestr = $filestr.'<i class="file outline icon"></i>';
			        			break;
			        	}
			        	$filestr = $filestr.'</div><div class="filename">';
			        	$filestr = $filestr.$entry;
			        	$filestr = $filestr.'</div><div class="deletebackendbutton "><img src="delete.png"></div></div>';
			        	echo $filestr;
			        }
			    }
			}
		}
		echo 		'</div>
					<div id="submitbutton" class="active">
						送出
					</div>
				</form>
			</div><script>var id='.$_GET['announceid'].'</script>';
	}else{
		echo '<div id="currentpage">';
		echo '<div id="currentpagedescription">編輯公告</div>';
		echo '<div id="announceformat"><div class="announcedatetime">時間</div><div class="announcetitle">主旨</div><div class="editbutton">編輯</div><div class="deletebutton">刪除</div></div>';
		$sql = "select id,DATE_FORMAT(publishtime, '%Y年%m月%d號%h:%i') datetime,title from mainannounce order by publishtime desc";
		$result = $conn->query($sql);
		while($row = $result->fetch_assoc()) {
        	echo '<div class="announceitem"><a class="information" href="index.php?current=announce&&announceid='.$row["id"].'" style="flex"><div class="announcedatetime">'.$row["datetime"].'</div><div class="announcetitle">'.$row["title"].'</div></a><a class="edit" href="index.php?current=editannounce&&announceid='.$row["id"].'"><div class="editbutton"><img src="edit.png"></img></div></a><div class="deletebutton" data-id="'.$row["id"].'"><img src="delete.png"></img></div></div>';
    	}
    	echo '<div style="padding:20px"><a href="index.php?current=addannounce" id="addbutton">新增公告</a><div>';
    	echo '</div>';
	}
?>
</body>
</html>