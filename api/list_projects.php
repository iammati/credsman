<?php

require_once 'bootstrap.php';

$projects = [];
$projectsArr = $filesystem->listContents('projects')
    ->sortByPath()
    ->toArray()
;

foreach ($projectsArr as $i => $project) {
    $projects[$i] = [
        'path' => str_replace('projects/', '', $project['path']),
        'last_modified' => $project['last_modified'],
    ];

    $lastModified = $projectsArr[$i]['last_modified'];
    $projects[$i]['last_modified'] = gmdate('Y-m-d / H:i:s', $lastModified);
}

echo json_encode($projects);
