<template>
  <div class="hello">
    <div class="col s12">
      <div class="row">
        
        <div class="input-field col s12" v-if="err">
          <p>{{ err }}</p>
        </div>

        <!-- NOME -->
        <div class="input-field col s12">
          <input v-model="nome" placeholder="Solicitante" id="nome" type="text" class="validate">
          <label for="nome">Nome</label>
        </div>
        
        
        <!-- CEP -->
        <div class="input-field col s12">
          <input v-model="cep" @input="formatCep(cep)" placeholder="CEP" id="cep" type="text" class="validate">
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
              <th>Localidade</th>
              <th>CEP</th>
              <th>Bairro</th>
              <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in list" :key="index">
            <td>{{row.localidade}}-{{row.uf}}</td>
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
import viacep from '../actions/viacep'

export default {
  name: 'Cep',
  data() {
    return {
      cep: '', 
      nome: '',
      err: '',
      list: []
    }
  },
  props: {
    msg: String
  },
  methods: {
    async enviaCep() {
      await viacep.search({nome:this.nome, cep:this.cep})
                .then(response => { this.list.push(response.endereco) })
                .catch(error => {this.err = error.message})                         
    },
    formatCep() {
      this.cep = this.cep.replace(/\D/g,'')
      if( this.cep.length > 8 ) this.cep = this.cep.slice(0,-1)
      this.cep = this.cep.replace(/(\d{5})(\d)/, '$1-$2')
    }
  }
}
</script>