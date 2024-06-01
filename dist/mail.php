<?php
$to = "Info@fhela.com"; // емайл получателя данных из формы
$tema = "Форма обратной связи"; // тема полученного емайла
$message = "Имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message = "Фамилия: ".$_POST['surname']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['mail']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['tel']."<br>"; //полученное из формы name=phone
$message .= "Страна: ".$_POST['country']."<br>"; //полученное из формы name=phone
$message .= "Город: ".$_POST['city']."<br>"; //полученное из формы name=message
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>