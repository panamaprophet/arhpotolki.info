<template>
	
	<section class="block feedback">

		<div class="block__content">

			<h2 class="title title--condensed">Оставить заявку:</h2>

			<form action="/gate/" method="POST" class="feedback-form">
				<fieldset class="feedback-form__container">

					<input 
						v-model="name"
						type="text" 
						class="feedback-form__field"  
						placeholder="Имя" 
						minlength="2" 
					/>

					<input 
						v-model="phone"
						type="text" 
						class="feedback-form__field" 
						placeholder="Телефон" 
						maxlength="16" 
					/>

					<button 
						class="feedback-form__button" 
						@click.prevent="send" 
						:disabled="!isValid">
							{{ buttonStateAsText }}
					</button>

					<p class="feedback__annotation">Мы гарантируем конфиденциальность данных оставленных на сайте.</p>

				</fieldset>
			</form>

		</div>	

	</section>
	
</template>

<script>
	
	export default {

		data(){
			return {
				name : '',
				phone : '',
				buttonStateIndex: 0,
				buttonStates: ['Отправить', 'Отправка', 'Отправлено']
			}
		},

		computed : {
			isValid(){
				const isPhoneContainsDigits = this.phone.match(/\d/g)
				const digitsCountInPhone = isPhoneContainsDigits ? isPhoneContainsDigits.length : 0

				const checkName = this.name && this.name.length > 3
				const checkPhone = this.phone && digitsCountInPhone >= 5

				return checkName && checkPhone
			},

			buttonStateAsText(){
				return this.buttonStates[this.buttonStateIndex]
			}
		},

		methods : {
			send(){ 
				const parameters = {
					name : this.name,
					phone : this.phone,
					calculations: this.$store.state.order,
				}

				this.buttonStateIndex = 1

				this
					.$http
					.post('api/orders/send', parameters)
					.then(this.onSendSuccess.bind(this))
			},

			onSendSuccess(response){
				this.buttonStateIndex = 2
				setTimeout(() => this.buttonStateIndex = 0, 3000)
			}

		}

	}

</script>