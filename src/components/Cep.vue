<template>
  <div class="hello">
    <label for="nome">Nome</label>
    <input type="text" name="nome" v-model="nome"/>
    <label for="cep">CEP</label>
    <input type="text" name="cep" v-model="cep"/>
    <!--button v-on:click="envia" /-->
    <button @click="enviaCep">Enviar</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cep',
  data() {
    return {
      cep: '', 
      nome: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    async enviaCep() {
      await axios.post('http://localhost:8080/livrese/cep/endereco', {nome:this.nome, cep:this.cep})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
