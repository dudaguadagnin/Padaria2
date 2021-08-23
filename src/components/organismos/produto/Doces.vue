<template>
  <Card :comidas="doces">
  </Card>
</template>
<script>
import { getDoces } from '../../../plugins/axios'
import Card from '../../moleculas/Card'

export default {
  data () {
    return {
      doces: []
    }
  },
  components: {
    Card
  },
  async mounted () {
    this.doces = await getDoces()
  }
}
</script>
