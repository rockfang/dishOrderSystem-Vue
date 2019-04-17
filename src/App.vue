<template>
  <div id="app">
    <!--<router-link to="/cart">toCart</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import './assets/css/basic.scss';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">

</style>
