import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:1907';
axios.defaults.baseURL = 'http://47.98.245.185:1907';
axios.defaults.timeout = 8000;
axios.defaults.headers = {

};
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export default axios;

