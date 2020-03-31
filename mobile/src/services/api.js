import axios from 'axios';

const api = axios.create({
    baseURL: 'MeuIP:APIport'
})

export default api;