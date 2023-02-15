<?
    namespace API\Feedback;


    class Model implements \JsonSerializable {

        protected $id;
        protected $name;
        protected $message;
        protected $photo;
        protected $date;
        protected $approved;
        protected $city;

        public function __construct(array $data = []){
            if (!empty($data)){
                $this -> id = $data['id'];
                $this -> name = $data['name'];
                $this -> message = $data['message'];
                $this -> photo = basename($data['photo']);
                $this -> date = $data['date'];
                $this -> approved = $data['approved'] ? 1 : 0;
                $this -> city = $data['city'];

                if (!$this -> photo) {
                    $this -> photo = '';
                }
            }
        }

        public function getId(){
            return $this -> id;
        }

        public function getName(){
            return $this -> name;
        }

        public function getMessage(){
            return $this -> message;
        }

        public function getPhoto(){
            return $this -> photo;
        }

        public function getDate(){
            return $this -> date;
        }

        public function getCity(){
            return $this -> city;
        }

        public function jsonSerialize(){
            return [
                'id' => $this -> getId(),
                'name' => $this -> getName(),
                'message' => $this -> getMessage(),
                'photo' => $this -> getPhoto(),
                'date' => $this -> getDate(),
                'approved' => $this -> isApproved(),
                'city' => $this -> getCity()
            ];
        }

        public function isNew(){
            return empty($this -> id);
        }

        public function isApproved(){
            return $this -> approved;
        }

        public function approve(){
            $this -> approved = true;
        }
    }