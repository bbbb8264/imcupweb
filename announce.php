<html>
<head>
	<script src="jquery-2.1.4.min.js"></script>
	<?php
		if(isset($_GET['announceid'])){
			echo '<script src="announcepage.js"></script>';
			echo '<link rel="stylesheet" type="text/css" href="announcepage.css">';
			echo '<link rel="stylesheet" type="text/css" href="UI-Icon-master/icon.min.css">';
		}else{
			echo '<link rel="stylesheet" type="text/css" href="announce.css">';
			echo '<script src="announce.js"></script>';
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
		$sql = "select id,DATE_FORMAT(publishtime, '%Y年%m月%d號%h:%i') datetime,title,content from mainannounce where id='".$_GET['announceid']."'";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		echo '<div id="currentpage">';
		echo '<div id="annouceformat"><div class="announcedatetime">'.$row["datetime"].'</div><div class="announcetitle">'.$row["title"].'</div></div>';
		echo '<div id="announcecontent">'.$row["content"].'</div>';
		$dir = 'mainannouncedata/'.$_GET['announceid'];
		if(is_dir($dir)){
			echo '<div id=filelistwrapper>';
			echo '<div id=filelist>附加檔案</div>';
			if($handle = opendir($dir)){
				while (false !== ($entry = readdir($handle))) {
					if ($entry != "." && $entry != "..") {
			            $entry = iconv('BIG5','UTF-8',trim($entry));
			        	$filestr = '<a href="'.$dir.'/'.$entry.'" download><div class="fileitem">';
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
			        	$filestr = $filestr.$entry;
			        	switch ($info->getExtension()) {
			        		case 'jpeg':
			        		case 'bmp':
			        		case 'png':
			        		case 'jpg':
			        			$filestr = $filestr.'<img class="pic" src="'.$dir.'/'.$entry.'"></img><div style="height:20px"></div>';
			        			break;
			        		default:
			        			break;
			        	}
			        	$filestr = $filestr.'</div></a>';
			        	echo $filestr;
			        }
			    }
			}
			echo '<div class="padd"></div>';
			closedir($handle);
			echo '</div>';
		}
		echo '<div id="announcebackbutton">回到公告列表</div>';
		echo '</div>';
	}else{
		echo '<div id="currentpage">';
		echo '<div id="currentpagedescription">公告事項</div>';
		echo '<div id="annouceformat"><div class="announcedate">日期</div><div class="announcetime">時間</div><div class="announcetitle">主旨</div></div>';
		$sql = "select id,DATE_FORMAT(publishtime, '%Y年%m月%d號') date,DATE_FORMAT(publishtime,'%h:%i') time,title from mainannounce order by publishtime desc";
		$result = $conn->query($sql);
		if($result->num_rows > 0){
			while($row = $result->fetch_assoc()) {
        		echo '<div class="announceitem" data-id="'.$row["id"].'"><div class="announcedate">'.$row["date"].'</div><div class="announcetime">'.$row['time'].'</div><div class="announcetitle">'.$row["title"].'</div></div>';
    		}
    	}else{
    		echo '<div style="line-height:350px;height:350px;text-align:center;font-size:30px;font-weight:bold">目前尚無公告</div>';
    	}
    	echo '</div>';
	}
?>
</body>
</html>