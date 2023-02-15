<template>
	
	<section class="block contacts">

		<div class="block__content">

			<div class="contacts__address address">
				<p class="address__title">АрхПотолки</p>
				<p class="address__place">город Архангельск, ул. Беломорской флотилии 2-3-33</p>
				<p class="address__phone">+7 8182 47-67-24</p>
			</div>

			<p><a target="_blank" href="http://vk.com/arhpotolki">vk.com/arhpotolki</a></p>
			<p><a target="_blank" href="mailto:hello@arhpotolki.info">hello@arhpotolki.info</a></p>

			<div class="contacts__vk-widget" id="vk_groups"></div>

			<div 
				class="yashare-auto-init" 
				data-yashareL10n="ru" 
				data-yashareType="small" 
				data-yashareQuickServices="vkontakte,facebook,twitter,odnoklassniki,moimir" 
				data-yashareTheme="counter">
			</div>

			<p class="contacts__copyright">Copyright &copy; АрхПотолки, 2014 - {{ currentYear }} | <a href="/terms.html">Зашита персональной информации</a></p>

		</div>

	</section>
	
</template>

<script>
	
	export default {
		computed : {
			currentYear(){ 
				return (new Date()).getFullYear() 
			}
		},

		methods: {
			initVKWidget(){
				VK.Widgets.Group("vk_groups", {
					mode: 3, 
					color3: 'F7A136'
				}, 53659209)
			}
		},

		mounted() {
			const script = document.createElement('script')
			script.src = '//vk.com/js/api/openapi.js?145'
			script.onload = this.initVKWidget
			this.$el.append(script)
		}
	}

</script>