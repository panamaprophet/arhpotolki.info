<?
    namespace API\Categories;


    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;


    class Mapper extends \API\Common\Mapper {

        public function getAll(){

            $statement = $this -> db -> prepare('SELECT `id`, `name` FROM `categories`');

            $success = $statement -> execute();

            $result = $statement -> fetchAll(\PDO::FETCH_ASSOC);


            $objects = array_map(function($item){
                return new Model($item);
            }, $result);


            return [
                'success' => $success,
                'result' => $objects
            ];
        }

        public function getById($id){

            $statement = $this -> db -> prepare('SELECT `id`, `name` FROM `categories` WHERE id=:id');
            $statement -> bindParam(':id', $id);

            $success = $statement -> execute();

            $result = $statement -> fetch(\PDO::FETCH_ASSOC);


            return [
                'success' => $success, 
                'result' => $result
            ];
        }

        private function create($image){

            $statement = $this -> db -> prepare('INSERT INTO `categories` (name) VALUES (:name)');
            $statement -> bindParam(':name', $image -> getName());
            $success = $statement -> execute();

            $id = $this -> db -> lastInsertId();
            $data = $this -> getById($id)['result'];

            return [
                'success' => $success,
                'result' => $data
            ];
        }

        private function update($item){

            $statement = $this -> db -> prepare('UPDATE `categories` SET name=:name WHERE id=:id');
            $statement -> bindParam(':name', $item -> getName());
            $statement -> bindParam(':id', $item -> getId());

            $success = $statement -> execute();

            $id = $item -> getId();
            $data = $this -> getById($id)['result'];

            return [
                'success' => $success,
                'result' => $data
            ];
        }

        public function save($image){
            return $image -> isNew() ? $this -> create($image) : $this -> update($image);
        }

        public function delete($id){

            $statement = $this -> db -> prepare('DELETE FROM `categories` WHERE id=:id');
            $statement -> bindValue(':id', $id);

            $success = $statement -> execute();


            return [ 
                'success' => $success 
            ];
        }

    }