<?php
    $servername = "localhost";
    $username = "root";
    $password = "1234";
    $dbname = "csiefinal";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $table = "basketballteam";          //TODO: change this with different ball game team
    $sql = "SELECT id,nickName FROM " . $table . " where type=1";
    $result = mysqli_query($conn, $sql);
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);
?>
