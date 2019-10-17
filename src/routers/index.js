import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import routes from './routes'
import store from '../store'
const router = new Router({
    routes,
    mode: 'history'
});


// 全局路由守卫
router.beforeEach(async function (to, from, next) {

    if (to.meta.requiresAuth) {
        let user = localStorage.getItem('user');
        if (user) {
            let res = await store.dispatch('checkLogin');

            if (res === 400) {
                next({
                    path: '/login',
                    query: {
                        targetUrl: to.fullPath
                    }
                });
            } else {
                next();
            }
        } else {
            router.push({
                path: '/login',
                query: {
                    targetUrl: to.fullPath
                }
            })
        }

    } else {
        next();
    }

})


export default router;