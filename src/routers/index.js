import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import routes from './routes'


const router = new Router({
    routes,
    mode: 'history'
});
//全局路守卫
router.beforeEach(async function (to, from, next) {
    if (to.meta.requiresAuth) {
        let user = localStorage.getItem('user');
        if (user) {
            next()
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