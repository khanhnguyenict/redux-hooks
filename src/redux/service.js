import axios from 'axios';
import { ajax } from "rxjs";
export const getDownload = url => {
    // return axios.get(`https://jsonplaceholder.typicode.com/users`);
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
}