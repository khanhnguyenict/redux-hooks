import axios from 'axios';
export const getDownload = () => {
    const url = 'https://api.npmjs.org/downloads/range/2019-11-1:2020-2-7/google-authen-v2';
    return axios.get(url).then(res => res.data);
}