<?php
include('conn.php');
global $conn;

if ($conn==false) {
die("Connection failed: " . mysqli_connect_error());
}
$n=$_POST['un'];
$na=$_POST['em'];
$pk=$_POST['ps'];
$pm=$_POST['cps'];

if($pk != $pm){
    echo "Password doesn't match!";
}
else{
        $sql = "INSERT INTO register_user VALUES('$n','$na','$pk')";
    }
if(mysqli_query($conn, $sql)){
echo "Records inserted successfully.";
} else{
echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);
?>

