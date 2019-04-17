<template>
  <div>
    <div class="order-confirm">
      <div class="order-confirm-top">
        <h2>已下单的菜</h2>
        <div class="top-msg">
          <div class="desk-no">桌号083</div>
          <div class="custom-no">人数：2人</div>
          <div class="order-time">下单时间：07:25</div>
        </div>
      </div>
      <div class="order-confirm-bottom">
        <div class="money-area">
          应付金额 <span>￥200元</span>
        </div>
        <Button class="pay-now">立即付款</Button>
      </div>
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

    </div></div>
</template>
<script>
  export default {
    data() {
      return {
        msg: '订单确认页'
      }
    }
  }

</script>
<style lang="scss">
  .order-confirm {
    margin: 1rem;
    background-color: white;
    border-radius: 1rem;
    .order-confirm-top {
      padding: 2rem .5rem 2rem .5rem;
      h2 {
        text-align: center;
      }
      .top-msg {
        display: flex;
        padding: .5rem 0;
        border-bottom: 1px solid #eee;
        .desk-no {
          flex: 1;
        }
        .custom-no {
          flex: 1;

        }
        .order-time {
          flex: 1;

        }
      }
    }
    .order-confirm-bottom {
      display: flex;
      padding: 0 .5rem 1rem;
      .money-area {
        flex: 1;
        line-height: 2.5rem;
        span {
          color: red;
          font-size: 2rem;
        }
      }
      .pay-now {
        width: 8rem;
        height: 2.5rem;
        border: none;
        background: red;
        color: white;
        padding: 0 .5rem;
        border-radius: .5rem;
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
