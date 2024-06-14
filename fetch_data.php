<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "htdev"; 

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

$id = $_GET['id'];

$sql = "SELECT * FROM directions WHERE id = $id"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "Элемент с таким ID не найден.";
}
$conn->close();
?>