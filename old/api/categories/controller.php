<?
    namespace API\Categories;


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

            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

        public function getAll(Request $request, Response $response){

            $result = $this -> mapper -> getAll();

            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

        public function save(Request $request, Response $response, $arguments){

            $item = new Model($request -> getParsedBody());

            $result = $this -> mapper -> save($item);

            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

        public function delete(Request $request, Response $response, $arguments){

            $result = $this -> mapper -> delete($arguments['id']);

            return $response -> withJson($result, 200, JSON_NUMERIC_CHECK);
        }

    }