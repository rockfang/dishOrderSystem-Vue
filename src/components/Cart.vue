<template>
  <div>
    <div class="cart-content">
      <div class="cart-info">
        <h2>购物车</h2>
        <div class="p-number">
          <div class="p-number-left">
            <p class="p-number-persons">用餐人数：2人</p>
            <p class="p-number-remark">备注：无</p>
          </div>

          <div class="p-number-right">
            <img src="../assets/images/edit.png" alt="" class="p-img-modify">
            <p class="p-modify">修改</p>
          </div>
        </div>
        <div class="cart-p-number">
          <div class="tips-about-all-dishes">您的购物车有：小炒2个，精品小菜2个</div>
          <div class="total-price">合计：<span>￥58元</span></div>
        </div>
      </div>
      <div class="cart-list">
        <div class="item">
          <img src="../assets/images/1.jpg" alt="" class="picture">
          <div class="desc">
            <p>炝炒生菜</p>
            <p>￥18</p>
          </div>

          <div class="operation-number">
            <div class="minus">-</div>
            <input type="text" placeholder="" class="number" value="1">
            <div class="plus">+</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/2.jpg" alt="" class="picture">
          <div class="desc">
            <p>炝炒生菜</p>
            <p>￥18</p>
          </div>

          <div class="operation-number">
            <div class="minus">-</div>
            <input type="text" placeholder="" class="number" value="1">
            <div class="plus">+</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/3.jpg" alt="" class="picture">
          <div class="desc">
            <p>炝炒生菜</p>
            <p>￥18</p>
          </div>

          <div class="operation-number">
            <div class="minus">-</div>
            <input type="text" placeholder="" class="number" value="1">
            <div class="plus">+</div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/4.jpg" alt="" class="picture">
          <div class="desc">
            <p>炝炒生菜</p>
            <p>￥18</p>
          </div>

          <div class="operation-number">
            <div class="minus">-</div>
            <input type="text" placeholder="" class="number" value="1">
            <div class="plus">+</div>
          </div>
        </div>
      </div>
    </div>

    <v-footer-nav></v-footer-nav>

    <div class="book-btn">
      <img src="../assets/images/book.png" alt="">
      <p>菜单</p>
    </div>

    <div class="cart-btn">
      <img src="../assets/images/doorder.png" alt="">
      <p>下单</p>
    </div>

    <div class="customs-favors">
      <h3>本店顾客最常点的菜</h3>
      <div class="horizontal-list">
        <ul>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
          <li class="item">
            <img src="../assets/images/2.jpg" alt="" class="product-pic">
            <p class="product-name">青椒炒肉</p>
            <p class="price">￥26</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import FooterNav from './common/FooterNav.vue'
  import globalUrl from '../module/Config.js'

  export default {
    data() {
      return {
        msg: '购物车页面'
      }
    },components: {
      "v-footer-nav": FooterNav
    }
  }
</script>
<style lang="scss">
  .cart-content {
    padding: 1rem;
    .cart-info {
      background-color: white;
      border-radius: 1rem;
      padding: 0 1rem;
      h2 {
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
      .p-number {
        display: flex;
        padding: .5rem 0;
        border-bottom: 1px solid #eee;
        .p-number-right {
          width: 4rem;
          height: 4rem;
          text-align: center;
          img {
            width: 1.8rem;
            height: 1.8rem;
          }
        }
        .p-number-left {
          flex: 1;
          height: 4rem;
          .p-number-persons {
            color: red;
          }
          .p-number-remark {
            line-height: 2;
          }
        }
      }
      .cart-p-number {
        padding: .5rem 0 .5rem 0;
        border-bottom: 1px solid #eee;
        .total-price {
          line-height: 2;
          border-bottom: 1px solid #eee;
          span {
            font-size: 2.4rem;
            color: red;
          }
        }
      }

    }
    .cart-list {
      background-color: white;
      border-radius: 1rem;
      padding: 0 1rem;
      margin-top: 1rem;

      .item {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 6rem;
        align-items: center;
        img {
          width: 4rem;
          height: 4rem;
          border-radius: .4rem;
        }
        .desc {
          flex: 1;
          padding-left: 1rem;
        }
        .operation-number {
          width: 10rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          .minus,.plus{
            width: 2.8rem;
            height: 2.8rem;
            background: none;
            border: 1px solid #eee;
            font-size: 2.4rem;
            color: red;
            line-height: 2.8rem;
            text-align: center;
          }
          input {
            height: 2.8rem;
            width: 2.8rem;
            border: none;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            text-align: center;
          }
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

  .customs-favors {
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem 1rem 6rem 1rem;

    .horizontal-list {
      width: 100%;
      overflow-x: auto;

      ul {
        display: flex;
        .item {
          margin: 0 .25rem;
          img {
            border-radius: .5rem;
            width: 6rem;
            height: 6rem;
          }
        }
      }
    }
  }

</style>
