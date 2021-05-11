<template>
  <div>
    <TituloPrincipal class="espaco">Ofertas da Semana</TituloPrincipal>
    <Card :comidas="comidas" :promocao="true"/>
  </div>
</template>

<script>
import { getOfertas } from '../../plugins/axios'
import Card from '../moleculas/Card'
import TituloPrincipal from '../atomos/titulos/TituloPrincipal'
export default {
  name: 'Ofertas',
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
.espaco{
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
