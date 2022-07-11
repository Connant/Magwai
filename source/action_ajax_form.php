<?php
header("Access-Control-Allow-Origin: *");

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["tel"]) && isset($_POST["textarea"])) {

  // Формируем массив для JSON ответа
  $result = array(
    'name' => $_POST["name"],
    'email' => $_POST["email"],
    'tel' => $_POST["tel"],
    'textarea' => $_POST["textarea"],
  );

  // Переводим массив в JSON
  echo json_encode($result);
}
