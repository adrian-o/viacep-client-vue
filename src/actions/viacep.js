import axios from 'axios'

class viacepclient {
    search (parameters = {}) {
        return axios.post('http://localhost:8080/livrese/cep/endereco',parameters)
                        .then(response => ({
                            data: response.data
                        }))
    }
}

export default viacepclient