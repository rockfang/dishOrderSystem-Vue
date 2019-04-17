<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link to="/cart">toCart</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  import Start from "./components/Start.vue"
  import Cart from "./components/Cart.vue"
  import Hot from "./components/Hot.vue"
  import Index from "./components/Index.vue"
  import Order from "./components/Order.vue"
  import OrderPay from "./components/OrderPay.vue"
  import PContent from "./components/PContent.vue"
  import Search from "./components/Search.vue"

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },components: {
      'v-start': Start,
      'v-cart': Cart,
      'v-hot': Hot,
      'v-index': Index,
      'v-order': Order,
      'v-orderpay': OrderPay,
      'v-pcontent': PContent,
      'v-search': Search
    }
  }
</script>

<style lang="scss">

</style>
