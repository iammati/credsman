<?php

require_once 'bootstrap.php';

$payload = json_decode(file_get_contents('php://input'), true);
$projectName = $payload['projectName'];
$path = "projects/${projectName}/data.json";

if (!$filesystem->fileExists($path)) {
    $filesystem->write($path, '{}');
}

$response = $filesystem->read($path);
$json = json_decode($response, true);

$json[] = [
    'name' => $payload['name'],
    'envName' => $payload['environment'],
    'datas' => [],
];

$filesystem->write($path, json_encode($json, JSON_PRETTY_PRINT));

echo 'PROJECT_SUCCESSFULLY_CREATED_ENVIRONMENT';
