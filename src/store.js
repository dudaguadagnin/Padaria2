import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {
      logado: false, // status no login
      data: null // info do usuario
    },
    quantidadeCompra: {},
    quantidadeEstoque: {}
  },
  getters: { // acessa dados armazenados em state
    usuario (state) {
      return state.usuario
    },
    quantidade (state) {
      return state.quantidadeCompra
    },
    quantidadeEstoque (state) {
      return state.quantidadeEstoque
    }
  },
  mutations: { // permite fazer alteraçoes no estado
    logado (state, value) { // valor recebe true quando esta logado e false quando não esta
      state.usuario.logado = value
    },
    infoUser (state, data) { // info do usuario
      state.usuario.data = data
    },

    Compra (state, quantidadedecompra) {
      state.quantidadeEstoque -= quantidadedecompra
    },
    Estoque (state, quantidadeEstoque) {
      state.quantidadeEstoque = quantidadeEstoque
    }
  },
  actions: {
    dadosUsuario ({ commit }, usuario) {
      commit('logado', usuario !== null)
      if (usuario) {
        commit('infoUser', {
          email: usuario.email
        })
      } else {
        commit('infoUser', null)
      }
    },
    teste ({commit}, quantidadeEstoque) {
      commit('Estoque', quantidadeEstoque)
      console.log('quantidade de estoque', quantidadeEstoque)
    },
    ComprarQuantidade ({ commit }, quantidadeCompra) {
      console.log('quantidade de compra', quantidadeCompra)
      commit('Compra', quantidadeCompra)
    }
  }
})
