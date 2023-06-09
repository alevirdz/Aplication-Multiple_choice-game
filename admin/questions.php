<?php
include_once 'core/database.php';

$getContentJson = file_get_contents('php://input');
$convertToArray = json_decode($getContentJson, true);
$method = $convertToArray['action'];

if (isset($method)) {
  // Ejecutar el método correspondiente
  switch ($method) {
    case 'get':
      getQuestion();
      break;
    case 'create':
      createQuestion();
      break;
    case 'delete':
      deleteController();
      break;
    default:
      break;
  }
} else {
  echo "An error occurred in method";
}


function createQuestion()
{
    $database = new Database("localhost", "root", "", "choice_game_json");
    if ($database->connect()) {
      $getJson = file_get_contents('php://input');
      $results = $database->saveQuestion($getJson);
      echo $results;
    } else {
      echo "failed to save";
    }
}

function getQuestion()
{
  $database = new Database("localhost", "root", "", "choice_game_json");
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

function deleteController()
{
  $database = new Database("localhost", "root", "", "choice_game_json");
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


