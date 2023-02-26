// https://api.github.com/repos/anton027/weather-app
import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/anton027/';
export function repoFetch(repoName) {
    return axios.get(`${BASE_URL}${repoName}`)
}