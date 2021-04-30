<template>
  <div>
    <TituloPrincipal>Bem vindo usuario</TituloPrincipal>
    <p>seu carinho contem</p>
    <p>{{quantidade}}</p>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TituloPrincipal from '../../atomos/titulos/TituloPrincipal'
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
    TituloPrincipal
  }
}
</script>
<style scoped>
</style>
