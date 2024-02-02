<?php

// Include the database connection code here

include('db.php');


// Include the database connection code here

// Check if the form is submitted and a file is uploaded
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['csv_file']['tmp_name'])) {
    // Validate file type and size
    $allowedTypes = ['text/csv', 'application/csv', 'application/vnd.ms-excel'];
    $maxSize = 1024 * 1024; // 1 MB

    if (in_array($_FILES['csv_file']['type'], $allowedTypes) && $_FILES['csv_file']['size'] <= $maxSize) {
        // Read CSV file content
        $csvContent = file_get_contents($_FILES['csv_file']['tmp_name']);

        // Parse CSV data
        $csvRows = str_getcsv($csvContent, "\n");

        foreach ($csvRows as $csvRow) {
            $fields = str_getcsv($csvRow);

            if (count($fields) >= 1) {
                $whitelistedAddress = $fields[0]; // Assuming the whitelisted_address is in the first column

                // Check if the whitelisted_address already exists
                $checkQuery = "SELECT * FROM whitelists WHERE whitelisted_address = '$whitelistedAddress'";
                $checkResult = $connection->query($checkQuery);

                if ($checkResult->num_rows === 0) {
                    // Insert data into the whitelists table
                    $query = "INSERT INTO whitelists (whitelisted_address, created_at) VALUES ('$whitelistedAddress', NOW())";
                    
                    $result = $connection->query($query);
                    
                    if (!$result) {
                        echo "Failed to upload data from CSV file.";
                        exit;
                    }
                }
            }
        }

        echo "Data from CSV file uploaded successfully.";
    } else {
        echo "Invalid file type or size. Please upload a CSV file (max size: 1 MB).";
    }
}

// Close the database connection
$connection->close();
?>
