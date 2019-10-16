import Vue from 'vue';
//使用路由结构
import VueRouter from "vue-router";
// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);
//引入组件
import Home from '../pages/Home.vue'
import Mine from '../pages/Mine.vue'
import NotFound from "../pages/NotFund.vue"
import Login from "../pages/Login"
import Register from "../pages/register.vue"
import Custom from '../pages/Custom.vue'
import Indent from '../pages/Indent.vue'
import {
    nextTick
} from 'q';
//配置路由
let router = new VueRouter({
    routes: [
        // 首页
        {
            name: "home",
            path: "/home",
            component: Home
        },
        {
            path: "/",
            redirect: "/home"
        }, , {
            name: "mine",
            path: "/mine",
            component: Mine
        }, {
            path: '/404',
            component: NotFound
        }, {
            path: "*",
            redirect: "/404"
        }, {
            path: "/login",
            component: Login
        }, {
            path: "/register",
            component: Register
        }, {
            path: "/custom",
            component: Custom
        }, {
            path: "/indent",
            component: Indent,
            meta: {
                requiresAuth: true
            }

        }
    ]
})

//全局路守卫
router.beforeEach(async function (to, from, next) {

    if()[]
    let Authorization = localStorage.getItem('Authorization')
    if (Authorization) {
        next()
    } else {

    }

})

// 导出
export default router