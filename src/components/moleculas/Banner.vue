<template>
  <div>
    <img class="banner" src="../../assets/3037.jpg" alt="banner">
    <section class="container position-relative pt-3 pt-lg-0 pb-5 mt-lg-n10" style="z-index: 10;">
      <div class="card px-lg-2 border-0 shadow-lg">
        <div class="card-body px-4 pt-5 pb-4">
          <TituloPrincipal class="titulo-principal">Padaria</TituloPrincipal>
          <Subtitulo>Gente que ama pão quentinho</Subtitulo>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TituloPrincipal from '../atomos/titulos/TituloPrincipal'
import Subtitulo from '../atomos/titulos/Subtitulo'

export default {
  components: {
    TituloPrincipal,
    Subtitulo
  }
}
</script>

<style  scoped>
@media (min-width: 992px){
  .pt-lg-0 {
    padding-top: 0 !important;
  }
}
@media (min-width: 992px){
  .mt-lg-n10 {
    margin-top: -5rem !important;
  }
}
.banner {
  width: 100%;
}
.titulo-principal {
  font-size: 3em;
  color: rgb(126, 22, 22);
  font-family: 'Courier New', Courier, monospace;
}
.container{
  width: 30rem;
}
.card{
  display: flex;
}
</style>
