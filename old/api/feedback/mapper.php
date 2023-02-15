<?
    namespace API\Feedback;


    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;


    class Mapper extends \API\Common\Mapper {

        public function getAll($includeNotApproved = false){

            $query = 'SELECT `id`,`name`,`message`,`photo`,`date`,`approved`,`city` FROM `feedback`';

            if (empty($includeNotApproved)) {
                $query .= ' WHERE `approved`=1';
            }

            $statement = $this -> db -> prepare($query);

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

            $statement = $this -> db -> prepare('SELECT `id`,`name`,`message`,`photo`,`date`, `approved`,`city` FROM `feedback` WHERE id=:id');
            $statement -> bindParam(':id', $id);

            $success = $statement -> execute();

            $result = $statement -> fetch(\PDO::FETCH_ASSOC);


            return [
                'success' => $success, 
                'result' => $result
            ];
        }

        private function create($item){

            $statement = $this -> db -> prepare('INSERT INTO `feedback` (`name`,`message`,`photo`, `city`) VALUES (:name, :message, :photo, :city)');
            
            $statement -> bindParam(':name', $item -> getName());
            $statement -> bindParam(':message', $item -> getMessage());
            $statement -> bindParam(':photo', $item -> getPhoto());
            $statement -> bindParam(':city', $item -> getCity());

            $success = $statement -> execute();

            $id = $this -> db -> lastInsertId();
            $data = $this -> getById($id)['result'];

            return [
                'success' => $success,
                'result' => $data
            ];
        }

        public function update($item){

            $statement = $this -> db -> prepare('UPDATE `feedback` SET name=:name,message=:message,photo=:photo,approved=:approved,city=:city WHERE id=:id');

            $statement -> bindParam(':name', $item -> getName());
            $statement -> bindParam(':id', $item -> getId());
            $statement -> bindParam(':message', $item -> getMessage());
            $statement -> bindParam(':photo', $item -> getPhoto());
            $statement -> bindParam(':approved', $item -> isApproved());
            $statement -> bindParam(':city', $item -> getCity());

            $success = $statement -> execute();

            $id = $item -> getId();
            $data = $this -> getById($id)['result'];

            return [
                'success' => $success,
                'result' => $data
            ];
        }

        public function save($item){

            return $item -> isNew() ? $this -> create($item) : $this -> update($item);
        }

        public function delete($id){

            $statement = $this -> db -> prepare('DELETE FROM `feedback` WHERE id=:id');
            $statement -> bindValue(':id', $id);

            $success = $statement -> execute();


            return [ 
                'success' => $success 
            ];
        }

    }