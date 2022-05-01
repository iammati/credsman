<?php

require_once '../vendor/autoload.php';

// Loading our .env (dotenv) file via vlucas/phpdotenv package.

$dotenv = Dotenv\Dotenv::createMutable('/var/www/html/');
$dotenv->load();

if (!function_exists('env')) {
    function env (string $key)
    {
        return $_ENV[$key];
    }
}

// Filesystem handling via league/flysystem package.

$adapter = new League\Flysystem\Local\LocalFilesystemAdapter(
    '/var/www/html/db/'
);

$filesystem = new League\Flysystem\Filesystem($adapter);
