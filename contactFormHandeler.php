<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $location = $_POST['location'];
    $contact = $_POST['contact'];
    $emailFrom = $_POST['email'];

    $mailTo = "001patilritesh@gmail.com";
    $headers = "From: ".$emailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$contact".\n\n".$location; 
    
    mail($mailTo, $name, $txt, $headers); 
    header("Location: index.php?mailsend"); 
}
 
?>