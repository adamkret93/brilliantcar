<?php


$mail->SMTPDebug = 0;
$mail->isSMTP();

//$mail->Debugoutput = 'html';
$mail->Host = "serwer2036855.home.pl";

$mail->SMTPAuth = true;
$mail->Username = "kontakt@krakowdetailing.pl";
$mail->Password = "imApQN3d";
$mail->SMTPSecure = "ssl";//"ssl";456
$mail->Port = "465";
$mail->smtpConnect([
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    ]
]);

$mail->From = "kontakt@krakowdetailing.pl";

?>
