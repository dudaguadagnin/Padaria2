<template>
  <div id="home">
    <Banner />
    <ul class="links">
      <LiEstiloPadrao class="estilo-links">
        <AncoraLinkPadrao class="estilo-ancora" :href="'/cardapio'">
          <img src="https://i.pinimg.com/originals/7b/28/90/7b28903863369080b1c424545b768314.png" width="30" height="30" class="d-inline-block align-top" alt="">
          Cardapio</AncoraLinkPadrao>
      </LiEstiloPadrao>

      <LiEstiloPadrao class="estilo-links">
        <AncoraLinkPadrao class="estilo-ancora" :href="'/sobre'">Sobre</AncoraLinkPadrao>
      </LiEstiloPadrao>
    </ul>
  <hr class="separar">
    <Ofertas/>
  </div>
</template>

<script>
import Banner from '../moleculas/Banner'
import Ofertas from '../moleculas/Ofertas'
import AncoraLinkPadrao from '../atomos/links/AncoraLinkPadrao'
import LiEstiloPadrao from '../atomos/links/LiEstiloPadrao'

export default {
  name: 'home',
  components: {
    Banner,
    Ofertas,
    AncoraLinkPadrao,
    LiEstiloPadrao
  }
}
</script>

<style  scoped>
.links{
  flex-direction: row;
  display: flex;
}
.estilo-links{
  list-style: none;
  padding-right: .5rem;
  padding-left: .5rem;

}
.estilo-ancora{
  color: gray;
}
.separar{
  box-shadow: 2px 2px 2px rgb(68, 19, 19);
}

</style>
