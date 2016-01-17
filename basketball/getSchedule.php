<?php
    $servername = "localhost";
    $username = "root";
    $password = "1234";
    $dbname = "csiefinal";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $table = "basketballSchedule";        //TODO: change this with different ball game schedule
    $sql = "SELECT * FROM " . $table;
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) == 0) {
        $table = "basketballteam";          //TODO: change this with different ball game team
        $sql = "SELECT nickName FROM " . $table;
        $result = mysqli_query($conn, $sql);
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($data, $row["nickName"]);
        }
        $response = array(
            "info"=> "getSchedule",
            "result"=> "empty",
            "data"=> $data
        );
        echo json_encode($response);
    }
    else {
        $response = array(
            "info"=> "getSchedule",
            "result"=> "empty",
            "data"=> array()
        );
        while ($row = mysqli_fetch_assoc($result)) {
            $data = array(
                "cycle"=> $row["cycle"],
                "No"=> $row["No"],
                "teamA"=> $row["teamA"],
                "teamB"=> $row["teamB"],
                "time"=> $row["time"]
            );
            array_push($response["data"], $data);
        }
        echo json_encode($response);
    }
?>
