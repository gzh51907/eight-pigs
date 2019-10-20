import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import axios from 'network'
Vue.config.productionTip = false

// element-ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
const gw = axios.create({
  baseURL: "http://47.98.245.185:1907"
});
Vue.prototype.$axios = axios;
Vue.prototype.$gw = gw;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

