<template>

    <div class="block categories">

        <div class="label__text">
            Категории
        </div>

        <ul class="block__list block__list--categories" v-if="items && items.length > 0">
            <li v-for="item in items" class="categories__category">
                <input type="checkbox" class="input-checkbox" :value="item.id" v-model="selected" />
                <input :tabindex="$index" type="text" class="input-field" v-model="item.name" @change="saveChanges(item)" />
            </li>
        </ul>

        <button 
            @click="removeSelected" 
            v-if="selected.length > 0" 
            class="button button--delete">
                Удалить
        </button>

        <div class="categories__add">

            <label>

                <span class="label__text">Добавить категорию:</span>

            <input 
                type="text" 
                class="input-field" 
                v-model="categoryName" 
                placeholder="Название категории" 
            />

            </label>
            
            <button 
                v-if="isCategoryNameValid"
                @click="addCategory" 
                class="button button--submit">
                    Добавить
            </button>
        </div>

    </div>

</template>

<script>

    export default {

        data(){
            return {
                selected : [],
                categoryName : ''
            }
        },

        computed : {
            items(){
                return this.$store.state.categories
            },
            isCategoryNameValid(){
                return this.categoryName.trim().length > 0
            }
        },

        methods : {
            addCategory(){

                let category = this.categoryName.trim()

                if (category.length > 0) {
                    this.$store.dispatch('addCategory', { name : category })
                }
            },
            removeSelected(){
                this
                    .items
                    .filter(item => this.selected.includes(item.id))
                    .forEach(item => this.$store.dispatch('removeCategory', item))
            },
            saveChanges(item){
                this.$store.dispatch('updateCategory', item);
            }
        },

    }

</script>