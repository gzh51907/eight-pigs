// 懒加载的方法
const Home = () => import('pages/home/Home')
const Discover = () => import('pages/discover/Discover')
const Info = () => import('pages/info/Info')
const Mine = () => import('pages/mine/Mine')
const Detail = () => import('pages/detail/Detail')
import XQ from "pages/XQ.vue";
import XQ2 from "../pages/XQ2.vue";
import List from "pages/List.vue";
import List2 from "pages/List2.vue";
import Login from "pages/Login"
import Register from "pages/register.vue"
import Custom from 'pages/Custom.vue'

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
    }, {
        name: 'discover',
        path: '/discover',
        component: Discover,
    }, {
        name: 'info',
        path: '/info',
        component: Info,
        meta: {
            requiresAuth: true
        }
    }, {
        name: 'mine',
        path: '/mine',
        component: Mine,
    }, {
        name: 'detail',
        path: '/detail/:iid',
        component: Detail,
    }, {
        name: 'xq',
        path: '/xq',
        component: XQ
    }, {
        name: 'xq2',
        path: '/xq2',
        component: XQ2
    },
    {
        name: "list",
        path: '/list',
        component: List
    },
    {
        name: "list2",
        path: '/list2/:id', // 动态路由
        component: List2
    }, {
        path: "/login",
        component: Login,   
    }, {
        path: "/register",
        component: Register
    }, {
        path: "/custom",
        component: Custom
    }
];

export default routes