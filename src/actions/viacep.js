import axios from 'axios'

export default {
    async search (parameters = {}) {
        return await axios.post('http://localhost:8080/livrese/cep/endereco', parameters)
                        .then(response => ({
                            data: response.data
                        }))
                        .catch(() => {
                            throw new Error('Falha ao consultar o CEP')
                        })
    }
}