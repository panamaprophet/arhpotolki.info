<?
    namespace API\Settings;


    class Model implements \JsonSerializable {

        protected $key;
        protected $value;
        protected $title;
        protected $createdOn;
        protected $updatedOn;

        public function __construct(array $data = []){

            if (!empty($data)){
                $this -> key = $data['key'];
                $this -> value = $data['value'];

                if (array_key_exists('title', $data)) {
                   $this -> title = $data['title'];
                }

                if (array_key_exists('createdOn', $data)) {
                    $this -> createdOn = $data['createdOn'];
                }

                if (array_key_exists('updatedOn', $data)) {
                    $this -> updatedOn = $data['updatedOn'];
                }
            }
        }

        public function getKey(){
            return $this -> key;
        }

        public function getValue(){
            return $this -> value;
        }

        public function getCreatedOn(){
            return $this -> createdOn;
        }

        public function getUpdatedOn(){
            return $this -> updatedOn;
        }

        public function getTitle(){
            return $this -> title;
        }

        public function jsonSerialize(){
            return [
                'key' => $this -> getKey(),
                'value' => $this -> getValue(),
                'title' => $this -> getTitle(),
                'createdOn' => $this -> getCreatedOn(),
                'updatedOn' => $this -> getUpdatedOn(),
            ];
        }
    }