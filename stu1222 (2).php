<?php
$servername = "localhost";
$database = "bookreviews";
$username = "root";
$password = "";

// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection

if ($conn==false) {
die("Connection failed: " . mysqli_connect_error());
}

$sn = $_POST['user'];

$sql = "select * from bookview where bookname='$sn'";
$result = mysqli_query($conn, $sql);
while($row=mysqli_fetch_array($result))
{
echo "<p>".$row['username']." : ".$row['review']."</p>";
}
?>
