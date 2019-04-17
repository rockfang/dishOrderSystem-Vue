<template>
  <div>
    <div class="order-info">
      <div class="order-info-top">
        <img src="../assets/images/timer.png" alt="" class="timer">
        <div>
          <h2>118号桌待门店接单</h2>
          <p>请及时联系服务员确认菜品信息</p>
        </div>
      </div>
      <h3 class="order-info-bottom">
        已点菜品6份，合计：<span>￥60元</span>
      </h3>
    </div>

    <div class="order-detail">
      <h3>商品详情：</h3>
      <ul>
        <li>
          <div class="product-name">烧茄子</div>
          <div class="product-amount">1份</div>
          <div class="product-money">12元</div>
        </li>
        <li>
          <div class="product-name">烧茄子</div>
          <div class="product-amount">1份</div>
          <div class="product-money">12元</div>
        </li>
        <li>
          <div class="product-name">烧茄子</div>
          <div class="product-amount">1份</div>
          <div class="product-money">12元</div>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: '等待接单页面'
      }
    }
  }

</script>
<style lang="scss">

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
