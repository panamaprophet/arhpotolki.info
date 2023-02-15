<template>

    <transition name="slide" appear>

        <div v-if="visible" class="navigation">

        <div class="navigation__close-container">
            <div class="navigation__close-button" @click.stop="visible=false">&times;</div>
        </div>

            <ul class="navigation__items">
                <li v-for="item in items" class="navigation__item">
                    <a 
                        class="navigation__link" 
                        :href="item.url" 
                        @click.stop="visible=false">

                            {{ item.title }}

                    </a>
                </li>
            </ul>

        </div>

        <div 
            v-else 
            class="navigation-trigger" 
            @click.stop="visible=true">

                <svg 
                    height="32px" 
                    version="1.1" 
                    viewBox="0 0 32 32" 
                    width="32px" 
                    xml:space="preserve" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path class="navigation__icon" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                </svg>

        </div>

    </transition>

</template>

<script>

    export default {

        data(){
            return {
                visible : false,

                items : [
                    {
                        title : 'Преимущества',
                        url : '#advantages'
                    },
                    {
                        title : 'Наши работы',
                        url : '#works'
                    },
                    {
                        title : 'Расчёт стоимости',
                        url : '#calculator'
                    }
                    ,{
                        title : 'Оставить заявку',
                        url : '#order'
                    }
                    ,{
                        title : 'Контакты',
                        url : '#contacts'
                    }
                ]
            }
        }

    }

</script>