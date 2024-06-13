<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "youremail@example.com";
    $subject = "Новое сообщение с сайта";
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = "Email: " . $email;
    $headers = "From: webmaster@example.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    mail($to, $subject, $message, $headers);
}
?>