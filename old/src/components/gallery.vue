<template>
	
	<section class="block">

		<div class="block__content">
			<h2 class="title">Наши работы 
				(<span
					 @click="isFilterVisible = false" 
					 :class="['filter__trigger', !isFilterVisible ? 'filter__trigger_active_yes' : '']">все</span>
				 или 
				<span 
					@click="isFilterVisible = true" 
					:class="['filter__trigger', isFilterVisible ? 'filter__trigger_active_yes' : '']">по категориям</span>):
			</h2>

			<ul class="filter" v-if="isFilterVisible">
				<li  v-for="category in categories"
					:class="['filter__item', activeCategoryId === category.id ? 'filter__item--active' : '']"
					@click="activeCategoryId = category.id">

					{{ category.name }}

				</li>
			</ul>

			<!-- <transition-group name="zoom" tag="ul" class="gallery"> -->
			<ul class="gallery">
				<li class="gallery__item" v-for="(item, index) in activeImages" :key="item">
					<img class="galllery__image" :src="item.path" alt="" @click="openPopup(index)" />
				</li>
			</ul>
			<!-- </transition-group> -->

			<div class="gallery-popup" v-if="isPopupVisible">
				<img class="gallery-popup__image" :src="activeImage.path" />
				<p class="gallery-popup__description">Категория: {{ getCategoryNameById(activeImage.categoryId) }}</p>
				<div class="gallery-popup__controls">
					<span class="gallery-popup__control gallery-popup__control_type_prev" @click="prevImage">&laquo;</span>
					<span class="gallery-popup__control gallery-popup__control_type_close"  @click="closePopup">&times;</span>
					<span class="gallery-popup__control gallery-popup__control_type_next" @click="nextImage">&raquo;</span>
				</div>
			</div>
		</div>

	</section>

</template>

<script>

	import {find, last, findIndex} from 'lodash/fp'
	
	export default {

		data(){
			return {
				isFilterVisible: true,
				isPopupVisible: false,
				activeImageIndex: 0,
				activeCategoryId: 1,
			}
		},

		computed : {
			activeImage(){
				return this.activeImages[this.activeImageIndex]//find(['id', this.activeImageId], this.items)
			},
			categories() {
				return this.$store.state.categories
			},
			items() {
				return this.$store.state.images
			},
			activeImages(){ 
				const items = this.items.filter(item => item.categoryId === this.activeCategoryId)
				return this.isFilterVisible ? items : this.items
			},
		},

		methods : {
			getCategoryNameById(categoryId) {
				const category = find(['id', categoryId], this.categories)
				return category.name
			},
			prevImage(){
				let prevIndex = this.activeImageIndex - 1

				if (prevIndex < 0) {
					prevIndex = this.activeImages.length - 1
				}

				this.activeImageIndex = prevIndex
			},
			nextImage(){
				let nextIndex = this.activeImageIndex + 1

				if (nextIndex >= this.activeImages.length) {
					nextIndex = 0
				}

				this.activeImageIndex = nextIndex
			},
			openPopup(imageIndex){
				this.activeImageIndex = imageIndex
				this.isPopupVisible = true
			},
			closePopup(){
				this.isPopupVisible = false
			},
		},
	}

</script>