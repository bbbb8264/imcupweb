<link rel="stylesheet" type="text/css" href="../UI-Form-master/form.min.css">
<script src="../UI-Form-master/form.min.js"></script>
<link rel="stylesheet" type="text/css" href="../UI-Icon-master/icon.min.css">
<script src="../UI-Progress-master/progress.min.js"></script>
<link rel="stylesheet" type="text/css" href="../UI-Progress-master/progress.min.css">
<link rel="stylesheet" type="text/css" href="../UI-Loader-master/loader.min.css">
<link rel="stylesheet" type="text/css" href="../UI-Button-master/button.min.css">
<link rel="stylesheet" type="text/css" href="jquery-ui-1.11.4.custom/jquery-ui.css">
<script src="jquery-ui-1.11.4.custom/jquery-ui.js"></script>
<link rel="stylesheet" type="text/css" href="editslider.css">
<script src="editslider.js"></script>
<div id="currentpagedescription">編輯投影片</div>
<div id="editslidercontent">
	<?php
		$servername = "localhost";
		$username = "root";
		$password = "1234";
		$dbname = "csiefinal";
		$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		$sql = "select * from basketballsliderlink order by queue asc";
		$result = $conn->query($sql);
		$count = 0;
		if($result->num_rows > 0){
			while($row = $result->fetch_assoc()) {
        		echo '<div class="slideritem" data-id="'.$row['id'].'">
        				<div class="deleteslider"><i class="remove circle icon"></i></div>
						<div class="slidertitle">
							第'.++$count.'張投影片<br>'.$row['title'].'
						</div>
						<div class="slidercontent" style="display:none">
							<div class="sliderpicture">
								<img src="slider_image/'.$row['id'].'.'.$row['filetype'].'">
							</div>
							<div class="slidersetting">
								<form class="ui form">
									<div class="field">
										<label>投影片標題</label>
										<input type="text" placeholder="將會放在投影片的右下角" value="'.$row['title'].'">
									</div>
									<div class="field">
										<label>超連結目標</label>
										<input type="text" placeholder="點擊投影片後轉址的目標" value="'.$row['target'].'">
									</div>
								</form>
							</div>
						</div>
					</div>';
    		}
		}else{

		}
	?>
</div>
<div id="controllmenu">
	<button class="ui primary button" id="savebutton">
		存檔
	</button>
</div>
<div id="dialog-confirm" title="刪除投影片?">
  <p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>投影片被刪除將無法復原，請問是否繼續執行</p>
</div>
<div id="dialog" title="提示">
  	<p>超連結的開頭必須為http://</p>
</div>