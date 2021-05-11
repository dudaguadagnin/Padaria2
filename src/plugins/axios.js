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

export function getProdutos () {
  return axios.get('https://projetovue2-default-rtdb.firebaseio.com/produtos.json?print=pretty')
    .then(response => {
      console.log(response)
      return response.data
    })
}
export function getOfertas () {
  return axios.get('https://projetovue2-default-rtdb.firebaseio.com/ofertas.json?print=pretty')
    .then(response => {
      return response.data
    })
}
