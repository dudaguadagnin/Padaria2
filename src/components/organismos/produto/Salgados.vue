<template>
  <Card :comidas="salgados">
  </Card>
</template>
<script>
import { getSalgados } from '../../../plugins/axios'
import Card from '../../moleculas/Card'

export default {
  data () {
    return {
      salgados: []
    }
  },
  components: {
    Card
  },
  async mounted () {
    this.salgados = await getSalgados()
  }
}
</script>
