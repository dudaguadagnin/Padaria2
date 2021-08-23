<template>
  <div>
    <section class="grid">
      <div class="categoria" v-for="(categoria, key) in categorias" :key="key">
        <ImagemSimples class="categoria-imagem"
          :src="categoria.imagem">
        </ImagemSimples>
        <AncoraLinkPadrao :href="categoria.pagina">
          <ButtonSucess>
            {{ categoria.nome }}
          </ButtonSucess>
        </AncoraLinkPadrao>
      </div>
    </section>
  </div>
</template>
<script>
import ImagemSimples from '../atomos/imagens/ImagemSimples'
import ButtonSucess from '../atomos/botoes/ButtonSucess'
import AncoraLinkPadrao from '../atomos/links/AncoraLinkPadrao'
export default {
  props: {
    categorias: {}
  },
  components: {
    ImagemSimples,
    ButtonSucess,
    AncoraLinkPadrao
  }
}
</script>
<style scoped>

.grid{
  display:grid;
  grid-gap: .1rem;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
.categoria{
  display: flex;
  flex-direction: column;
  width: calc(25% - 5rem);
  align-items:center;
  margin:auto;
  margin-bottom: 1em;
}
.categoria-imagem{
  margin: 6rem 2rem 0 2rem;
  text-align: center;
  border-radius: 100%;
  box-shadow: 1px 2px 10px rgb(235, 235, 235);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 250px;
}

</style>
