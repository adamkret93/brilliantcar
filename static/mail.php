<?php
  if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['content'])){
		
		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$content = nl2br($_POST['content']);

    require dirname(__FILE__).'/PHPMailer/PHPMailerAutoload.php';

		$mail = new PHPMailer;
		$mail->CharSet = 'UTF-8';
		include(dirname(__FILE__).'ustawienia_wysylania_poczty.php');
		$mail->From = $email;
		//$mail->FromName = $imie_nazwisko;
		$mail->addAddress("kontakt@timeoutescape.pl"); //nasz email
		$mail->addReplyTo($email);
		$mail->isHTML(true);
		$mail->Subject = 'Formularz kontaktowy - '.$name;
		$mail->Body = 'Time Out - wiadomość z formularza kontaktowego <br><br> '
				. 'Imię i nazwisko: '.$name.'<br>'
				. 'Adres e-mail: '.$email.'<br><br>'
				. 'Wiadomość: <br>'.$content.' <br><br> --- KONIEC ---';
		$mail->AltBody = strip_tags($mail->Body);

		if(!$mail->send()){
			echo '0';
			echo 'Mailer Error: ' . $mail->ErrorInfo.' '.$mail->Subject;
		} else {
		  echo '1';
		}
	}else{
		echo "0Brak danych";
	}
?>
