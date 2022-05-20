<?php 


include 'db_connection.php';


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $name = $data->name;
    $email = $data->email;
    $contact = $data->contact;
    $username = $data->username;
    $password = $data->password;

    $sql = "INSERT INTO users (id, name, email, contact, username, password) VALUES (NULL, '$names', '$email', '$contact', '$username', '$password');";
    
    $result = mysqli_querry($conn, $sql);

    if(!$result){
        echo("Error Description: " . mysqli_error($conn));
    } else {
        echo("Added User");
    }



?>