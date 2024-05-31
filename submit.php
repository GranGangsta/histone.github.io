<?php
$servername = "localhost";
$cardDate = "cardDate";
$cardNumber = "cardNumber";
$cardCode = "cardCode";
$dbname = "histoneCards";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$inputValue = $_POST['inputValue'];
$sql = "INSERT INTO your_table_name (column_name) VALUES ('$inputValue')";

if ($conn->query($sql) === TRUE) {
    echo "Спасибо за регистрацию";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>