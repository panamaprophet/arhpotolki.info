<template>

    <main>

        <nav class="navigation">
            <router-link to="/" class="navigation__link">Основное</router-link>
            <router-link to="/pictures" class="navigation__link">Картинки</router-link>
            <router-link to="/categories" class="navigation__link">Категории</router-link>
            <router-link to="/feedback" class="navigation__link">Отзывы</router-link>
        </nav>

        <router-view></router-view>

    </main>

</template>

<script>

    export default {

    }

</script>