<?php


$mail->SMTPDebug = 0;
$mail->isSMTP();

//$mail->Debugoutput = 'html';
$mail->Host = "mail.timeforit.pl";

$mail->SMTPAuth = true;
$mail->Username = "kreck14@timeforit.pl";
$mail->Password = "TimeforIT31";
$mail->SMTPSecure = "tls";//"ssl";456
$mail->Port = "587";
$mail->smtpConnect([
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    ]
]);

$mail->From = "kreck14@timeforit.pl";

?>
