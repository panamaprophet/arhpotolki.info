<?
    namespace API\Pictures;


    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;


    class Mapper extends \API\Common\Mapper {

        public function getAll(){

            $statement = $this -> db -> prepare('SELECT `id`, `categoryId`, `path` FROM `pictures`');

            $success = $statement -> execute();

            $result = $statement -> fetchAll(\PDO::FETCH_ASSOC);

            return [
                'success' => $success,
                'result' => $result 
            ];
        }

        public function getById($id){

            $statement = $this -> db -> prepare('SELECT `id`, `categoryId`, `path` FROM `pictures` WHERE id=:id');
            $statement -> bindParam(':id', $id);

            $success = $statement -> execute();

            $result = $statement -> fetch(\PDO::FETCH_ASSOC);

            return [
                'success' => $success, 
                'result' => $result
            ];
        }

        private function create($image){

            $statement = $this -> db -> prepare('INSERT INTO `pictures` (path, categoryId) VALUES (:path, :categoryId)');
            
            $statement -> bindParam(':path', $image -> getPath());
            $statement -> bindParam(':categoryId', $image -> getCategoryId());

            $success = $statement -> execute();

            $id = $this -> db -> lastInsertId();
            $data = $this -> getById($id)['result'];

            return [
                'success' => $success,
                'result' => $data
            ];
        }

        private function update($image){

            $statement = $this -> db -> prepare('UPDATE `pictures` SET path=:path,categoryId=:categoryId WHERE id=:id');
            
            $statement -> bindParam(':path', $image -> getPath());
            $statement -> bindParam(':categoryId', $image -> getCategoryId());
            $statement -> bindParam(':id', $image -> getId());

            $success = $statement -> execute();

            $id = $image -> getId();
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

            $statement = $this -> db -> prepare('DELETE FROM `pictures` WHERE id=:id');
            $statement -> bindValue(':id', $id);

            $success = $statement -> execute();


            return [ 
                'success' => $success 
            ];
        }

    }