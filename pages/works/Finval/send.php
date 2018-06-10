<?php 
	if (!empty($_POST['name']) AND !empty($_POST['phone'])) 
{
		$to = 'sergey13suvorov@gmail.com';
		$subject = 'Обратный звонок';
		$letter = "Контактные данные:";
    	$letter .="\n\n";
    	$letter .="Имя: ".$_POST['name'];
    	$letter .="\nТелефон: ".$_POST['phone'];
		$headers = 'Content-type: text/html; charset=utf-8 \r\n';
		$headers .= 'From: Отправитель <from@example.com>\r\n';

		mail($to, $subject, $letter, $headers);
	}
 ?>