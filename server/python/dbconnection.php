<?php

/**
 * Created by PhpStorm.
 * User: ColeCaliph
 * Date: 10/5/2016
 * Time: 6:14 PM
 */
class dbconnection
{

    function connect(){
        $host="104.236.45.62";
        $username="root";
        $password="IRiefm123!";

        try{
            $conn = new PDO("mysql:host=$host;dbname=projectdb",$username,$password);
            echo "Connection Successful";

        }catch (PDOException $e){

            echo " Connection failed".$e->getMessage();
        }
    }

}
$conn = new dbconnection();
$conn->connect();
?>