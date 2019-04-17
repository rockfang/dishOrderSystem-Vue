import Vue from 'vue'
import App from './App.vue'
//0 引用并use VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//1 导入其他组件
import Start from "./components/Start.vue"
import Cart from "./components/Cart.vue"
import Hot from "./components/Hot.vue"
import Index from "./components/Index.vue"
import Order from "./components/Order.vue"
import OrderPay from "./components/OrderPay.vue"
import PContent from "./components/PContent.vue"
import Search from "./components/Search.vue"
//2 定义路由
const routes = [
  { path: '/start', component: Start },
  { path: '/cart', component: Cart },
  { path: '/hot', component: Hot },
  { path: '/index', component: Index },
  { path: '/order', component: Order },
  { path: '/orderpay', component: OrderPay },
  { path: '/pcontent', component: PContent },
  { path: '/search', component: Search },
  { path: '/*', component: Index }
];
//3创建router实例
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
