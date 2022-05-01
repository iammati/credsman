<?php

require_once 'bootstrap.php';

$payload = json_decode('{"projectName":"ahahhaha","datas":[{"key":"KKK","value":"VVV"}]}', true); //json_decode(file_get_contents('php://input'), true);
$projectName = $payload['projectName'];
$path = "projects/${projectName}/data.json";

if (!$filesystem->fileExists($path)) {
    $filesystem->write($path, '{}');
}

$response = $filesystem->read($path);
$json = json_decode($response, true);

dd($json, $payload['datas']);
