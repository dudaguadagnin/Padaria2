import axios from 'axios'
import Vue from 'vue'

Vue.use({
  install (vue) {
    // Vue.prototype.$http = axios
    vue.prototype.$http = axios.create({
      baseURL: 'https://projetovue2-default-rtdb.firebaseio.com/',
      headers: {
        data: 'data'
      }
    })
  }
})

export function getOfertas () {
  return axios.get('https://projetovue2-default-rtdb.firebaseio.com/ofertas.json?print=pretty')
    .then(response => {
      return response.data
    })
}
export function getCategorias () {
  return axios.get('https://projetovue2-default-rtdb.firebaseio.com/categoria.json?print=pretty')
    .then(response => {
      return response.data
    })
}
export function getDoces () {
  return axios
    .get('https://projetovue2-default-rtdb.firebaseio.com/doces.json?print=pretty')
    .then(response => {
      return response.data
    })
}
export function getSalgados () {
  return axios
    .get('https://projetovue2-default-rtdb.firebaseio.com/salgados.json?print=pretty')
    .then(response => {
      return response.data
    })
}
export function getPratos () {
  return axios
    .get('https://projetovue2-default-rtdb.firebaseio.com/pratos.json?print=pretty')
    .then(response => {
      return response.data
    })
}
