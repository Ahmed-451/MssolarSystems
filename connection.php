<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mssolar";

$conn = mysqli_connect($servername,$username,$password,$dbname);

if($conn)
{
    echo"Connection OK";
}

?>