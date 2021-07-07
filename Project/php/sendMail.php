<?php 

require_once('phpmailer/class.phpmailer.php');    //dodanie klasy phpmailer
require_once('phpmailer/class.smtp.php');    //dodanie klasy smtp

function sendMail($title, $message, $fromName, $email) {
   
    $mail = new PHPMailer(); // create a new object
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "";
    $mail->Port = 0;
    $mail->CharSet = 'UTF-8';
    $mail->IsHTML(true);
    $mail->Username = "";
    $mail->Password = "";
    $mail->SetFrom("");
    $mail->Subject = $title;
    $mail->Body = $message."<br><br>".$fromName."<br>".$email."<br>".$title;
    $mail->AddAddress("");
    $mail->AddAddress("");
    $mail->AddAddress("");
    $mail->AddAddress("");
    
     if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
     } else {
        echo "Message has been sent";
     }
   }

$name = $_POST['nameKey'];
$email = $_POST['emailKey'];
$subject = $_POST['subjectKey'];
$message = $_POST['messageKey'];

sendMail($subject, $message, $name, $email);
