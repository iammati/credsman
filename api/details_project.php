<?php

require_once 'bootstrap.php';

$payload = json_decode(file_get_contents('php://input'), true);
$projectName = $payload['projectName'];
$data = "projects/${projectName}/data.json";

if (!$filesystem->fileExists($data)) {
    echo 'PROJECT_DATA_DOES_NOT_EXIST';
    return false;
}

$response = $filesystem->read($data);
$responseArr = json_decode($response, true);
$dataKeys = [];

foreach ($responseArr as $i => $item) {
    foreach ($item['datas'] as $data) {
        foreach ($data as $key => $value) {
            if (in_array($key, $dataKeys)) {
                continue;
            }

            array_push($dataKeys, $key);
        }
    }
}

echo json_encode([
    'items' => $responseArr,
    'uniqueDataKeys' => $dataKeys,
]);
