
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
require('./bootstrap');
window.Vue = require('vue');


import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

let MyHeader = require('./components/MyHeader.vue');
let MyFooter = require('./components/MyFooter.vue');

let HomeComponent= require('./components/Home.vue');
let AboutComponent = require('./components/About.vue');




const routes = [
  { path: '/phonebook/home', component: HomeComponent },
  { path: '/phonebook/about', component: AboutComponent },
  { path: '/phonebook/', redirect: '/phonebook/home' }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components: {MyHeader, MyFooter}
});
