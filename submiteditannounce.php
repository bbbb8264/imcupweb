<?php
	$servername = "localhost";
	$username = "root";
	$password = "1234";
	$dbname = "csiefinal";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "UPDATE mainannounce SET title='".$_POST['title']."',content='".$_POST['content']."' WHERE id=".$_POST['id'];

	if ($conn->query($sql) === TRUE) {
	    echo "success";
	} else {
	    echo "Error updating record: " . $conn->error;
	}

	$conn->close();
?>