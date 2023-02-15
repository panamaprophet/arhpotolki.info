<template>

    <div class="block feedback">

        <div class="label__text">Отзывы</div>

        <ul class="block__list responses">
            <li class="responses__response response" v-for="response in responses">
                
                <div class="response__photo">
                    <img :src="('/assets/uploads/' + response.photo)" class="response__photo-image" v-if="response.photo" />
                </div>

                <div class="response__fields">
                    <p class="response__date">{{ response.date }}</p>
                    <p class="response__name"><input type="text" class="input-field" v-model="response.name" placeholder="Имя" /></p>
                    <p class="response__name"><input type="text" class="input-field" v-model="response.city"  placeholder="Город" /></p>
                    <p class="response__text"><textarea class="input-field"  placeholder="Отзыв" v-model="response.message"></textarea></p>
                </div>

                <div class="response__controls">
                    <button class="button button--submit button--condensed" @click="toggleResponse(response)">{{ !response.approved ? 'Опубликовать' : 'Отменить публикацию' }}</button>
                    <button class="button button--delete button--condensed" @click="deleteResponse(response)">Удалить</button>
                </div>
            </li>
        </ul>

    </div>

</template>

<script>

    export default {
        data(){
            return {

            }
        },

        computed : {
            responses(){
                return this.$store.state.responses
            }
        },

        methods : {
            toggleResponse(response){

                response.approved = !Boolean(response.approved)

                this.$store.dispatch('updateResponse', response)
            },
            deleteResponse(response){

                response.approved = false

                this.$store.dispatch('deleteResponse', response)
            }
        }
    }

</script>