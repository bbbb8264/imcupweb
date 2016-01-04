<?php
	$dir = 'mainannouncedata/'.$_POST['id'];
	if(!is_dir($dir)){
		mkdir($dir);
	}
	$filename = iconv('UTF-8','Big5//IGNORE',trim($_FILES['file']['name']));
	move_uploaded_file($_FILES['file']['tmp_name'], $dir.'/'.$filename);
	echo 'success';
?>