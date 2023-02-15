<template>
	
	<section class="block block--full--height">

		<div class="block__content">

			<h2 class="title">Рассчитать стоимость:</h2>

			<div class="visualizer" id="visualizer">

				<div class="visualizer__view">

					<div class="visualizer__view-preview">

						<div class="visualizer__view-preview__background">

							<img 
								src="assets/i/visualizer/walls.png" 
								class="visualizer__view-preview__image" />

							<img 
								src="assets/i/visualizer/gloss.png" 
								:style="{ opacity : ceilOpacity }"
								class="visualizer__view-preview__image-head" />
							
							<img 
								v-if="material === 3" 
								src="assets/i/visualizer/sky-bg.png" 
								class="visualizer__view-preview__image-clouds" />

						</div>

						<div class="visualizer__view-preview__mask">

							<svg 
								preserveAspectRatio="xMidYMid meet" 
								viewBox="0 0 842 574"
								version="1.1">

								<polygon points="730,95,766,0,0,0,0,20,282,134" :fill="colorCeil"></polygon>
								<polygon points="0,16,284,124,726,90,762,0,842,0,842,432,722,380,276,350,0,424,0,246" :fill="colorWalls"></polygon>
								<polygon points="275,350,722,380,842,432,842,574,0,574,0,424" :fill="colorFloor"></polygon>
							</svg>

						</div>
					</div>

					<div class="settings__group">

						<label class="settings__group-item settings__group-item_color_block">
							<span class="settings__group-item-title">Цвет:</span>

							<div class="settings__buttons">
								<div 
									class="settings__button" 
									:style="{ background : colorCeil }" 
									@click="colorPicker('ceil')">
										Потолок
								</div>

								<div 
									class="settings__button" 
									:style="{ background : colorWalls }" 
									@click="colorPicker('walls')">
										Стены
								</div>

								<div 
									class="settings__button" 
									:style="{ background : colorFloor }"
									@click="colorPicker('floor')">
										Пол
								</div>
							</div>
						</label>

						<label class="settings__group-item">
							<span class="settings__group-item-title">Материал:</span>
							<div class="settings__buttons">
								<div 
									v-for="(title, key) in materials" 
									:class="['settings__button', key === material ? 'settings__button--active' : '']" 
									@click="material = key">
								
									{{ title }}
								
								</div>
							</div>
						</label>

						<label class="settings__group-item">
							<span class="settings__group-item-title">Класс:</span>
							<div class="settings__buttons">
								<div 
									v-for="(title, key) in materialClasses" 
									:class="['settings__button', key === materialClass ? 'settings__button--active' : '']" 
									@click="materialClass = key">
								
									{{ title }}
								
								</div>
							</div>
						</label>


						<label class="settings__group-item">
							<span class="settings__group-item-title">Площадь, м²:</span>
							<input type="number" class="input-field" v-model="area" />
						</label>

						<label class="settings__group-item">
							<span class="settings__group-item-title">Количество светильников:</span>
							<input type="number" class="input-field" v-model="lightCount" />
						</label>

						<label class="settings__group-item">
							<span class="settings__group-item-title">Цена:</span>
							<input type="text" placeholder="Цена в рублях" class="input-field" readonly :value="price | formatPrice" />
						</label>

						<label class="settings__group-item">
							<span class="settings__group-item-title">Скидка:</span>
							<input type="text" placeholder="Скидка" class="input-field" readonly :value="currentDiscount + '%'" />
						</label>

						<label class="settings__group-item">
							<span class="settings__group-item-title">Цена со скидкой:</span>
							<input type="text" placeholder="Цена в рублях" class="input-field" readonly :value="discountPrice | formatPrice" />
						</label>

						<p class="settings__notice">Итоговая цена является достаточно точной, но все-таки приблизительной.</p>
						<p class="settings__notice">При оплате 50% стоимости заказа доступна рассрочка на три месяца с ежемесячным платежом {{ installments | formatPrice }}</p>
					</div>

					<color-picker 
						v-if="modal" 
						:colors="colors[modalKey]" 
						@ok="setColor"
						@cancel="modal = false">
					</color-picker>

				</div>

			</div>

		</div>
	</section>

</template>

