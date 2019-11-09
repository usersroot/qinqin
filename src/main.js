import Vue from 'vue'
import App from './App.vue'
import router from './route'
import request from './utils/request'

import {tabs,TabPane} from 'element-ui'
Vue.use(tabs)
Vue.use(TabPane)

Vue.config.productionTip = false

Vue.prototype.$http = request

new Vue({
  router,//注入路由，注入路由的目的是为了然整个项目中每一个组件都可以使用路由的属性
    render: h => h(App),
}).$mount('#app')