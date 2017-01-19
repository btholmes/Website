<?php

header("Access-Control-Allow-Origin: *");
$name = $_GET['name']; 
$article = $_GET['article'];
$user = "Anonymous"; 
 
// $dataArray[0] = $name;
// $dataArray[1] = $article;
 
// echo json_encode($dataArray);
 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blogposts743"; 


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO posts (Name, Post, User)
VALUES ('$name', '$article', '$user')";

if ($conn->query($sql) === TRUE) {
//    echo "alert(New record created successfully)";
} else {
    echo "Error Connecting: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>