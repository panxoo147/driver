<?php

require_once "../global.php";

$con = mysqli_connect($servername, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    response_message(500,"Error: ");
}


$sql = "INSERT INTO `".$dbname."`.`course` ( `code`, `name`) VALUES ('".$_REQUEST["cCode"]."','".$_REQUEST["cName"]."')";
$result = mysqli_query($con,$sql);

if(!($result))
{
    response_message(500,"Unsuccess: result is not added");
}
else
{
    response_message(200,"Success");
}

mysqli_free_result($result);
mysqli_close($con);

?>