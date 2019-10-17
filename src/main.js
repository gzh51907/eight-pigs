import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
// element-ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')