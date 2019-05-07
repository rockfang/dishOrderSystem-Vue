<template>
  <div>
    <p class="hot-title">本地热销榜</p>
    <div class="content">
      <ul>
        <li class="item">
          <img src="../assets/images/6.jpg" alt="" class="dish-picature">
          <div class="desc-content">
            <h3 class="name">青椒炒肉</h3>
            <p class="price">￥26</p>
            <p class="sell-amount">已售:351份</p>
          </div>
        </li>

        <li class="item">
          <img src="../assets/images/7.jpg" alt="" class="dish-picature">
          <div class="desc-content">
            <h3 class="name">青椒炒肉</h3>
            <p class="price">￥26</p>
            <p class="sell-amount">已售:351份</p>
          </div>
        </li>
        <li class="item">
          <img src="../assets/images/7.jpg" alt="" class="dish-picature">
          <div class="desc-content">
            <h3 class="name">青椒炒肉</h3>
            <p class="price">￥26</p>
            <p class="sell-amount">已售:351份</p>
          </div>
        </li>
        <li class="item">
          <img src="../assets/images/7.jpg" alt="" class="dish-picature">
          <div class="desc-content">
            <p class="name">青椒炒肉</p>
            <p class="price">￥26</p>
            <p class="sell-amount">已售:351份</p>
          </div>
        </li>
        <li class="item">
          <img src="../assets/images/7.jpg" alt="" class="dish-picature">
          <div class="desc-content">
            <h3 class="name">青椒炒肉</h3>
            <p class="price">￥26</p>
            <p class="sell-amount">已售:351份</p>
          </div>
        </li>
        <li class="item">
          <img src="../assets/images/7.jpg" alt="" class="dish-picature">
          <div class="desc-content">
            <h3 class="name">青椒炒肉</h3>
            <p class="price">￥26</p>
            <p class="sell-amount">已售:351份</p>
          </div>
        </li>
      </ul>
    </div>

    <v-footer-nav></v-footer-nav>

    <router-link to="home">
      <div class="book-btn">
        <img src="../assets/images/book.png" alt="">
        <p>继续点菜</p>
      </div>
    </router-link>

    <v-cart-nav></v-cart-nav>

  </div>
</template>
<script>
  import FooterNav from './common/FooterNav.vue'
  import CartNav from './common/CartNav.vue'

  export default {
    data() {
      return {
        msg: '热销榜'
      }
    },components: {
      "v-footer-nav": FooterNav,
      "v-cart-nav": CartNav
    }
  }

</script>
<style lang="scss">
  .hot-title {
    height: 5rem;
    text-align: center;
    line-height: 5rem;
  }
  .content {
    .item {
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      padding: 1rem;
      border-bottom: 1px solid #ccc;
      img {
        width: 6rem;
        height:6rem;
      }
      .desc-content {
        flex: 1;
        padding-left: .5rem;
        .price {
          color: red;
        }
      }

    }
  }
  .nav-btn {
    position: fixed;
    width: 4.5rem;
    height: 4.5rem;
    left: .5rem;
    bottom: 1rem;
    border-radius: 50%;
    background-color: #2e2e2e;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
      margin-top: .3rem;
    }
    p {
      color: white;
      margin-top: -.2rem;
    }
  }


</style>
