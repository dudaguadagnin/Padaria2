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
  apiKey: 'AIzaSyDgD9TkOmdpAQCm3mzQciu1-FzN-NfjdCY',
  authDomain: 'projetovue2.firebaseapp.com',
  databaseURL: 'https://projetovue2-default-rtdb.firebaseio.com',
  projectId: 'projetovue2',
  storageBucket: 'projetovue2.appspot.com',
  messagingSenderId: '520214228955',
  appId: '1:520214228955:web:5ef8f6bc214bfa0f8941fe',
  measurementId: 'G-89MG3TD1VE'
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
