<?php
	$servername = "localhost";
	$username = "root";
	$password = "1234";
	$dbname = "csiefinal";
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "SELECT * FROM basketballteam where school = '".$_POST['school']."' and department = '".$_POST['department']."' and type=0";
	$result = $conn->query($sql);

	if($result->num_rows > 0){
		echo 'exist';
	}else{
		echo 'not exist';
	}
?>