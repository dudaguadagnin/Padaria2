<template>
  <Card :comidas="comidas">
  </Card>
</template>
<script>
import { getProdutos } from '../../../plugins/axios'
import Card from '../../moleculas/Card'
export default {
  name: 'produtos',
  data () {
    return {
      comidas: []
    }
  },
  components: {
    Card
  },
  async mounted () {
    this.comidas = await getProdutos()
  }
}
</script>
