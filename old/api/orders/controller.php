<?
    namespace API\Orders;

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    use \Interop\Container\ContainerInterface as ContainerInterface;

    class Controller {

        protected $ci;

        public function __construct(ContainerInterface $ci){
            $this -> ci = $ci;
        }

        public function send(Request $request, Response $response) {

            $username = 'hello@arhpotolki.info';
            $password = 'tdrTH3J4';

            /**
                Array ( 
                    [name] => сергей 
                    [phone] => 89115667053 
                    [calculations] => Array ( 
                        [price] => 3900 
                        [area] => 2 
                        [lightSourcesCount] => 2 
                        [color] => #ffffff 
                        [material] => Глянцевый 
                    ) 
                )
            */
            $parameters = $request -> getParsedBody();


            if  (!empty($parameters['name']) && !empty($parameters['phone'])) {

                $calcs = 'Рассчеты: ';

                if (!empty($parameters['calculations'])) {
                    $c = $parameters['calculations'];

                    $calcs .=
                        $c['area'] . ' x ' . 
                        $c['color'] . ' ~ ' . $c['material'] . 
                        ' + (' . $c['lightSourcesCount'] . ' x 300) = ' . 
                        $c['price'];
                } else {
                    $calcs .= ' - ';
                }

                $body = 
                    sprintf(
                        "Отправленo с сайта (%s)\n\n%s %s\n\n%s\n\nraw data:\n%s", 
                        date('d.m.Y H:i:s'),
                        $parameters['name'],
                        $parameters['phone'],
                        $calcs,
                        json_encode($parameters, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
                    );


                $mailer = new \PHPMailer();

                $mailer -> SMTPDebug = false;
                $mailer -> CharSet = 'UTF-8';
                $mailer -> IsSMTP();
                $mailer -> Host = 'smtp.yandex.ru';
                $mailer -> Port = 465;
                $mailer -> SMTPAuth = true;
                $mailer -> SMTPSecure = 'ssl';

                $mailer -> Username = $username;
                $mailer -> Password = $password;

                $mailer -> SetFrom('hello@arhpotolki.info', 'arhpotolki.info');
                $mailer -> AddAddress('hello@arhpotolki.info');
                $mailer -> Subject = 'Отправлено с сайта';
                $mailer -> Body = $body;

                $result = [ 'result' => $mailer -> Send(), 'message' => $body ];

            } else {

                $result = ['result' => false];

            }

            return $response -> withJson($result);

        }

        public function getById(Request $request, Response $response, $arguments){

            $result = $this -> mapper -> getById($arguments['id']);

            return $response -> withJson($result);
        }

    }