<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	$conn = new mysqli("localhost", "root", "", "crud");
	$result = $conn->query("SELECT name,email FROM users");
	$data = array();
	while ($row = $result->fetch_array(MYSQLI_ASSOC)){
	   $data[] = array('name' => $row['name'], 'email' => $row['email']);
	}
	echo json_encode($data);
	$conn->close();
?>