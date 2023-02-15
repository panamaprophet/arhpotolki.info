<template>
	
	<section class="block certificates">
		<div class="block__content">
			<h2 class="title">Сертификаты соответствия:</h2>
			<div class="certificates__list">
				<div v-for="certificate in certificates" class="certificates__list-item">
					<img :src="urlPrefix + certificate.path" />
				</div>
			</div>
		</div>
	</section>

</template>

<script>
	export default {
		data() {
			return {
				urlPrefix : 'assets/i/',

				certificates: [
					{path: 'cert/1.jpg'},
					{path: 'cert/2.jpg'},
					{path: 'cert/3.jpg'},
					{path: 'cert/4.jpg'},
					{path: 'cert/5.jpg'},
					{path: 'cert/6.jpg'},
				]
			}
		}
	}
</script>