<?php
include('conn.php');
global $conn;

if ($conn==false) {
    die("Connection failed: " . mysqli_connect_error());
    }

$n=$_POST['un'];
$pk=$_POST['ps'];

$sql = "SELECT * FROM register_user WHERE username = '$n' AND password = '$pk'";
$results = mysqli_query($conn, $sql);
if(mysqli_num_rows($results) == 1){
    echo "logged in successfully!";
}
else{
    echo "check username or password!";
}
mysqli_close($conn);
?>