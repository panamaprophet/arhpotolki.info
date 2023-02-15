'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import store from './components/store'
import Application from './components/application.vue'

Vue.use(VueResource)
Vue.use(Vuex)

new Vue({
  	el: '#app',
  	store,
  	render: function (createElement) {
    		return createElement(Application)
  	},
  	created(){
        	this.$store.dispatch('init')
	}
})