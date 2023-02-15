'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

import store from './store/index.js'
import router from './router/index.js'
import Application from './components/application.vue'


const app = new Vue({
    el : '#app',
    store,
    router,
    render(createElement){
        return createElement(Application)
    },
    created(){
        this.$store.dispatch('init')
    }
})