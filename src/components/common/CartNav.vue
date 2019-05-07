<template>
  <div class="cart-btn" @click="goCart()">
    <img src="../../assets/images/cart.png" alt="购物车图标">
    <p>购物车</p>
    <div class="dish-num" v-if="dishNum && dishNum > 0">
      {{dishNum}}
    </div>
  </div>
</template>

<script>
  import StorageTool from '../../module/StorageTool.js'
  import globalUrl from '../../module/Config.js'

  export default {
    data() {
      return {
        dishNum: 0,
        cartNumUrl: globalUrl.basic_url + '/api/cartCount?uid=',
        uid: StorageTool.get('roomid')
      }
    }, sockets: {
      addcart: function () {  /*接受服务器广播过来的addcart*/
        console.log('Home receive addcart');
        //更新购物车的数量
        this.requestCartNum();
      }
    }, methods: {
      requestCartNum: function () {
        //http://a.itying.com/api/cartCount?uid=A001
        this.$http.get(this.cartNumUrl + this.uid).then(response => {
          console.log('cartNum:' + JSON.stringify(response.body));
          let resultData = response.body;
          if (resultData.success && resultData.result > 0) {
            this.dishNum = resultData.result;
          } else {
            this.dishNum = 0;
          }
        }, response => {
        });
      }, goCart: function () {
        this.$router.push({path: 'cart'});
      }
    }, mounted() {
      this.requestCartNum();
    }
  }
</script>

<style lang="scss">
  .cart-btn {
    position: fixed;
    width: 4.5rem;
    height: 4.5rem;
    right: 2rem;
    bottom: 2rem;
    background-color: red;
    border-radius: 50%;
    text-align: center;

    img {
      width: 2rem;
      height: 2rem;
      margin-top: .3rem;
    }

    p {
      margin-top: -0.2rem;
      color: white;
    }

    .dish-num {
      position: absolute;
      top: -.8rem;
      right: -.8rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: red;
      color: white
    }
  }
</style>
