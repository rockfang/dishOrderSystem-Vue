import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import StorageTool from './module/StorageTool.js'
// let roomid = window.location.hash.split('=')[1]; //这种方式是route默认hash模式才行，history模式拿不到
//把获取roomid放在router配置之前避免在start页面获取localstorage时还没设置值，导致为空
import UrlTool from  './module/UrlTool.js'
let roomid = UrlTool.getQueryString('roomid');
console.log('main.js roomid:' + roomid);
if (roomid) {
  StorageTool.set('roomid', roomid);
}

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  connection: 'http://a.itying.com?roomid=' + roomid
}));


//0 引用并use VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//1 导入其他组件
import Start from "./components/Start.vue"
import Cart from "./components/Cart.vue"
import Hot from "./components/Hot.vue"
import Home from "./components/Home.vue"
import Order from "./components/Order.vue"
import OrderPay from "./components/OrderPay.vue"
import PContent from "./components/PContent.vue"
import Search from "./components/Search.vue"
import ModifyPeopleInfo from "./components/ModifyPeopleInfo.vue"
//2 定义路由
const routes = [
  { path: '/start', component: Start },
  { path: '/cart', component: Cart },
  { path: '/hot', component: Hot },
  { path: '/home', component: Home },
  { path: '/order', component: Order },
  { path: '/orderpay', component: OrderPay },
  { path: '/pcontent', component: PContent },
  { path: '/search', component: Search },
  { path: '/modifypeopleinfo', component: ModifyPeopleInfo },
  { path: '/*', component: Start }
];
//3创建router实例
const router = new VueRouter({
  mode: 'history',//改为history模式，去掉难看的#号
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  el: '#app',
  router,
  sockets:{  /*测试期间查看是否连上*/
    connect: function(){
      console.log('socket connected')
    }

  },
  render: h => h(App)
});

