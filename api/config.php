<?php

require_once 'bootstrap.php';

$adapter = new League\Flysystem\Local\LocalFilesystemAdapter(
    // Determine root directory
    '/var/www/html/data/'
);

// The FilesystemOperator
$filesystem = new League\Flysystem\Filesystem($adapter);

try {
    $response = $filesystem->read('test.json');
    echo $response;
} catch (FilesystemException | UnableToReadFile $exception) {
    throw $exception;
}

// return [
//     'storage' => '/var/www/html/data/',
// ];
