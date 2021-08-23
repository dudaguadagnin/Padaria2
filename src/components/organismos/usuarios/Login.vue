<template>
  <div class="container">
    <div class="form-signin">
      <TituloSecundario class="titulo">Login</TituloSecundario>
      <div class="form-group">
        <InputTexto
          class="tamanho"
          type="email"
          v-model="usuario.email"
          placeholder="email"
        />
      </div>
      <div class="form-group">
        <InputTexto
          class="tamanho"
          type="password"
          v-model="usuario.senha"
          placeholder="senha"
        />
      </div>
      <ButtonSucess
        class="btn btn-outline-success"
        @click.native="logar">
        Acessar
      </ButtonSucess>
      <router-link class="link" to='/cadastro'>Não possui login? Cadastre-se aqui</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import TituloSecundario from '../../atomos/titulos/TituloSecundario'
import InputTexto from '../../atomos/inputs/InputTexto'
import ButtonSucess from '../../atomos/botoes/ButtonSucess'
export default {
  name: 'Login',
  data () {
    return {
      usuario: {
        senha: '',
        email: ''
      }
    }
  },
  components: {
    TituloSecundario,
    InputTexto,
    ButtonSucess
  },
  methods: {
    logar () {
      firebase.auth().signInWithEmailAndPassword(this.usuario.email, this.usuario.senha)
        .then((user) => {
          this.$router.replace('/page-user')
        })
        .catch((error) => {
          this.$toasted.error('Senha ou email incorretos').goAway(5000)
          console.log(error.code)
          console.log(error.message)
        })
    }
  }
}
</script>
<style scoped>
.titulo{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.link{
  display: flex;
  margin-top: 8px;
}
.container{
  text-align: center;
  display: inline
}
.form-signin{
  max-width: 330px;
  margin: auto;
}
</style>
