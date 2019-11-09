//1.引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () =>import ( /* webpackChunkName: "group-foo" */ '../pages/home')
const HomeCourt = () =>import ( /* webpackChunkName: "group-foo" */ '../pages/homecourt')
const Shop = () =>import ( /* webpackChunkName: "group-foo" */ '../pages/shop')
const Mine = () =>import ( /* webpackChunkName: "group-foo" */ '../pages/mine')
const Kind = () =>import ( /* webpackChunkName: "group-foo" */ '../pages/kind')
const Error = () => import(/* webpackChunkName: "group-foo" */ '../pages/error')
const List=()=>import(/* webpackChunkName: "group-foo" */  '../pages/list')
const Product=()=>import(/* webpackChunkName:"group-foo" */  '../pages/product')

    //2.激活插件
Vue.use(VueRouter)

//3.得到routerd对象

const router = new VueRouter({
    mode: 'history',
    routes: [  {
        path: '/',  // http://m.maoyan.com/   ->  http://m.maoyan.com/home
        redirect: '/home',//重定向
      },{
        path: '/home',
        component: Home,
        name: 'home'
    }, {
        path: '/shop',
        component: Shop,
        name: 'shop',
    }, {
        path: '/mine',
        component: Mine,
        name: 'mine'
    }, {
        path: '/kind',
        component: Kind,
        name: 'kind'
    }, {
        path: '/homecourt',
        component: HomeCourt,
        name: 'homecoutr'
    }, {
        path:'/list/:id',
        component:List,
        name:'list'
    }, {
        path:'/product',
        component:Product,
        name:'product'
    },{
        path: '*',
        component: Error 
      }]
})


//4.导出模块

export default router