<script>
	import {max, keys, map, flow, find, sortBy} from 'lodash/fp'
	import colorPicker from './colorpicker.vue'

	const getMaxKey = flow([keys, map(Number), max])
	const getDiscountKeys = flow(keys, map(Number), sortBy([]))
	
	export default {

		components : {
			colorPicker
		},

		data(){
			return {
				colors : {
					ceil : [
						"#ffffff",
						"#dbdfe8","#d5dde8","#b8cedb",
						"#c0dee6","#85afc7","#527fb8",
						"#241bac","#6cb5e2","#3a9bc5",
						"#2769ca","#1b197c","#1b1263",
						"#262a35","#dad9e7","#aaaeb9",
						"#b4a0dd","#c9b6ee","#a78dce",
						"#42297c","#f6f8f7","#626c6e",
						"#0a1010","#98549d","#752d6f",
						"#711234","#eceeed","#f1eada",
						"#e1ddd4","#dbdad8","#c7c3c2",
						"#c2cacd","#a0a5a9","#63747b",
						"#ebc0d4","#db3b23","#cd3728",
						"#b31925","#921825","#5a1122",
						"#d57090","#e874bd","#cd5b99",
						"#c73485","#a32048","#271315",
						"#d3a4b8","#8a2f2c","#9a6150",
						"#8a4929","#382217","#ece5d2",
						"#edc4ac","#e9d3ad","#d58a22",
						"#b47733","#58282f","#211618",
						"#ece2e0","#efe6e6","#eeccdd",
						"#dca7ad","#ef9d88","#bc7071",
						"#e97732","#c64020","#d53b36",
						"#dcb95e","#cd8c0f","#cf6622",
						"#f6f3d4","#f6f098","#eeec36",
						"#f6f161","#f5e344","#f4c223",
						"#ececea","#eef2eb","#5db27d",
						"#97d36e","#44bd54","#18a054",
						"#329e7a","#1f6f5b","#22534e",
						"#243b31","#88ddeb","#48afbf",
						"#288d95","#d2c9ab","#ccd1ac",
						"#a6ae41","#93b190","#5e6934",
						"#e0eaeb","#d4e4e3","#bcd9e4",
						"#a0b9ba","#3a97b7","#2e515e"
					],
					walls : [
						"#ffffff",
						"#d2b6ac","#ee9faa","#dda880",
						"#dda584","#a5c8db","#adcedf",
						"#c5dfe0","#c5dfde","#f4e3d3",
						"#f3e2d2","#eae5c5","#e6e6c4",
						"#f7e9c6","#f6e8c5","#1b1263",
						"#b4a0dd","#626c6e","#0a1010",
						"#752d6f","#711234","#e874bd",
						"#382217","#44bd54","#a6ae41"
					],
					floor : [
						"#ffffff",
						"#d2b6ac","#ee9faa","#dda880",
						"#dda584","#a5c8db","#adcedf",
						"#c5dfe0","#c5dfde","#f4e3d3",
						"#f3e2d2","#eae5c5","#e6e6c4",
						"#f7e9c6","#f6e8c5","#1b1263",
						"#b4a0dd","#626c6e","#0a1010",
						"#752d6f","#711234","#e874bd",
						"#382217","#44bd54","#a6ae41"
					]
				},
				colorCeil : '#ffffff',//'#607D8B',
				colorWalls : '#a5c8db',
				colorFloor : '#626c6e',

				materials : [
					'Глянец',
					'Матовый',
					'Сатин',
					'Облака'
				],

				materialClasses: [
					'Эконом (КНР)',
					'Премиум (Германия)'
				],

				modal : false,
				modalKey : '',
				modalActiveKey : '',

				area : null,
				lightCount: null,
				material : 0,
				materialClass: 1,
			}
		},

		computed : {
			settings(){
				return this.$store.state.settings
			},

			priceAdditional(){
				return find(['key', 'priceAdditional'], this.settings).value || 0
			},

			priceLightAdditional(){
				return find(['key', 'priceLightAdditional'], this.settings).value || 0
			},

			priceColorAdditional(){
				return find(['key', 'priceColorAdditional'], this.settings).value || 0
			},

			prices(){
				const price = find(['key', 'price'], this.settings)

				return JSON.parse(price.value)
			},

			ceilOpacity(){ 
				return (this.material === 0) ? 1 : (this.material === 1 ? 0 : 0.4)
			},

			discountFlexible(){
				const discountFlexible = find(['key', 'discountFlexible'], this.settings).value || 0

				return JSON.parse(discountFlexible)
			},

			price(){

				let price = 0

				const area = Math.ceil(this.area) //20 - 18 + 2

				if (area) {

					price = this.prices[area]

					if (!price) {
						const maxArea = getMaxKey(this.prices)
						const maxAreaPrice = Number(this.prices[maxArea][this.materialClass]) // (11990 + 600 * 2 ) * 1.5

						price = maxAreaPrice + (area - maxArea) * this.priceAdditional
					} else {
						price = Number(price[this.materialClass])
					}


				}

				const isCurrentColorWhite = this.colorCeil.toLowerCase() === '#ffffff'
				const additionalPriceByColor = isCurrentColorWhite ? 0 : (this.priceColorAdditional * area)
				const additionalPriceByLight = this.lightCount > 1 ? (this.lightCount * this.priceLightAdditional) : 0
				const totalPrice = this.material === 3 ? price * 1.5 : price + additionalPriceByColor
 
				return totalPrice + additionalPriceByLight
			},

			currentDiscount() {
				const area = Math.ceil(this.area)
				const discountKeys = getDiscountKeys(this.discountFlexible)

				let discount = 0

				for (var i = discountKeys.length - 1; i >= 0; i--) {
					if (area > discountKeys[i]) {
						discount = this.discountFlexible[discountKeys[i]][this.materialClass]
						break
					}
				}

				return discount
			},

			discountPrice() {
				return this.price - (this.price / 100 * this.currentDiscount)
			},

			installments(){
				return ((this.discountPrice / 2) / 3).toFixed(2)
			}
		},

		watch: {
			price() {
				this.saveParameters()
			},

			material() {
				this.saveParameters()
			}
		},

		filters : {
			formatPrice(value){
				return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ₽';
			}
		},

		methods : {

			saveParameters(){
				const parameters = {
					price: this.price,
					area: this.area,
					lightSourcesCount: this.lightCount,
					color: this.colorCeil,
					material: this.materials[this.material]
				}

				this.$store.dispatch('orderUpdate', { order: parameters })
			},

			colorPicker(sourceKey){

				let colors = this.colors[sourceKey]

				if (colors && colors.length > 0){
					this.modalKey = sourceKey
					this.modalActiveKey = 'color' + sourceKey.charAt(0).toUpperCase() + sourceKey.slice(1)
					this.modal = true
				}
			},

			setColor(color){

				this[this.modalActiveKey] ? (this[this.modalActiveKey] = color) : void 0;

				this.modal = false
				this.modalKey = false
				this.modalActiveKey = false
			}

		}
		
	}

</script>