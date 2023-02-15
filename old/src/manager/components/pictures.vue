<template>

    <div class="block pictures">

        <div class="label__text">
            Изображения
        </div>

        <ul class="block__list list-images" v-if="images">
            <li v-for="image in images" class="block__list-item">
                
                <img :src="image.path" />
                
                <select v-model="image.categoryId" class="select" @change="saveChanges(image)">
                    <option 
                        v-for="category in categories" 
                        :value="category.id">{{ category.name }}</option>
                </select>
                
                <button @click="removeImage(image)" class="button button--delete">&times;</button>
            
            </li>
        </ul>

        <div class="pictures-add">

            <div class="pictures-add__selector selector" @drop="loadFiles">
                <input class="selector__field" type="file" multiple @change="loadFiles" />
                <div class="selector__meta">
                    <p class="selector__title">Добавить изображения</p>
                    <p class="selector__subtitle">Перетащи файлы сюда или кликни для выбора</p>
                </div>
            </div>

            <div class="block__list list-images" v-if="saveQueue.length > 0">
                <li v-for="item in saveQueue" class="block__list-item">
                    
                    <img :src="item.data" class="list-item__image" />

                    <select v-model="item.categoryId" class="select">
                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                    </select>

                    <button @click="removeImageFromQueue(item)" class="button button--delete">&times;</button>
                </li>
            </div>
        </div>

        <button 
            v-if="saveQueue.length > 0"
            class="button button--submit" 
            @click="saveImages">
                Сохранить
        </button>

    </div>

</template>

<script>

    export default {

        data(){
            return {
                newItemsCount : 0,
                showDialog : false,
                saveQueue : []
            }
        },

        computed : {
            categories(){ return this.$store.state.categories },
            images(){ return this.$store.state.images }
        },

        methods : {

            removeImage(image){
                this.$store.dispatch('removeImage', image)
            },

            removeImageFromQueue(image){
                this.saveQueue.splice(this.saveQueue.indexOf(image), 1)
            },

            addToQueue(image){
                this.saveQueue.push(image)
            },

            saveImages(){
                this.saveQueue.forEach(image => this.$store.dispatch('addImage', image))

                this.saveQueue = []
            },

            saveChanges(image){
                this.$store.dispatch('updateImage', image)
            },

            loadFiles(event){
                
                event.stopPropagation()
                event.preventDefault()

                const files = Array.from(event.dataTransfer ? event.dataTransfer.files : event.currentTarget.files)

                files.forEach(file => {

                    let fileReader = new FileReader()

                    fileReader.onload = () => this.saveQueue.push({ data : fileReader.result, categoryId : 1 })
                    fileReader.readAsDataURL(file)
                })
            }
        }
    }

</script>