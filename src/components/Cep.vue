<template>
  <div class="hello">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input v-model="nome" placeholder="Solicitante" id="nome" type="text" class="validate">
          <label for="nome">Nome</label>
        </div>
        <div class="input-field col s12">
          <input v-model="cep" placeholder="CEP" id="cep" type="text" class="validate">
          <label for="cep">CEP</label>
        </div>
        <!--button v-on:click="envia" /-->
        <button @click="enviaCep" class="btn waves-effect waves-light" 
                type="submit" name="action" :disabled="!cep || !nome">
          Consultar
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
    <div class="response" v-if="list">
       <table>
        <thead>
          <tr>
              <th>CEP</th>
              <th>Bairro</th>
              <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in list" :key="index">
            <td>{{row.cep}}</td>
            <td>{{row.bairro}}</td>
            <td>{{row.logradouro}} {{row.complemento}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cep',
  data() {
    return {
      cep: '', 
      nome: '',
      resp: '',
      list: []
    }
  },
  props: {
    msg: String
  },
  methods: {
    async enviaCep() {
      this.resp = await axios.post('http://localhost:8080/livrese/cep/endereco', {nome:this.nome, cep:this.cep});
      console.log(this.resp);
      this.list.push(this.resp.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 15px;  
}
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
