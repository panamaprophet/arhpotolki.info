<?
    namespace API\Pictures;


    class Model implements \JsonSerializable {

        protected $id;
        protected $categoryId;
        protected $path;

        public function __construct(array $data = []){

            if (!empty($data)){
                $this -> id = $data['id'];
                $this -> categoryId = $data['categoryId'];
                $this -> path = $data['path'];
            }
        }

        public function getId(){
            return $this -> id;
        }

        public function getCategoryId(){
            return $this -> categoryId;
        }

        public function getPath(){
            return $this -> path;
        }

        public function isNew(){
            return empty($this -> id);
        }

        public function jsonSerialize(){
            return [
                'id' => $this -> getId(),
                'categoryId' => $this -> getCategoryId(),
                'path' => $this -> getPath()
            ];
        }
    }