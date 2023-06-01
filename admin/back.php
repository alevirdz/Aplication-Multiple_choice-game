<?php

$getJson = file_get_contents('php://input');
$dataArray = json_decode($getJson, true);


if ($dataArray === null) {
    // Error al decodificar el JSON
    echo "Error al decodificar el JSON.";
  } else {

    if (isset($dataArray['example'])) {
        $theDatas = $dataArray['example'];
        echo $theDatas;
    } else {
        echo "La clave 'example' no existe en el JSON recibido.";
    }
  }
  ?>
 

