<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);




if (empty($_POST['email'])) {
	http_response_code(200);
	echo json_encode(
        [
           "sent" => false,
           "message" => 'Brak danych ziomek'
        ]
    ); 
    exit();
};

if ($_POST) {
	http_response_code(200);
	$email = htmlspecialchars($_POST['email']);
	$content = nl2br($_POST['message']);

    require dirname(__FILE__).'/PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';
	include(dirname(__FILE__).'ustawienia_wysylania_poczty.php');
	//$mail->From = $email;
	//$mail->FromName = $imie_nazwisko;
	$mail->addAddress("brilliantcarstudio@gmail.com"); //nasz email
	$mail->addReplyTo($email);
	$mail->isHTML(true);
	$mail->Subject = 'krakowdetailing.pl - Formularz kontaktowy';
	$mail->Body = 'krakowdetailing.pl - wiadomość z formularza kontaktowego <br><br> '
			. 'Adres e-mail: '.$email.'<br><br>'
			. 'Wiadomość: <br>'.$content.' <br><br> --- KONIEC ---';
	$mail->AltBody = strip_tags($mail->Body);

	if($mail->send()){
		echo json_encode(array(
			"sent" => true,
			"message" => "Message sent successfully",
			"email" => $email
		));
	} else {
		echo json_encode(["sent" => false, "message" => $mail->ErrorInfo.' '.$mail->Subject]);
	}	
} else {
	// tell the user about error
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>