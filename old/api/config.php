<?
    $config = [];

    $config['db'] = [
        'hostname' => 'localhost',
        'database' => 'arhpotolki.info',
        'username' => 'root',
        'password' => 'root'
    ];

    $config['displayErrorDetails'] = true;
    $config['determineRouteBeforeAppMiddleware'] = true;
    $config['uploadDir'] = dirname(__FILE__) . '/../assets/uploads/';
    $config['uploadWeb'] = 'assets/uploads/';