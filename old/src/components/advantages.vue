<template>

	<section class="block block--green advantages">
				
		<div class="block__content">

			<h2 class="title">Только у нас:</h2>

			<ul class="advantages-list">
				<li class="advantages__item" v-for="item in items">
					<div :class="['advantages__item-icon', item.class || '']">
						<img :src="urlPrefix + item.icon" v-if="!item.class"/>
						<span v-else>{{item.content}}</span>
					</div>
					<div class="advantages-item__title">
						{{ item.title }}
					</div>
				</li>
			</ul>

		</div>

	</section>

</template>

<script>
	
	export default {

		data(){
			return {

				urlPrefix : 'assets/i/icons/',

				items : [
					{
						title : 'Работаем по всей Архангельской области',
						icon : 'advantages/1.png'
						// class: 'advantages-item__icon_type_letter',
						// content: 'A'
					},
					{
						title : 'Лучшие цены на полотна Германии',
						icon : 'advantages/4.png'
					},
					{
						title : 'Изготовление от одного дня',
						icon : 'advantages/12.png'
					},
					{
						title : 'Бесплатный выезд замерщика',
						icon : 'advantages/10.png'
					},
					{
						title : 'Пенсионерам цены ещё лучше',
						icon : 'advantages/2.png'
					},
					{
						title : 'Гарантия на потолок 15 лет',
						icon : 'advantages/5.png'
					},
					{
						title : 'Только качественные материалы',
						icon : 'advantages/11.png'
					},
					{
						title : 'Опытные монтажники',
						icon : 'advantages/9.png'
					},
					{
						title : 'Новоселам скидки',
						icon : 'advantages/3.png'
					},
					{
						title : 'Рассрочка 0%',
						icon : 'advantages/6.png'
					},
					{
						title : 'Печать картин на ткани',
						icon : 'advantages/7.png'
					},
					{
						title : 'Работаем с кор­по­ра­тив­ны­ми клиентами',
						icon : 'advantages/8.png'
					}
				] 
			}
		}

	}

</script>