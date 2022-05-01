<?php

require_once 'bootstrap.php';

$payload = json_decode(file_get_contents('php://input'), true);
$projectName = $payload['projectName'];
$projectsDir = "projects/{$projectName}";

$dirExists = $filesystem->directoryExists($projectsDir);

if ($dirExists !== true) {
    echo 'PROJECT_NAME_DOES_NOT_EXIST';
    return null;
}

$filesystem->deleteDirectory($projectsDir);
echo 'PROJECT_DELETED_SUCCESSFULLY';
