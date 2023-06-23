<?php
include_once 'core/database.php';

$host = 'localhost';
$user = 'root';
$pass = '';
$namebase = 'choice_game_json';

$getContentJson = file_get_contents('php://input');
$convertToArray = json_decode($getContentJson, true);
$method = $convertToArray['action'];


if (isset($method)) {
  switch ($method) {
    case 'get':
      getQuestion($host, $user, $pass, $namebase);
      break;
    case 'create':
      createQuestion($host, $user, $pass, $namebase);
      break;
    case 'delete':
      deleteController($host, $user, $pass, $namebase, $convertToArray);
      break;
    default:
      break;
  }
} else {
  echo "An error occurred in method";
}


function createQuestion($host, $user, $pass, $namebase)
{
    $database = new Database($host, $user, $pass, $namebase);
    if ($database->connect()) {
      $getJson = file_get_contents('php://input');
      $decode = json_decode($getJson);
      $preguntas = $decode->questions;
      foreach ($preguntas as $pregunta) {
        $results = $database->saveQuestion($pregunta);
        
      };
      echo true;
    } else {
      echo "failed to save";
    }
}

function getQuestion($host, $user, $pass, $namebase)
{
  $database = new Database($host, $user, $pass, $namebase);
  if ($database->connect()) {
    $results = $database->getQuestion();
    if($results !== 'empty'){
      $exm = $results;
      echo json_encode($exm);
      // var_dump($results); exit;
      
    }else{
      echo 'null';
    }
    
  } else {
    echo 'query error';
  }
}

function deleteController($host, $user, $pass, $namebase)
{
  $database = new Database($host, $user, $pass, $namebase);
  if ($database->connect()) {
    $getJson = file_get_contents('php://input');
    $convertToArray = json_decode($getJson, true);
    $id = $convertToArray['id'];
    $results = $database->deleteQuestionBD($id);
    echo $results;
  } else {
    echo 'query error';
  }
}


