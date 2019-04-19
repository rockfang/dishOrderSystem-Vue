<template>
  <div>
    <div class="footer-nav-btn" @click="showNav = !showNav">
      <img src="../../assets/images/navigation.png" alt="导航图标">
      <p>导航</p>
    </div>

    <div class="footer-nav-content" v-if="showNav">
      <ul>
        <li>
          <img src="../../assets/images/menu.png" alt="">
          <p>菜单</p>
        </li>
        <li>
          <img src="../../assets/images/order.png" alt="">
          <p>购物车</p>
        </li>
        <li>
          <img src="../../assets/images/cart.png" alt="">
          <p>我的订单</p>
        </li>
        <li>
          <img src="../../assets/images/wallet.png" alt="">
          <p>结账</p>
        </li>
        <li @click="showNav = !showNav">
          <img src="../../assets/images/close.png" alt="">
          <p>返回</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showNav: false
      }
    }
  }
</script>

<style lang="scss">
  .footer-nav-btn {
    position: fixed;
    width: 4.5rem;
    height: 4.5rem;
    left: 2rem;
    bottom: 2rem;
    background-color: #141615;
    border-radius: 50%;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
      margin-top: .5rem;
    }
    p {
      margin-top: -0.2rem;
      color: white;
    }
  }
  .footer-nav-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    li {
      width: 4.5rem;
      height: 4.5rem;
      background-color: #141615;
      border-radius: 50%;
      position: absolute;
      text-align: center;

      img {
        width: 2rem;
        height: 2em;
        margin-top: .5rem;
      }
      p {
        margin-top: -.2rem;
        color: white;
        font-size: 1rem;
        text-align: center;
      }

      &:nth-child(1) {
        bottom: 30%;
        left: 8%;
      }

      &:nth-child(2) {
        bottom: 22%;
        left: 25%;
      }
      &:nth-child(3) {
        bottom: 13%;
        left: 40%;
      }
      &:nth-child(4) {
        bottom: 2%;
        left: 45%;
      }
      &:nth-child(5) {
        bottom: 2rem;
        left: 2rem;
      }
    }
  }
</style>
