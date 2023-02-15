<?
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    require '../vendor/phpmailer/class.phpmailer.php';
    require '../vendor/phpmailer/class.smtp.php';

    require_once '../vendor/autoload.php';
    require_once './config.php';
    require_once './bootstrap.php';


    spl_autoload_register(function ($classname) {

        $path = explode('\\', $classname);
        $path = array_map('strtolower', $path);

        require_once ('../' . implode(DIRECTORY_SEPARATOR, $path) . '.php');
    });


    $application = createApplication($config);


    $application -> group('/images', function(){
        $this -> get('.json', '\API\Pictures\Controller:getAll');
        $this -> post('.json', '\API\Pictures\Controller:save');
        $this -> post('/{id}.json', '\API\Pictures\Controller:save');
        $this -> get('/{id}.json', '\API\Pictures\Controller:getById');
        $this -> delete('/{id}.json', '\API\Pictures\Controller:delete');
    });

    $application -> group('/categories', function(){
        $this -> get('.json', '\API\Categories\Controller:getAll');
        $this -> post('.json', '\API\Categories\Controller:save');
        $this -> post('/{id}.json', '\API\Categories\Controller:save');
        $this -> get('/{id}.json', '\API\Categories\Controller:getById');
        $this -> delete('/{id}.json', '\API\Categories\Controller:delete');
    });

    $application -> group('/feedback', function(){
        $this -> get('.json', '\API\Feedback\Controller:getAll');
        $this -> post('.json', '\API\Feedback\Controller:save');
        $this -> post('/{id}.json', '\API\Feedback\Controller:save');
        $this -> get('/{id}.json', '\API\Feedback\Controller:getById');
        $this -> delete('/{id}.json', '\API\Feedback\Controller:delete');
    });

    $application -> post('/orders/send', '\API\Orders\Controller:send');

    $application -> post('/settings/general.json', '\API\Settings\Controller:save');
    $application -> get('/settings/general.json', '\API\Settings\Controller:getAll');

    $application -> run();