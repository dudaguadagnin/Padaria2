<template>
  <div class="container">
    <div class="row row-cols-2 row-cols-lg-4 row-cols-md-3" >
      <div class="col" v-for="(comida, id) in comidas" :key="id">
        <div class="card mb-6" style="height: auto">
            <ImagemCard
              v-if="comida.imagem"
              :src="comida.imagem"
              class="card-img-top"
              alt=""
            />
            <ImagemCard
              v-else
              src="../../assets/desenho.jpg"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <CardTitulo>{{ comida.nome }}</CardTitulo>
              <CardTexto >{{ comida.descricao }}</CardTexto>
            </div>

            <ul class="list-group list-group-flush">
              <GrupoItens  class="list-group-item" v-if="comida.quantidade != 0">
                Disponivel {{comida.quantidade}}
              </GrupoItens>
              <GrupoItens  class="list-group-item sem-estoque" v-else>
                Produto indisponivel
              </GrupoItens>
              <GrupoItens class="list-group-item preco-antigo" v-if="promocao">
                De R$: {{ comida.precoantigo }}
              </GrupoItens>
              <GrupoItens class="list-group-item novo-preco">
                Valor R$: {{ comida.preco }}
              </GrupoItens>
            </ul>

          <div class="card-body" v-if="!usuario.logado">
            <AncoraLinkPadrao
              class="btn btn-outline-success btn-sm"
              role="button"
              :href="'/login'">
              Comprar
            </AncoraLinkPadrao>
          </div>

          <div class="card-body" v-if="usuario.logado">
            <div class="input-group mb-3" >
              <InputNumerico
                placeholder="0"
                v-model="quantidadeCompra[id]" />
              <div class="input-group-prepend">
                <ButtonSucess
                  @click.native="comprar(comida, quantidadeCompra[id])">
                  Comprar
                </ButtonSucess>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImagemCard from '../atomos/imagens/ImagemCard'
import CardTitulo from '../atomos/card/CardTitulo'
import CardTexto from '../atomos/card/CardTexto'
import InputNumerico from '../atomos/inputs/InputNumeric'
import InputTexto from '../atomos/inputs/InputTexto'
import ButtonSucess from '../atomos/botoes/ButtonSucess'
import GrupoItens from '../atomos/card/GrupoItens'
import { mapActions, mapGetters } from 'vuex'
import AncoraLinkPadrao from '../atomos/links/AncoraLinkPadrao'

export default {
  name: 'card',
  props: {
    comidas: {},
    promocao: {
      type: Boolean
    }
  },
  components: {
    ImagemCard,
    CardTitulo,
    CardTexto,
    InputNumerico,
    InputTexto,
    ButtonSucess,
    GrupoItens,
    AncoraLinkPadrao
  },
  data () {
    return {
      quantidadeCompra: []
    }
  },
  methods: {
    comprar (comida, quantidadeCompra) {
      console.log(this.comidas)
      if (quantidadeCompra <= comida.quantidade && quantidadeCompra > 0) {
        console.log('comidacompra', quantidadeCompra)
        console.log('comida.quantidade', comida.quantidade)
        this.obterValor(comida.quantidade, quantidadeCompra)
        comida.quantidade = this.quantidadeEstoque
        console.log('comida.quantidade', comida.quantidade)
        this.$http
          .put(`${comida.categoria}.json`, this.comidas)
          .then(resposta => {
            this.$toasted.show('Comprou').goAway(3000)
          })
      } else {
        this.$toasted.error('valor minimo de compra é 1 unidade').goAway(4000)
      }
    },
    obterValor (comida, quantidadeCompra) {
      this.$store.dispatch('teste', comida)
      this.$store.dispatch('ComprarQuantidade', quantidadeCompra)
    }
  },
  computed: {
    ...mapGetters({quantidadeEstoque: 'quantidadeEstoque'}),
    ...mapGetters({usuario: 'usuario'}),
    ...mapActions({teste: 'teste'})
  }

}
</script>
<style scoped>
.preco-antigo {
  color: #c4c4c4;
  font-size: 14px;
  font-weight: 400;
  text-decoration: line-through;
}
.card-img-top {
  width: 208px;
  height: 150px;
}
.card{
  box-shadow: 1px 2px 10px rgb(235, 235, 235)
}
.estilo-botao{
  display: flex;
  text-decoration:none;
  text-align:center;
}
.sem-estoque{
  color: red
}
.card{
  width: 270px;
}
</style>
