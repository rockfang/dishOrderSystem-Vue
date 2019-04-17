<template>
  <div>
    <div class="search-area">
      <input type="text" placeholder="请输入要搜索菜名" class="search-input">
    </div>
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

    <div class="nav-btn">
      <img src="../assets/images/navigation.png" alt="">
      <p>导航</p>
    </div>

    <div class="book-btn">
      <img src="../assets/images/book.png" alt="">
      <p>继续点菜</p>
    </div>

    <div class="cart-btn">
      <img src="../assets/images/cart.png" alt="">
      <p>购物车</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: '搜索页面'
      }
    }
  }

</script>
<style lang="scss">.search-area {
  height: 5rem;
  line-height: 5rem;
  text-align: center;

  input {
    width: 90%;
    height: 3rem;
    border: 1px solid #ccc;
    border-radius: .1rem;
  }
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
      height: 6rem;
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

.book-btn {
  position: fixed;
  width: 4.5rem;
  height: 4.5rem;
  left: 50%;
  margin-left: -2.25rem;
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

.cart-btn {
  position: fixed;
  width: 4.5rem;
  height: 4.5rem;
  right: 1rem;
  bottom: 1rem;
  border-radius: 50%;
  background-color: red;
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
}</style>
