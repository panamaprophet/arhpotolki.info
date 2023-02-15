<?
    namespace API\Settings;


    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;


    class Mapper extends \API\Common\Mapper {

        public function getAll(){

            $statement = $this -> db -> prepare('SELECT `key`, `value`, `createdOn`, `updatedOn`, `title`, `type` FROM `settings`');

            $success = $statement -> execute();

            $result = $statement -> fetchAll(\PDO::FETCH_ASSOC);

            return [
                'success' => $success,
                'result' => $result 
            ];
        }

        public function save($setting){
            $statement = $this -> db -> prepare('UPDATE `settings` SET `value`=:value WHERE `key`=:key');

            $key = $setting -> getKey();
            $value = $setting -> getValue();

            $statement -> bindParam(':key', $key);
            $statement -> bindParam(':value', $value);

            $success = $statement -> execute();

            return [
                'success' => $success,
                'result' => $success,
            ];
        }

    }