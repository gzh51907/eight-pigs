import vueRouter from "vue-router";
import Vue from "vue";
import Home from "../pages/Home.vue";
import XQ from "../pages/XQ.vue";
import XQ2 from "../pages/XQ2.vue";
import List from "../pages/List.vue";
import List2 from "../pages/List2.vue";
Vue.use(vueRouter);
let router = new vueRouter({
    routes: [{
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        path: '/',  //当浏览器地址为/home时，显示Home组件的内容
        redirect: '/home'
    },
    {
        name: 'xq',
        path: '/xq',// 动态路由
        component: XQ
    },
    {
        name: 'xq2',
        path: '/xq2',// 动态路由
        component: XQ2
    },
    {
        name: "list",
        path: '/list',// 动态路由
        component: List
    },
    {
        name: "list2",
        path: '/list2/:id',// 动态路由
        component: List2
    }]
});

export default router;