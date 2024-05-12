<?php
// Set response headers to return JSON and allow CORS
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Initialize a response array
//$response = [];



// initialize the response JSON return
$response = []; 


// Determine the request method
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    http_response_code(204); 
    exit;
}



// By default, the server must load up the credentials that are within the actual input file
// If the file does not exist, then it will throw an error by default
if($method === 'GET'){                             
    $response = ["request" => 'GET']; 
   handleGetRequest($response); 
} else if ($method === "POST"){                 // to handle the credentials and the input field form the modal
    $response = ["request" => 'POST']; 
        $rawData = file_get_contents('php://input');

             $data = json_decode($rawData, true);

        if (json_last_error() === JSON_ERROR_NONE) {
                    // Access data from $data['username'] and $data['password']
                    
                    handlePostRequest($response, $data);
                    
        }
} else { 
    $response = ["request" => "error"]; 
    $response = ["status" => "fail"]; 
    http_response_code(405); 
}

echo json_encode($response); 


function handleGetRequest(&$response){ 
    $filePath = "./TextFiles/contactInfo.txt"; 
        try {
            if (!file_exists($filePath)) {
                throw new Exception("File not found");
            }
            $file_content = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            $response['fileContent'] = $file_content;
        } catch (Exception $e ){ 
        $response['message'] = $e->getMessage(); 
    }
}


function handlePostRequest(&$response, $data){ 
   
    try {
        if (!isset($data['username']) || !isset($data["password"])) {
            $response['status'] = 'error';
            $response['message'] = 'Username and password are required';
            http_response_code(400); // Bad request
            return;
        }
    
        $username = $data['username'];
        $password = $data["password"];
    
        $file = fopen("./TextFiles/credentials.txt", "r");
        if ($file === false) {
            throw new Exception("There was a problem opening the file");
        }
    

        $loginSuccessful = false;
            
            while (!feof($file)) {
                $fileContent = fgets($file);
                list($text1, $text2) = explode(' ', $fileContent);

                // delete the space characters if present
                if (trim($text1) == $username && trim($text2) == $password) {
                    $loginSuccessful = true;
                    break;
                }
            }
            
            fclose($file);
            
            if ($loginSuccessful) {
                $response["message"] = [ "Hello, " . $username . ", Welcome Back"];
            } else { 
                $response["message"] = [ "Could not find login Information"];
            }
    
    } catch (Exception $e) {
        $response['status'] = 'error';
        $response['message'] = $e->getMessage();
        http_response_code(500); // Internal Server Error
    }
}
?>