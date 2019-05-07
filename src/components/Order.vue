<template>
  <div>
    <div v-if="!showOrder">
      <div  class="empty-tips">
        您还没有下单哦，快去购物车下单吧！
      </div>
      <div class="icon-con">
        <img class="empty-icon"  src="../assets/images/noorder.png" alt="">
      </div>
    </div>
    <div class="order-con" v-if="showOrder">
      <div class="order-info">
        <div class="order-info-top">
          <img src="../assets/images/timer.png" alt="" class="timer">
          <div>
            <h2>{{orderData.uid}}号桌待门店接单</h2>
            <p>请及时联系服务员确认菜品信息</p>
          </div>
        </div>
        <h3 class="order-info-bottom">
          已点菜品{{orderData.total_num}}份，合计：<span>￥{{orderData.total_price}}元</span>
        </h3>
      </div>

      <div class="order-detail">
        <h3>商品详情：</h3>
        <ul>
          <li v-for="dish in orderData.items">
            <div class="product-name">{{dish.title}}</div>
            <div class="product-amount">{{dish.num}}份</div>
            <div class="product-money">{{dish.price}}元</div>
          </li>
        </ul>

      </div>
    </div>

    <v-footer-nav></v-footer-nav>

  </div>

</template>
<script>
  import globalUrl from '../module/Config.js'
  import StorageTool from '../module/StorageTool.js'
  import FooterNav from './common/FooterNav.vue'
  export default {
    data() {
      return {
        baseUrl: globalUrl.basic_url,
        uid: StorageTool.get('roomid'),
        orderData: '',
        showOrder: false
      }
    },methods: {
      getOrderMsg: function () {
        let orderurl = this.baseUrl + '/api/getOrder?uid=' + this.uid;
        console.log(orderurl);

        this.$http.get(this.baseUrl + '/api/getOrder', {params: {uid: this.uid}}).then(response => {
          console.log(JSON.stringify(response.body));
          if (response.body.success == "true") {
            this.showOrder = true;
            this.orderData = response.body.result[0];
          } else {
            this.showOrder = false;

          }
        }, response => {
          // error callback
          this.showOrder = false;
        });
      }

    },mounted() {
      this.getOrderMsg();
    },components: {
      "v-footer-nav": FooterNav
    }
  }

</script>
<style lang="scss">
  .empty-tips {
    margin: 2rem auto 0;
    text-align: center;
    font-size: 1.5rem;
  }
  .icon-con {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    .empty-icon {
      width: 15rem;
      height: 15rem;
      margin-top: -7.5rem;
    }
  }

  .order-info {
    background-color: white;
    border-radius: 1rem;
    padding: 0 1rem;
    margin: 1rem;
    .order-info-top {
      display: flex;
      img {
        width: 5.6rem;
        height: 5.6rem;
      }
      div {
        flex: 1;
        padding-top: .5rem;
      }
    }
    .order-info-bottom {
      padding-bottom: .5rem;
      line-height: 2rem;
      span {
        font-size: 2rem;
        color: red;
      }
    }
  }
  .order-detail {
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    li {
      display: flex;
      margin-top: 1rem;
      .product-name {
        flex: 2;
      }
      .product-amount {
        flex: 1;
        text-align: center;
      }
      .product-money {
        flex: 1;
        text-align: center;
      }
    }
  }
</style>
