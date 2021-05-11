<template>
  <NavbarLight>
    <AncoraLinkPadrao class="navbar-brand" :href="'/'">
      <img src="https://image.flaticon.com/icons/png/512/1552/1552629.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Padaria
    </AncoraLinkPadrao>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <LiEstiloPadrao>
          <AncoraLinkPadrao :href="'/cardapio'">Cardapio</AncoraLinkPadrao>
        </LiEstiloPadrao>

        <LiEstiloPadrao>
          <AncoraLinkPadrao :href="'/cadastro-de-produtos'" v-if="usuario.logado">Cadastrar Produtos</AncoraLinkPadrao>
        </LiEstiloPadrao>

        <LiEstiloPadrao class="dropdown" v-if="usuario.logado">
          <AncoraLinkPadrao class="dropdown-toggle" :href="'/'" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{usuario.data.email}}
          </AncoraLinkPadrao>
          <dropdown>
            <a class="dropdown-item" @click.prevent="sair">sair</a>
          </dropdown>
        </LiEstiloPadrao>
      </ul>
        <LiEstiloPadrao class="navbar-nav">
          <AncoraLinkPadrao :href="'/cadastro'" v-if="!usuario.logado">Cadastre-se</AncoraLinkPadrao>
        </LiEstiloPadrao>

        <LiEstiloPadrao class="navbar-nav">
          <AncoraLinkPadrao :href="'/login'" v-if="!usuario.logado">Login</AncoraLinkPadrao>
        </LiEstiloPadrao>
    </div>
  </NavbarLight>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import AncoraLinkPadrao from '../atomos/links/AncoraLinkPadrao'
import LiEstiloPadrao from '../atomos/links/LiEstiloPadrao'
import NavbarLight from '../atomos/NavbarLight'
import Dropdown from '../atomos/links/Dropdown'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      usuario: 'usuario'
    })
  },
  methods: {
    sair () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
        this.$toasted.info('Você se desconectou').goAway(5000)
      })
    }
  },
  components: {
    AncoraLinkPadrao,
    LiEstiloPadrao,
    NavbarLight,
    Dropdown
  }
}
</script>
