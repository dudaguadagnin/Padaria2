// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/database'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import './plugins/bootstrap-vue'
import 'axios'
import store from './store'
import Toasted from 'vue-toasted'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
Vue.use(Toasted)

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAUKGgNUm0kWPcnHHTNeRGaaSKT3BsXI-U',
  authDomain: 'projeto-vuex-364f6.firebaseapp.com',
  databaseURL: 'https://projeto-vuex-364f6-default-rtdb.firebaseio.com',
  projectId: 'projeto-vuex-364f6',
  storageBucket: 'projeto-vuex-364f6.appspot.com',
  messagingSenderId: '968865191230',
  appId: '1:968865191230:web:0f60ac5c495862aa25886f'
}

firebase.initializeApp(firebaseConfig)

// Identificar o usuário conectado
firebase.auth().onAuthStateChanged(user => {
  store.dispatch('dadosUsuario', user)
})

/* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
