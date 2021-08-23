import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '@/components/organismos/usuarios/Cadastro'
import PageUser from '@/components/organismos/usuarios/PageUser'
import Home from '@/components/organismos/Home'
import Sobre from '@/components/organismos/Sobre'
import Login from '@/components/organismos/usuarios/Login'
import CadastroProd from '@/components/organismos/produto/CadatroProd'
import Doces from './components/organismos/produto/Doces'
import Pratos from './components/organismos/produto/Pratos'
import Salgados from './components/organismos/produto/Salgados'
import Cardapio from './components/organismos/produto/Cardapio'
Vue.use(VueRouter)

const routes = [
  { path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
    meta: {
      publica: true
    }
  },

  { name: 'pageuser',
    path: '/page-user',
    component: PageUser
  },

  { name: 'home',
    path: '/',
    component: Home
  },

  { path: '/login',
    component: Login
  },

  { path: '/cadastro-de-produtos',
    component: CadastroProd
  },
  { path: '/cardapio',
    component: Cardapio
  },

  { path: '/doces',
    component: Doces
  },

  { path: '/pratos',
    component: Pratos
  },

  { path: '/salgados',
    component: Salgados
  },
  { path: '/sobre',
    component: Sobre
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
