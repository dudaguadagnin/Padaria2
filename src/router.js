import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '@/components/organismos/usuarios/Cadastro'
import PageUser from '@/components/organismos/usuarios/PageUser'
import Home from '@/components/organismos/Home'
import Login from '@/components/organismos/usuarios/Login'
import CadastroProd from '@/components/organismos/produto/CadatroProd'
import Produtos from './components/organismos/produto/Produtos'
Vue.use(VueRouter)

const routes = [
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
    meta: {
      publica: true
    }
  },
  {
    name: 'pageuser',
    path: '/page-user',
    component: PageUser
  },
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/cadastro-de-produtos',
    component: CadastroProd
  },
  {
    path: '/cardapio',
    component: Produtos
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
