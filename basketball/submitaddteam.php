<?php
	$servername = "localhost";
	$username = "root";
	$password = "1234";
	$dbname = "csiefinal";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "insert into basketballteam (school,department,type) values ('".$_POST['school']."','".$_POST['department']."',0)";
	$result = $conn->query($sql);
	echo "success";
?>