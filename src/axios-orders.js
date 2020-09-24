import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-timyu.firebaseio.com//'
});

export default instance;