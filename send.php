<?php
$message = "Сообщение";
$to = "hot.ershik@gmail.com";
$from = "hot.ershik77@gmail.com";
$subject = "Покупка сайта"

$subject = "?=utf-8?B?".base64_encode($subject)."?=";
$headers = "From:$from\r\nReply-to:$from\r\nContent-type:text/plain;charset=urf-8\r\n";
mail($to,$subject,$message,$headers)
?>