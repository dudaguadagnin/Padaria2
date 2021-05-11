<template>
  <div>
    <TituloPrincipal>Bem vindo usuario</TituloPrincipal>
    <div class="centralizado">
      <TituloSecundario>O que você deseja fazer primeiro?</TituloSecundario>
      <AncoraLinkPadrao class="estilo-dos-links estilo-em-hover" :href="'/cadastro-de-produtos'">Cadastrar novos produtos</AncoraLinkPadrao>
      <AncoraLinkPadrao class="estilo-dos-links estilo-em-hover" :href="'/cardapio'">Conferir cardapio</AncoraLinkPadrao>
      <AncoraLinkPadrao class="estilo-dos-links estilo-em-hover" :href="'/'">Conferir ofertas</AncoraLinkPadrao>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TituloPrincipal from '../../atomos/titulos/TituloPrincipal'
import TituloSecundario from '../../atomos/titulos/TituloSecundario'
import AncoraLinkPadrao from '../../atomos/links/AncoraLinkPadrao'
import LiEstiloPadrao from '../../atomos/links/LiEstiloPadrao'
export default {
  name: 'pageuser',

  computed: {
  // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user',
      quantidade: 'quantidade'
    })

  },
  components: {
    TituloPrincipal,
    TituloSecundario,
    AncoraLinkPadrao,
    LiEstiloPadrao
  }
}
</script>
<style scoped>
.centralizado{
  margin-top: 5rem;
  text-align: center;
}
.estilo-dos-links{
  color: rgb(129, 129, 129);
}
.estilo-em-hover:hover{
  color: rgb(126, 22, 22);
  font-weight: bolder
}
</style>
