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
      deleteController($host, $user, $pass, $namebase);
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
      $results = $database->saveQuestion($getJson);
      echo $results;
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
      $exm = $results[0];
      echo json_encode($exm);
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


