<template>
  <div>
    <TituloPrincipal>Ofertas da Semana</TituloPrincipal>
    <Card :comidas="comidas" :promocao="true"/>
  </div>
</template>

<script>
import { getOfertas } from '../../plugins/axios'
import Card from '../moleculas/Card'
import TituloPrincipal from '../atomos/titulos/TituloPrincipal'
export default {
  data () {
    return {
      comidas: []
    }
  },
  components: {
    Card,
    TituloPrincipal
  },
  async mounted () {
    this.comidas = await getOfertas()
  }
}
</script>
<style scoped>
.ofertas-titulo {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
