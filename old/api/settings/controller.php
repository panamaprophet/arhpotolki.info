<?
    namespace API\Settings;


    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;


    class Controller {

        protected $ci;
        protected $mapper;

        public function __construct(ContainerInterface $ci){
            $this -> ci = $ci;
            $this -> mapper = new \API\Settings\Mapper($this -> ci -> db);
        }

        public function getAll(Request $request, Response $response){

            $result = $this -> mapper -> getAll();

            return $response -> withJson($result);
        }

        public function save(Request $request, Response $response, $arguments){

            $fields = $request -> getParsedBody();

            $model = new Model($fields);

            $result = $this -> mapper -> save($model);

            return $response -> withJson($result);
        }
    }