<template>
	
	<section class="block">

		<div class="block__content">
				
			<h2 class="title">Отзывы:</h2>

			<div class="responses">

				<div class="responses__prev" @click.prevent="prevResponse">&laquo;</div>

				<div class="responses__list">
					<div class="response" v-if="currentItem">

						<div class="response__photo" :style="{ backgroundImage : 'url(' + assetsUrl + currentItem.photo + ')' }">
							<!--<img 
								v-if="currentItem.photo" 
								:src="assetsUrl + currentItem.photo" 
								class="response__photo-image" 
							/>-->
						</div>

						<div class="response__name">{{ currentItem.name }}</div>
						<div class="response__date">{{ currentItem.date }}</div>

						<div class="response__message">
							{{ currentItem.message | cut }}
						</div>
					</div>
				</div>

				<div class="responses__next" @click.prevent="nextResponse">&raquo;</div>

			</div>

			<div class="leave-response">

				<span class="leave-response__title" @click="showForm = !showForm">Оставить отзыв</span>

				<form v-if="showForm" class="leave-response__form response-form">

					<input 
						type="text" 
						class="input-field" 
						v-model="name" 
						placeholder="Пожалуйста, представьтесь" 
					/>

					<input 
						type="text" 
						class="input-field" 
						v-model="city" 
						placeholder="Ваш город" 
					/>

					<input 
						type="text" 
						class="input-field" 
						v-model="message" 
						placeholder="Отзыв (пары предложений будет более чем достаточно)" 
					/>

					<div class="selector" @drag="loadPhoto">
						<input type="file" @change="loadPhoto" class="selector__field"/>
						<div class="selector__meta">
							<div class="selector__title">
								{{ photo ? 'Прикреплено' : 'Прикрепить фото' }}
							</div>
							<div class="selector__subtitle">
								{{ photo ? 'Перетащите файл сюда или нажмите чтобы заменить изображение' : 'Перетащите файл сюда или нажмите для выбора' }}
							</div>
						</div>
					</div>

					<button class="leave-response__submit" @click.prevent="submitForm">{{ buttonStatus }}</button>

				</form>

			</div>

		</div>

	</section>
	
</template>

<script>
	
	export default {
		data(){
			return {
				name : '',
				message : '',
				city: '',
				photo : null,
				showForm : false,
				assetsUrl : 'assets/uploads/',
				currentIndex : 0,
				// buttonStatus : 'Отправить',
				buttonStateId: 0,
				buttonStates: ['Отправить', 'Отправка...', 'Отправлено'],
				cutText : true
			}
		},

		computed : {
			buttonStatus(){
				return this.buttonStates[this.buttonStateId]
			},

			responses() {
				return this.$store.state.feedback
			},

			currentItem(){
				return this.responses[this.currentIndex]
			}
		},

		filters : {
			cut(text){

				const shortText = text.substring(0, 240)

				return (shortText === text) ? text : (shortText + '...')
			}
		},

		methods : {

			loadPhoto(event){

				const file = event.dataTransfer ? event.dataTransfer.files[0] : event.currentTarget.files[0]

				if (file) {

					/**
					 * @TODO: add size check
					 */
					let fileReader = new FileReader()

					fileReader.onload = () => this.photo = fileReader.result
					fileReader.readAsDataURL(file)
				}
			},

			submitForm(){

				const parameters = {
					name : this.name,
					photo : this.photo,
					message : this.message,
					city: this.city
				}

				this.buttonStateId = 1

				this.$http.post('api/feedback.json', parameters).then(() => {

					this.showForm = false
					this.buttonStateId = 2

					setTimeout(() => this.buttonStateId = 0, 3000)

					this.resetForm()
				})
			},

			resetForm () {
				this.name = ''
				this.message = ''
				this.city = ''
				this.photo = null
			},

			prevResponse(){
				const lastIndex = this.responses.length - 1

				if (--this.currentIndex - 1 < 0) {
					this.currentIndex = lastIndex
				}
			},

			nextResponse(){
				const maxIndex = this.responses.length - 1

				if (++this.currentIndex > maxIndex) {
					this.currentIndex = 0
				}
			}
		},
	}

</script>