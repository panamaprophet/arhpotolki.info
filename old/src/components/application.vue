<template>

	<div class="application">

		<navigation></navigation>

		<header-layout></header-layout>

		<section class="block description">
			<div class="block__content">
				<p>Компания «<span class="blue">Арх</span><span class="black">Потолки</span>» на про&shy;тя&shy;же&shy;нии шес&shy;ти лет ус&shy;пеш&shy;но за&shy;ни&shy;ма&shy;ет&shy;ся про&shy;да&shy;жей и ус&shy;та&shy;нов&shy;кой на&shy;тяж&shy;ных по&shy;тол&shy;ков, на тер&shy;ри&shy;то&shy;рии всей Ар&shy;хан&shy;гель&shy;ской об&shy;ла&shy;сти.</p>
	        	<p>Сво&shy;им глав&shy;ным дос&shy;ти&shy;же&shy;ни&shy;ем мы счи&shy;та&shy;ем ин&shy;ди&shy;ви&shy;ду&shy;аль&shy;ный под&shy;ход к каж&shy;до&shy;му кли&shy;ен&shy;ту и пер&shy;во&shy;класс&shy;ное ка&shy;чес&shy;тво про&shy;из&shy;во&shy;ди&shy;мой на&shy;ми ра&shy;бо&shy;ты.</p>
	        	<p>Од&shy;но из глав&shy;ных пре&shy;и&shy;му&shy;ществ на&shy;шей ком&shy;па&shy;нии, яв&shy;ля&shy;ет&shy;ся сер&shy;вис&shy;ное об&shy;слу&shy;жи&shy;ва&shy;ние. Ведь на про&shy;тя&shy;же&shy;нии всей га&shy;ра&shy;нтии мы за&shy;бо&shy;тим&shy;ся о каж&shy;дом ус&shy;та&shy;нов&shy;лен&shy;ном на&shy;ми по&shy;тол&shy;ке, будь то бюд&shy;жет&shy;ный или экс&shy;клю&shy;зив&shy;ный по&shy;то&shy;лок.</p>
			</div>
		</section>

		<a name="advantages"></a>
		<advantages></advantages>

		<a name="works"></a>
		<gallery></gallery>

		<section class="block slogan">
			<div class="block__content">
				<p class="slogan__text">Изготовление - от одного дня, монтаж - от двух часов.</p>
			</div>
		</section>

		<a name="calculator"></a>
		<visualizer></visualizer>

		<a name="order"></a>
		<feedback></feedback>

		<how-it-works></how-it-works>

		<certificates></certificates>

		<responses></responses>

		<a name="contacts"></a>
		<yandex-map></yandex-map>

		<footer-layout></footer-layout>

	</div>


</template>

<script>
	
	import headerLayout from './header.vue'
	import footerLayout from './footer.vue'

	import advantages from './advantages.vue'
	import feedback from './feedback.vue'
	import gallery from './gallery.vue'
	import visualizer from './visualizer.vue'
	import responses from './responses.vue'
	import yandexMap from './yandex-map.vue'
	import howItWorks from './how-it-works.vue'
	import certificates from './certificates.vue'

	import navigation from './navigation.vue'

	export default {
		components : {
			navigation,
			headerLayout,
			footerLayout,
			feedback,
			advantages,
			gallery,
			visualizer,
			responses,
			yandexMap,
			howItWorks,
			certificates,
		}
	}


</script>