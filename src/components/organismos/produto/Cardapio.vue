<template>
  <div>
    <Categoria :categorias="categorias">
    </Categoria>
  </div>
</template>
<script>
import { getCategorias } from '../../../plugins/axios'
import Categoria from '../../moleculas/Categoria'
export default {
  name: 'produtos',
  data () {
    return {
      categorias: []
    }
  },
  components: {
    Categoria
  },
  async mounted () {
    this.categorias = await getCategorias()
  }
}
</script>
