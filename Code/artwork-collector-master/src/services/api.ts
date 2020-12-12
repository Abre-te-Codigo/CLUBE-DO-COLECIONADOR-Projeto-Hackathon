import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.206.249.83:3333',
});

export default api;