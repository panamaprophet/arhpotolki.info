<?
    namespace API\Categories;


    class Model implements \JsonSerializable {

        protected $id;
        protected $name;
        protected $active = true;

        public function __construct(array $data = []){

            if (!empty($data)){

                $this -> id = $data['id'];
                $this -> name = $data['name'];

                if (array_key_exists('active', $data)) {
                    $this -> active = $data['active'];
                }
            }
        }

        public function getId(){
            return $this -> id;
        }

        public function getName(){
            return $this -> name;
        }

        public function getActive(){
            return $this -> active;
        }

        public function jsonSerialize(){
            return [
                'id' => $this -> getId(),
                'name' => $this -> getName(),
                'active' => $this -> getActive()
            ];
        }

        public function isNew(){
            return empty($this -> id);
        }
    }