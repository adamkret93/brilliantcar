<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);




if (empty($_POST['excerpt'])) {
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
	$name = htmlspecialchars($_POST['title']);
	$email = htmlspecialchars($_POST['excerpt']);
	$content = htmlspecialchars($_POST['text']);
	//$content = nl2br($_POST['content']);

    require dirname(__FILE__).'/PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';
	include(dirname(__FILE__).'ustawienia_wysylania_poczty.php');
	$mail->From = $email;
	//$mail->FromName = $imie_nazwisko;
	$mail->addAddress("krecik14@timeoutescape.pl"); //nasz email
	$mail->addReplyTo($email);
	$mail->isHTML(true);
	$mail->Subject = 'Formularz kontaktowy - '.$name;
	$mail->Body = 'Time Out - wiadomość z formularza kontaktowego <br><br> '
			. 'Imię i nazwisko: '.$name.'<br>'
			. 'Adres e-mail: '.$email.'<br><br>'
			. 'Wiadomość: <br>'.$content.' <br><br> --- KONIEC ---';
	$mail->AltBody = strip_tags($mail->Body);

	if($mail->send()){
		echo json_encode(array(
			"sent" => true,
			"message" => "Message sent successfully",
			"name" => $name,
			"email" => $email
		));
	} else {
		echo json_encode(["sent" => false, "message" => $mail->ErrorInfo.' '.$mail->Subject]);
	}

	// set response code - 200 OK

	
/* 	$subject = htmlspecialchars($_POST['poem']);
	$to = "krecik1425@gmail.com";
	$from = htmlspecialchars($_POST['excerpt']); */

	// data

/* 	$msg = $_POST['number'] . $_POST['message']; */

	// Headers

/* 	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $msg, $headers); */

	// echo json_encode( $_POST );

	
} else {

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>