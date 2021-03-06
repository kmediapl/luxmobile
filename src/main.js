// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'babel-polyfill'
import Toasted from 'vue-toasted';
Vue.use(Toasted)
Vue.use(Vuetify)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if(!localStorage.getItem('token')){
   
//     next( this.$router.push('/'));
//   }
//   next();
  
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
