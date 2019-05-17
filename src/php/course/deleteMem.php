<?php

require_once "../global.php";

$con = mysqli_connect($servername, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    response_message(500,"Error: ");
}


$sql = "	
DELETE FROM member
WHERE memID = ".$_REQUEST["id"]."";
//".$_REQUEST["id"]."
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

$sql = "
DELETE member,car FROM member
INNER JOIN
car ON car.memID = member.memID 
WHERE
member.memID = ".$_REQUEST["cId"]."";
//".$_REQUEST["id"]."
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