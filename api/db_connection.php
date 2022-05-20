<?php 


    $dbhost = "localhost";
    $dbusername = "root";
    $dbpassword = "root";
    $dbname = "assessment";

    $conn = new mysqli($dbhost, $dbusername, $dbpassword, $dbname);

    if($mysqli -> connect_error){

        echo 'Failed to connect to DB: ' . $mysqli -> connect_error;
        exit();

    }



?>