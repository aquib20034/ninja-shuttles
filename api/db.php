<?php

// Database configuration
$host 		= "localhost";
$username 	= "root";
$password 	= "";
$database 	= "gr_nft";

// Create a connection
$connection = new mysqli($host, $username, $password, $database);

// Check the connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
