<template>
<div>
  <div class="container">
    <form>
      <TituloSecundario class="espacamento-superior">Adicionar Produto a Estoque</TituloSecundario>
      <div class="form-group">
        <EspecificacaoInput>Nome</EspecificacaoInput>
        <InputTexto v-model="cadastroprod.nome"
        placeholder="nome do produto"/>
      </div>

      <div class="form-group">
        <EspecificacaoInput>Quantidade</EspecificacaoInput>
        <InputNumeric v-model="cadastroprod.quantidade"/>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <PrecoSifrao class="input-group-text"/>
        </div>
        <InputTexto v-model="cadastroprod.preco"
        placeholder="preço atual"/>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <PrecoSifrao class="input-group-text"/>
        </div>
        <InputTexto v-model="cadastroprod.precoantigo"
        placeholder="preço antigo"/>
      </div>

      <div class="form-group">
        <EspecificacaoInput>Descrição</EspecificacaoInput>
        <CaixaTexto v-model="cadastroprod.descricao">
        </CaixaTexto>
      </div>

      <div class="form-group">
        <EspecificacaoInput>Link da imagem</EspecificacaoInput>
        <InputTexto v-model="cadastroprod.imagem"
        placeholder="https://"/>
      </div>

      <ButtonSucess class="espacamento"
        @click.native="adicionarCardapio">
        Adicionar a Cardapio
      </ButtonSucess>

      <ButtonSucess class="espacamento"
        @click.native="adicionarOferta">
        Adicionar a Ofertas
      </ButtonSucess>
      <button @click="limpa">atualizar</button>
    </form>
  </div>
</div>
</template>

<script>
import ButtonSucess from '../../atomos/botoes/ButtonSucess'
import InputTexto from '../../atomos/inputs/InputTexto'
import InputNumeric from '../../atomos/inputs/InputNumeric'
import TituloSecundario from '../../atomos/titulos/TituloSecundario'
import CaixaTexto from '../../atomos/inputs/CaixaTexto'
import EspecificacaoInput from '../../atomos/inputs/EspecificacaoInput'
import PrecoSifrao from '../../atomos/inputs/PrecoSifrao'
export default {
  data () {
    return {
      cadastroprod: {
        nome: '',
        preco: '',
        quantidade: '',
        descricao: '',
        imagem: '',
        precoantigo: ''
      }
    }
  },
  components: {
    ButtonSucess,
    InputTexto,
    TituloSecundario,
    InputNumeric,
    CaixaTexto,
    EspecificacaoInput,
    PrecoSifrao
  },
  methods: {
    limpa () {
      this.$router.replace('/cadastro-de-produtos')
    },
    adicionarCardapio () {
      this.$http
        .post('produtos.json', this.cadastroprod)
        .then(resposta => {
          this.LimparInput()
          this.$toasted.show('Adicionado a Cardapio!').goAway(3000)
        })
        .catch(erro => {
          console.log(erro)
          this.$toasted.error('Falha ao adicionar a Cardapio!').goAway(3000)
        })
    },
    adicionarOferta () {
      this.$http
        .post('ofertas.json', this.cadastroprod)
        .then(resposta => {
          this.$toasted.show('Adicionado a ofertas!').goAway(3000)
          this.LimparInput()
        })
        .catch(erro => {
          console.log(erro)
          this.$toasted.error('Falha ao adicionado a ofertas!').goAway(3000)
        })
    },
    LimparInput () {
      this.cadastroprod = ''
    }
  }
}
</script>

<style scoped>
.espacamento{
  margin: 2px 4px 2rem 2px;
}
.espacamento-superior{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
