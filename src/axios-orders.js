import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-35e70.firebaseio.com/'
});

export default instance;