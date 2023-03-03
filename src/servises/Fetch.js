
import axios from 'axios';
const URL = 'https://api.github.com/search/users?q=';

export function userFetch(userName) {
    return axios.get(`${URL}${userName}`)
}
