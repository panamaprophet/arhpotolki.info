<?
    namespace API\Feedback;


    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;


    class Controller {

        protected $ci;
        protected $mapper;


        public function __construct(ContainerInterface $ci){
            $this -> ci = $ci;
            $this -> mapper = new Mapper($this -> ci -> db);
        }

        public function getById(Request $request, Response $response, $arguments){

            $result = $this -> mapper -> getById($arguments['id']);

            return $response -> withJson($result);
        }

        public function getAll(Request $request, Response $response){

            $params = $request -> getQueryParams();

            $returnAll = array_key_exists('all', $params) && !empty($params['all']);

            // var_dump($params['all']);

            $result = $this -> mapper -> getAll($returnAll);

            return $response -> withJson($result);
        }

        public function save(Request $request, Response $response, $arguments){

            $fields = $request -> getParsedBody();

            $targetPath = $this -> ci -> settings['uploadDir'];

            if (array_key_exists('photo', $fields) && !array_key_exists('id', $fields)) {
                
                $image = $fields['photo'];

                $tmp = explode(';', $image);

                $type = array_pop(explode('/', $tmp[0]));                   // file type used for extension
                $data = base64_decode(array_pop(explode(',', $tmp[1])));    // image data

                $fileName =  md5( $data . time() ) . '.' . $type;

                if (file_put_contents($targetPath . $fileName, $data)) {
                    $fields['photo'] = $fileName;
                }

            } else if (!empty($fields['photo'])) {

                $fields['photo'] = basename($fields['photo']);

            }

            $item = new Model($fields);

            $result = $this -> mapper -> save($item);

            //$prefix = $this -> ci['settings']['uploadWeb'];

            $result['result']['photo'] = $result['result']['photo'];

            return $response -> withJson($result);

        }

        public function delete(Request $request, Response $response, $arguments){

            $result = $this -> mapper -> delete($arguments['id']);

            return $response -> withJson($result);
        }

    }