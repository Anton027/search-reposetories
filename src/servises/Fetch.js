// https://api.github.com/repos/anton027/weather-app

// https://github.com/anton027?tab=repositories
import axios from 'axios';
const URL = 'https://api.github.com/search/users?q=';

// const BASE_URL = 'https://api.github.com/repos/anton027/';
export function userFetch(userName) {
    return axios.get(`${URL}${userName}`)
}

export function repoFetch(user) {
    return axios.get(`https://github.com/${user}?tab=repositories`)
}