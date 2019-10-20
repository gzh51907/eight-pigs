import axios from 'axios'
// axios.defaults.baseURL = 'http://10.3.133.73:1907';
axios.defaults.baseURL = 'http://47.98.245.185:2019';
axios.defaults.timeout = 8000;
import { Loading, Message } from 'element-ui';
import router from '../routers';

let loading;
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '玩命加载中...',
        background: 'rgba(0,0,0,.7)'
    });
}

function endLoading() {
    loading.close();
}
// 请求拦截
axios.interceptors.request.use(config => {
    startLoading();
    if (localStorage.authorization) {
        config.headers.authorization = localStorage.authorization;
    }
    return config;
}, error => {
    return Promise.reject(error);
})
// 响应拦截
axios.interceptors.response.use(response => {
    endLoading();
    return response;
}, error => {
    // 错误提醒
    endLoading();
    Message.error(error.response.data);

    // 获取错误状态码
    const { status } = error.response;
    if (status == 401) {
        Message.error('token失效，请重新登陆！');
        // 清除token
        localStorage.removeItem('authorization');
        // 跳到登陆界面
        router.replace('/login')
    }
    return Promise.reject(error)
})
export default axios