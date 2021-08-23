<template>
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
        <InputNumeric v-model="cadastroprod.quantidade" placeholder="0"/>
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
        <CaixaTexto v-model="cadastroprod.descricao" placeholder="sabor, recheio...">
        </CaixaTexto>
      </div>

      <div class="form-group">
        <EspecificacaoInput>Link da imagem</EspecificacaoInput>
        <p>Caso não tenha imagem https://www.colorironline.com/images/imgcolor/desenho-pedaco-de-bolo-para-colorir-3.jpg</p>
        <InputTexto v-model="cadastroprod.imagem"
        placeholder="https://"/>
      </div>
      <div class="form-check">
        <input value="ofertas" v-model="cadastroprod.categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault">
        <label class="form-check-label" for="flexRadioDefault">
          Ofertas
        </label>
      </div>
      <div class="form-check">
        <input value="doces" v-model="cadastroprod.categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
          Doces
        </label>
      </div>
      <div class="form-check">
        <input value="salgados" v-model="cadastroprod.categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
          Salgados
        </label>
      </div>
      <div class="form-check">
        <input value="pratos" v-model="cadastroprod.categoria" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label" for="flexRadioDefault2">
          Pratos
        </label>
      </div>

      <ButtonSucess
        @click.native="adicionar(cadastroprod.categoria)">
        Adicionar
      </ButtonSucess>
    </form>
  </div>
</template>

<script>
import ButtonSucess from '../../atomos/botoes/ButtonSucess'
import DropButton from '../../atomos/botoes/DropButton'
import InputTexto from '../../atomos/inputs/InputTexto'
import InputRadio from '../../atomos/inputs/InputRadio'
import InputNumeric from '../../atomos/inputs/InputNumeric'
import TituloSecundario from '../../atomos/titulos/TituloSecundario'
import CaixaTexto from '../../atomos/inputs/CaixaTexto'
import EspecificacaoInput from '../../atomos/inputs/EspecificacaoInput'
import PrecoSifrao from '../../atomos/inputs/PrecoSifrao'
export default {
  name: 'CadastroProduto',
  data () {
    return {
      cadastroprod: {
        nome: '',
        preco: '',
        quantidade: '',
        descricao: '',
        imagem: '',
        precoantigo: '',
        categoria: ''
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
    PrecoSifrao,
    DropButton,
    InputRadio
  },
  methods: {
    adicionar (banco) {
      this.$http
        .post(`${banco}.json`, this.cadastroprod)
        .then(resposta => {
          this.$toasted.show('Adicionado!').goAway(3000)
        })
        .catch(erro => {
          console.log(erro)
          this.$toasted.error('Falha ao adicionar!').goAway(3000)
        })
    },
    adicionarCardapio () {
      this.$http
        .post('produtos.json', this.cadastroprod)
        .then(resposta => {
          this.$toasted.show('Adicionado!').goAway(3000)
        })
        .catch(erro => {
          console.log(erro)
          this.$toasted.error('Falha ao adicionar!').goAway(3000)
        })
    },
    adicionarOferta () {
      this.$http
        .post('ofertas.json', this.cadastroprod)
        .then(resposta => {
          this.$toasted.show('Adicionado a ofertas!').goAway(3000)
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
