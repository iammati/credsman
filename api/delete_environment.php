<?php

require_once 'bootstrap.php';

$payload = json_decode(file_get_contents('php://input'), true);
$projectName = $payload['projectName'];
$name = $payload['name'];
$projectsDir = "projects/{$projectName}";

$dirExists = $filesystem->directoryExists($projectsDir);

if ($dirExists !== true) {
    echo 'PROJECT_NAME_DOES_NOT_EXIST';
    return null;
}

$path = "${projectsDir}/data.json";

if (!$filesystem->fileExists($path)) {
    echo 'PROJECT_DATA_DOES_NOT_EXIST';
    return false;
}

$response = $filesystem->read($path);
$json = json_decode($response, true);

$target = null;

foreach ($json as $k => $item) {
    if ($item['envName'] !== $name) {
        continue;
    }

    $target = $item;
    unset($json[$k]);
}

if ($target === null) {
    echo 'PROJECT_ENVIRONMENT_DOES_NOT_EXIST';
    return false;
}

$filesystem->write($path, json_encode($json, JSON_PRETTY_PRINT));

echo 'PROJECT_ENVIRONMENT_SUCCESSFULLY_DELETED';
