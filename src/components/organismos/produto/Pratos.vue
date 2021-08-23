<template>
  <div>
    <div class="titulo">
      <Subtitulo>Pelo site apenas congelados</Subtitulo>
      <Subtitulo>Coma quentinho no local. Venha nos visitar!</Subtitulo>
    </div>
    <Card :comidas="pratos">
    </Card>
  </div>
</template>
<script>
import { getPratos } from '../../../plugins/axios'
import Card from '../../moleculas/Card'
import TituloSecundario from '../../atomos/titulos/TituloSecundario'
import Subtitulo from '../../atomos/titulos/Subtitulo'
export default {
  data () {
    return {
      pratos: [],
      alerta: true
    }
  },
  components: {
    Card,
    TituloSecundario,
    Subtitulo
  },
  async mounted () {
    this.pratos = await getPratos()
  }
}
</script>
<style scoped>
.titulo{
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
