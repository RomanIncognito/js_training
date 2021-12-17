<?php
    require_once 'login.php';
    $conn = new mysqli($hn, $un, $pw, $db);
    if ($conn->connect_errno) die($conn->connect_errno);
    $query = "SELECT * FROM test1.classics";
    $result = $conn->query($query);
    if (!$result) die($conn->error);
    $rows = $result->num_rows;
    for ($j = 0; $j < $rows; ++$j){
        $result->data_seek($j);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        echo "Author: " .$row['author'] .   '<br>';
        echo "Title: " .$row["title"] . '<br>';
        echo "Type: " .$row["type"] . '<br>';
        echo "Year: " .$row["yr"] . '<br>';
    }
    $result->close();
    $conn->close();
?>