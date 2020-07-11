import axios from 'axios'

export default {
    async search (parameters = {}) {
        const resp = await axios.post('http://localhost:8080/viacep-cli/cep/endereco', parameters)
            .then(response => response )
            .catch(() => {throw new Error('Falha ao consultar o CEP')})
        return resp
    }
}
