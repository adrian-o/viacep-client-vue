import axios from 'axios'

export default {
    async search (parameters = {}) {
        const resp = await axios.post('https://viacep-spring-api.herokuapp.com/viacep/cep/endereco', parameters)
            .then(response => this.resp = response.data )
            .catch(() => {throw new Error('Falha ao consultar o CEP')})
        return resp                
    }
}