 <template>
  <div class="container">
    <TituloSecundario class="titulo">Crie uma conta</TituloSecundario>
  <div class="form-group">
    <EspecificacaoInput>Nome</EspecificacaoInput>
    <InputTexto
    placeholder="nome"
    v-model="usuario.nome"
    required/>
  </div>
  <div class="form-group">
    <EspecificacaoInput>Email </EspecificacaoInput>
    <InputTexto type="email"
    v-model="usuario.email"
    placeholder="email"
    required
    />
  </div>
  <div class="form-group">
    <EspecificacaoInput>Senha</EspecificacaoInput>
    <InputTexto type="password"
    v-model="usuario.senha"
    placeholder="senha"
    name="senha"
    required/>
  </div>
    <div class="form-group">
    <InputTexto type="password"
    v-model="usuario.confirmacao"
    placeholder="confirme a senha"
    name="confirmacao"
    required/>
  </div>
    <ButtonSucess
    @click='ConferirSenha'>cadastrar e acessar</ButtonSucess>
    <router-link class="link" to='/login'>Ou faça login</router-link>

  </div>
</template>

<script>
import firebase from 'firebase'
import TituloSecundario from '../../atomos/titulos/TituloSecundario'
import InputTexto from '../../atomos/inputs/InputTexto'
import ButtonSucess from '../../atomos/botoes/ButtonSucess'
import EspecificacaoInput from '../../atomos/inputs/EspecificacaoInput'
export default {
  name: 'cadastro',
  data () {
    return {
      usuario: {
        senha: '',
        email: '',
        confirmacao: '',
        nome: ''
      }
    }
  },
  components: {
    TituloSecundario,
    InputTexto,
    ButtonSucess,
    EspecificacaoInput
  },
  methods: {
    cadastrar () { // criar um usuário
      firebase.auth().createUserWithEmailAndPassword(this.usuario.email, this.usuario.senha)
        .then((user) => {
          this.$router.replace('/page-user')
        })
        .catch((error) => {
          alert('A senha deve possuir no minimo 6 caracteres')
          alert('Não esqueça de preencher todos os campos!')
          console.log(error.message)
          console.log(error.code)
        })
      this.$http.post('users.json', this.usuario.nome, this.usuario.email)
    },
    ConferirSenha () {
      if (this.usuario.senha !== this.usuario.confirmacao) {
        alert('As senhas tem valores diferentes!')
      } else {
        this.cadastrar()
      }
    }
  }
}
</script>
<style scoped>
.link{
  display: flex;
  margin-top: 8px;
}
.titulo{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
