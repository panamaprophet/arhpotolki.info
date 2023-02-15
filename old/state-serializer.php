<?

	class StateSerializer {
		
		protected $images;
		protected $feedback;
		protected $categories;
		protected $settings;

		protected $db;

		function __construct ($config) {
			$this -> connectToDb($config);
			$this -> fetch();
		}

		private function fetch () {
			$images = $this -> fetchRaw('SELECT `id`, `categoryId`, `path` FROM `pictures`');

 			$callback = function($item) {
                $item['path'] = 'assets/uploads/' . $item['path'];
                return $item;
            };

			$this -> images = array_map($callback, $images);

			$this -> settings = $this -> fetchRaw('SELECT `key`, `value` FROM `settings`');
			$this -> categories = $this -> fetchRaw('SELECT `id`, `name` FROM `categories`');
			$this -> feedback = $this -> fetchRaw('SELECT `name`,`message`,`photo`,`date` FROM `feedback` WHERE `approved`=1');
		}

		private function fetchRaw ($queryString) {
			$query = $this -> db -> prepare($queryString);
			$query -> execute();
			return $query -> fetchAll();
		}

		private function connectToDb ($config) {

 			$connectionString = 'mysql:host=' . $config['hostname'] . ';dbname=' . $config['database'] . ';charset=utf8';

			$this -> db = new PDO(
				$connectionString,
				$config['username'],
				$config['password']
			);

            $this -> db -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this -> db -> setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
		}

		function getState () {
			return [
				'images' => $this -> images,
				'feedback' => $this -> feedback,
				'categories' => $this -> categories,
				'settings' => $this -> settings
			];
		}

		function toJSON () {
			$state = $this -> getState();
			return json_encode($state, JSON_NUMERIC_CHECK); //, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
		}
	}