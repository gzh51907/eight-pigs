import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

Vue.config.productionTip = false
// element-ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
const guowei = axios.create({
  baseURL: 'http://47.98.245.185:1907'
})
Vue.prototype.$guowei = guowei
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')