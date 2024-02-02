<?php

// Include the database connection code here
include('db.php');
// API endpoint to get all columns from "whitelists" table
// Enable CORS headers
header("Access-Control-Allow-Origin: *"); // Replace * with the actual origin or a comma-separated list of allowed origins
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 3600");

// API endpoint to handle both GET and POST requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Validate and get the whitelisted_address from the URL parameter
    if (isset($_GET['address'])) {
        $whitelistedAddress = $_GET['address'];

        // Retrieve data based on the whitelisted_address
        $query = "SELECT * FROM whitelists WHERE whitelisted_address = '$whitelistedAddress'";
        $result = $connection->query($query);

        if ($result) {
            // Check if the record exists
            if ($result->num_rows > 0) {
                $record = $result->fetch_assoc();
                $data = array('success' => true, 'message' => 'Record found');

                header('Content-Type: application/json');
                echo json_encode($data);
            } else {
                // Handle the case when the record does not exist
                $response = array('success' => false, 'message' => 'Record not found');
                header('Content-Type: application/json');
                echo json_encode($response);
            }
        } else {
            // Handle the error if the query fails
            $response = array('success' => false, 'message' => 'Query failed');
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    } else {
        // Handle missing or invalid parameter
        $response = array('success' => false, 'message' => 'Invalid parameter');
        header('Content-Type: application/json');
        echo json_encode($response);
    }
} 


// API endpoint to store inj_address based on whitelisted_address

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // $requestData = json_decode(file_get_contents("php://input"), true);


    // Get the raw POST data
    $json_data = file_get_contents("php://input");

    // Validate and decode the JSON data
    $requestData = json_decode($json_data, true);

    // $requestData = $_POST;

    

    // echo "<pre>";
    // print_r($requestData);
    // echo "</pre>";

    // return $requestData;
    // Validate the required fields
    if (isset($requestData['whitelisted_address']) && isset($requestData['inj_address'])) {
        $whitelistedAddress = $requestData['whitelisted_address'];
        $injAddress = $requestData['inj_address'];

        // echo "tst";
        // return true;

        // Check if the whitelisted_address already exists
        $checkQuery = "SELECT * FROM whitelists WHERE whitelisted_address = '$whitelistedAddress'";
        $checkResult = $connection->query($checkQuery);
        $isInjAddressAdded = false;

        if ($checkResult->num_rows > 0) {

            // Checking is INJ Address already Added by the user 
            while ($row = $checkResult->fetch_assoc()) {
                // Print the data for each row
                if(isset($row['inj_address']) && ($row['inj_address'] !='')){
                    $isInjAddressAdded = true;
                }
            }


            if($isInjAddressAdded){
                $response = array('success' => false, 'message' => 'Failed to update data, You have already added INJ Address');
                header('Content-Type: application/json');
                echo json_encode($response);
            }else{

                // If the whitelisted_address exists, update the record
                $updateQuery = "UPDATE whitelists SET inj_address = '$injAddress', created_at = NOW() WHERE whitelisted_address = '$whitelistedAddress'";
                $updateResult = $connection->query($updateQuery);

                if ($updateResult) {
                    $response = array('success' => true, 'message' => 'Data updated successfully');
                    header('Content-Type: application/json');
                    echo json_encode($response);
                } else {
                    // Handle the error if the update query fails
                    $response = array('success' => false, 'message' => 'Failed to update data');
                    header('Content-Type: application/json');
                    echo json_encode($response);
                }

            }
     
           
        }else{

            // Handle the error if the update query fails
            $response = array('success' => false, 'message' => 'You are not whitelisted, Address not found');
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    } else {
        // Handle missing or invalid fields
        $response = array('success' => false, 'message' => 'Invalid data format');
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}


// Close the database connection
$connection->close();
?>
