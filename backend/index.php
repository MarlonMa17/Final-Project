<?php
// Set response headers to return JSON and allow CORS
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle OPTIONS request for CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Handle GET request for the first API
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['api']) && $_GET['api'] === 'first') {
    $response = ["request" => 'GET for First API'];
    echo json_encode($response);
    exit;
}

// Handle POST request for the first API
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['api']) && $_GET['api'] === 'first') {
    // Retrieve JSON data from the request body
    $rawData = file_get_contents('php://input');

    // Decode JSON data
    $data = json_decode($rawData, true);

    // Check if JSON decoding was successful
    if (json_last_error() === JSON_ERROR_NONE) {
        // Prepare data to be sent as JSON
        $postData = json_encode($data);

        // URL of the API endpoint for the first API
        $apiUrl = 'https://manjeshprasad.com/DBMS/Server.php';

        // Set cURL options
        $ch = curl_init($apiUrl);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $postData,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
            ],
        ]);

        // Execute the cURL request
        $response = curl_exec($ch);

        // Check for errors
        if ($response === false) {
            $error = curl_error($ch);
            echo json_encode(["error" => $error]);
            exit;
        }

        // Close cURL session
        curl_close($ch);

        // Return the response back to the client
        echo $response;
    } else {
        // JSON decoding failed
        http_response_code(400); // Bad Request
        echo json_encode(["error" => "Error decoding JSON data"]);
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['api']) && $_GET['api'] === 'second') {
   
    $apiUrl = 'https://manjeshprasad.com/DBMS/Review.php';


    $ch = curl_init($apiUrl);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
    ]);

    
    $response = curl_exec($ch);

    
    if ($response === false) {
        $error = curl_error($ch);
        echo json_encode(["error" => $error]);
        exit;
    }

    
    curl_close($ch);

    echo $response;
    exit;
}

// Handle POST request for the second API
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['api']) && $_GET['api'] === 'second') {
    // Handle POST request for the second API
    // Add your logic here for the second API
    exit;
}
]
echo json_encode(["error" => "Method not allowed"]);
?>
