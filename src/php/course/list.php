<?php

require_once "../global.php";

$con = mysqli_connect($servername, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    response_message(500,"Error: ");
}

$sql = "SELECT * FROM `".$dbname."`.`course`;";
$results_array = array();
$result = mysqli_query($con,$sql);

if(empty($result))
{
    response_message(404,"No data found");
    return;
}

while ($row = $result->fetch_assoc()) {
  $results_array[] = $row;
}

if(empty($results_array)) {
    response_message(404,"No data found");
    return;
}

response_message(200,"Success",$results_array);

mysqli_free_result($result);
mysqli_close($con);

?>