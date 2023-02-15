<!DOCTYPE html>
<html lang="ru">

	<head>

		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />

		<title>Архпотолки - натяжные потолки любой сложности!</title>

		<link rel="stylesheet" href="//fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700|PT+Sans:400,700&amp;subset=cyrillic" />
		<link rel="stylesheet" href="assets/build.css?3" />

		<meta property="og:image" content="http://arhpotolki.info/assets/i/logo.jpg" />
		<meta property="og:title" content="АрхПотолки - Натяжные потолки любой сложности" />
		<meta property="og:description" content="Установка натяжных потолков любой сложности в Архангельске и области" />
		<meta property="og:type" content="website" />

		<script>
		<?
			require 'state-serializer.php';
			require 'api/config.php';

			$stateSerialier = new StateSerializer($config['db']);
			$stateJSON = $stateSerialier -> toJSON();

			echo 'window.state = ' . $stateJSON;
		?>
		</script>

	</head>

	<body>

		<div id="app"></div>

		<script src="assets/build.js?3"></script>

		<script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-74887316-1', 'auto');
            ga('send', 'pageview');
		</script>

		<script>
			(function (d, w, c) { 
				(w[c] = w[c] || []).push(function() { 

					try { 

						w.yaCounter31286633 = new Ya.Metrika({ 
							id:31286633, 
							clickmap:true, 
							trackLinks:true, 
							accurateTrackBounce:true 
						}); 

					} catch(e){} 
				}); 	

				var n = d.getElementsByTagName("script")[0], 
				    s = d.createElement("script"), 
				    f = function () { n.parentNode.insertBefore(s, n); }; 
			
				s.type = "text/javascript"; 
				s.async = true; 
				s.src = "https://mc.yandex.ru/metrika/watch.js"; 

				if (w.opera == "[object Opera]") { 
					d.addEventListener("DOMContentLoaded", f, false); 
				} else { 
					f(); 
				} 

			})(document, window, "yandex_metrika_callbacks");
		</script>

		<!-- <script src="//mydashboard.gmcf.ru/cli/cbWidgetLoad.js"></script> -->

		<script>
		var _emv = _emv || [];
		_emv['campaign'] = '0a656cc19f3f5b27324bfa32';

		(function() {
		    var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true;
		    em.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'leadback.ru/js/leadback.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s);
		})();
		</script>
		
	</body>
</html>