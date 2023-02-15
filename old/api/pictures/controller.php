<?
    namespace API\Pictures;


    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;


    class Controller {

        protected $ci;
        protected $mapper;

        public function __construct(ContainerInterface $ci){
            $this -> ci = $ci;
            $this -> mapper = new \API\Pictures\Mapper($this -> ci -> db);
        }

        public function getById(Request $request, Response $response, $arguments){

            $result = $this -> mapper -> getById($arguments['id']);

            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

        public function getAll(Request $request, Response $response){

            $result = $this -> mapper -> getAll();

            $prefix = $this -> ci['settings']['uploadWeb'];

            $callback = function($item) use ($prefix) {
                $item['path'] = $prefix . $item['path'];
                return $item;
            };


            $result['result'] = array_map($callback, $result['result']);


            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

        public function save(Request $request, Response $response, $arguments){

            $fields = $request -> getParsedBody();

            $targetPath = $this -> ci -> settings['uploadDir'];

            if (array_key_exists('data', $fields)) {
                
                $image = $fields['data'];

                $tmp = explode(';', $image);

                $type = array_pop(explode('/', $tmp[0]));                   // file type used for extension
                $data = base64_decode(array_pop(explode(',', $tmp[1])));    // image data

                $fileName =  md5( $data . time() ) . '.' . $type;

                if (file_put_contents($targetPath . $fileName, $data)) {
                    $fields['path'] = $fileName;
                }

            } else if (!empty($fields['path'])) {

                $fields['path'] = basename($fields['path']);

            }

            $item = new Model($fields);

            $result = $this -> mapper -> save($item);

            $prefix = $this -> ci['settings']['uploadWeb'];

            $result['result']['path'] = $prefix . $result['result']['path'];

            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

        public function delete(Request $request, Response $response, $arguments){

            $result = $this -> mapper -> delete($arguments['id']);

            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

    }