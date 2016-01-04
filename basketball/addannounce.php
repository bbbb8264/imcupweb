<?php
	$link = mysql_connect('localhost', 'root', '1234');
	if (!$link) {
	    die('Could not connect: ' . mysql_error());
	}
	mysql_select_db('csiefinal');

	mysql_query("insert into basketballannounce (title,content) values ('".$_POST['title']."','".$_POST['content']."')");
	echo mysql_insert_id();
	//print_r($_POST);
	//print_r($_FILES);
?>