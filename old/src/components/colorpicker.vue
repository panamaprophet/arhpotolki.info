<template>

    <div class="visualizer__colorpicker colorpicker" v-if="colors">

        <div class="colorpicker__colors">
            <div 
                v-for="color in colors" 
                class="colorpicker__color" 
                :style="{ background: color }"
                @click="$emit('ok', color)">
            </div>
        </div>

        <button class="colorpicker__button colorpicker__button--cancel" @click="$emit('cancel')">Отмена</button>

    </div>

</template>

<script>

    export default {
        props : ['colors']
    }


</script>