<?

    function createApplication($config){

        $app = new \Slim\App(['settings' => $config]);

        $container = $app -> getContainer();

        $container['db'] = function($c){

            $db = $c['settings']['db'];

            $connectionString = 'mysql:host=' . $db['hostname'] . ';dbname=' . $db['database'] . ';charset=utf8';

            $pdo = new PDO(
                $connectionString,
                $db['username'], 
                $db['password']
            );

            $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo -> setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            return $pdo;
        };

        return $app;
    }