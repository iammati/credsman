<?php

require_once 'bootstrap.php';

$payload = json_decode(file_get_contents('php://input'), true);
$projectName = $payload['projectName'];
$projectsDir = "projects/{$projectName}";

$dirExists = $filesystem->directoryExists($projectsDir);

if ($dirExists === true) {
    echo 'PROJECT_NAME_ALREADY_IN_USE';
    return null;
}

$filesystem->createDirectory($projectsDir);
echo 'PROJECT_CREATED_SUCCESSFULLY';
