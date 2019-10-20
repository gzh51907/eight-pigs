// 懒加载的方法
const Index = () => import('views/Index')
const Register = () => import('views/Register')
const NotFound = () => import('views/404')
const Login = () => import('views/Login')
const Home=()=>import ('views/Home')
const InfoShow=()=>import ('views/InfoShow')
const HotList=()=>import('views/HotList')
const Additem=()=>import('views/Additem')
const Edititem=()=>import('views/Edititem')

const routes = [
    {
        name: '/404',
        path: '*',
        component: NotFound,
    },
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name: 'index',
        path: '/index',
        component: Index,
        children:[
            { path: '', component: Home },
            { path: '/home',name:'home', component: Home },
            { path: '/infoshow',name:'infoshow', component: InfoShow },
            { path: '/hotlist',name:'hotlist', component: HotList },
            { path: '/additem',name:'additem', component: Additem },
            { path: '/edit',name:'edit', component: Edititem }
        ]
    }
];

export default routes