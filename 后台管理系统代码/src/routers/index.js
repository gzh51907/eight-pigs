import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import routes from './routes'


const router = new Router({
    routes,
    mode: 'history'
});

// 路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.authorization ? true : false;
    if (to.path == '/login' || to.path == '/register') {
        next();
    }else{
        isLogin ? next() :next('/login')
    }
})

export default router;