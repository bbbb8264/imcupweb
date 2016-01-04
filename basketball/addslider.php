<?php
	$link = mysql_connect('localhost', 'root', '1234');
	if (!$link) {
	    die('Could not connect: ' . mysql_error());
	}
	mysql_select_db('csiefinal');
	$filename = explode(".", $_FILES['file']['name']);
	mysql_query("insert into basketballsliderlink (filename,filetype,title,target,queue) values ('".$filename[0]."','".$filename[sizeof($filename)-1]."','".$_POST['title']."','".$_POST['superlink']."','0')");
	$id = mysql_insert_id();
	move_uploaded_file($_FILES['file']['tmp_name'], 'slider_image/'.$id.'.'.$filename[sizeof($filename)-1]);
	echo 'success';
?>