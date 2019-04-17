<template>
  <div>
    <div class="header-list">
      <div class="header-item">
        <img src="../assets/images/rexiao.png" alt="">
        <p>热销榜</p>
      </div>
      <div class="header-item">
        <img src="../assets/images/caidan.png" alt="">
        <p>点过的菜</p>
      </div>
      <div class="header-item">
        <img src="../assets/images/sousuo.png" alt="">
        <p>搜菜</p>
      </div>
    </div>

    <div class="dish-group">
      <h3 class="group-name">素菜类</h3>
      <ul class="dish-content">
        <li>
          <div class="item" @click="clickProductItem()">
            <img src="../assets/images/1.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item" @click="clickProductItem()">
            <img src="../assets/images/2.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item" @click="clickProductItem()">
            <img src="../assets/images/3.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/4.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>

          <div class="item">
            <img src="../assets/images/5.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/6.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="dish-group">
      <h3 class="group-name">素菜类</h3>
      <ul class="dish-content">
        <li>
          <div class="item">
            <img src="../assets/images/1.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/2.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/3.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/4.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>

          <div class="item">
            <img src="../assets/images/5.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/6.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="dish-group">
      <h3 class="group-name">素菜类</h3>
      <ul class="dish-content">
        <li>
          <div class="item">
            <img src="../assets/images/1.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/2.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/3.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/4.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>

          <div class="item">
            <img src="../assets/images/5.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>

        <li>
          <div class="item">
            <img src="../assets/images/6.jpg" alt="">
            <p>大蒜腊肉</p>
            <p>￥26</p>
          </div>
        </li>
      </ul>
    </div>

    <ul class="nav-list" id="nav-list">
      <li>精品美食</li>
      <li>精品小面</li>
      <li>饮料酒水</li>
      <li>新品推荐</li>
      <li>舌尖美食</li>
      <li>店长推荐</li>
    </ul>
    <div class="menu" id="menu-icon">
      <img src="../assets/images/nav.png" alt="菜单图标记">
      <p>菜单</p>
    </div>
    <div class="blur-bg" id="blur-bg"></div>


    <div class="nav-btn">
      <img src="../assets/images/navigation.png" alt="导航图标">
      <p>导航</p>
    </div>

    <div class="footer-nav-content">
      <ul>
        <li>
          <img src="../assets/images/menu.png" alt="">
          <p>菜单</p>
        </li>
        <li>
          <img src="../assets/images/order.png" alt="">
          <p>购物车</p>
        </li>
        <li>
          <img src="../assets/images/cart.png" alt="">
          <p>我的订单</p>
        </li>
        <li>
          <img src="../assets/images/wallet.png" alt="">
          <p>结账</p>
        </li>
        <li>
          <img src="../assets/images/close.png" alt="">
          <p>返回</p>
        </li>
      </ul>
    </div>
    <div class="cart-btn">
      <img src="../assets/images/cart.png" alt="购物车图标">
      <p>已点</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: '点餐页面'
      }
    },mounted() {
      let defaultFlag = true;
      let navList = document.getElementById("nav-list");
      navList.style.transform = 'translate(-100%,0)';

      let menuIcon = document.getElementById("menu-icon");
      menuIcon.style.transform = 'translate(-6rem,0)';

      let blurBg = document.getElementById("blur-bg");

      blurBg.onclick = menuIcon.onclick = function () {
        if (defaultFlag) {
          navList.style.transform = 'translate(0,0)';
          menuIcon.style.transform = 'translate(0,0)';
          blurBg.style.display = "block";


        } else {
          navList.style.transform = 'translate(-100%,0)';
          menuIcon.style.transform = 'translate(-6rem,0)';
          blurBg.style.display = "none";
        }
        defaultFlag = !defaultFlag;
      }
    },methods: {
      clickProductItem: function () {
        this.$router.push({path:'pcontent'});
      }
    }
  }

</script>
<style lang="scss">
  .header-list {
    width: 96%;
    margin: 1rem auto;
    height: 4.4rem;
    background: white;
    display: flex;
    border-radius: 0.3rem;
    .header-item {
      width: 33.3%;
      text-align: center;
      padding: .4rem 0;
      border-right: 1px solid #EDEDED;
      &:last-child {
        border-right: none;
      }
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .group-name {
    margin: 0 auto;
    text-align: center;
  }
  .dish-content {
    width: 96%;
    margin: .5rem auto 0 auto;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 33.3%;
      padding: .5rem;
      box-sizing: border-box;
      .item {
        border-radius: .3rem;
        overflow: hidden;

        img {
          width: 100%;
        }

        p {
          background: white;
        }

      }
    }
  }

  .nav-list {
    position: fixed;
    transition: all 1s;
    z-index: 3;
    left: 0;
    top: 0;
    width: 6rem;
    height: 100%;
    background-color: #EEEEEE;
    li {
      height: 5rem;
      line-height: 5rem;
      text-align: center;
    }
  }
  .menu {
    position: fixed;
    transition: all 1s;
    z-index: 2;
    top: 40%;
    left: 4rem;
    width: 5rem;
    height: 5rem;
    text-align: center;

    background: rgba(132, 128, 128, 0.9);
    border-radius: 0 50% 50% 0;

    img {
      width: 2.2rem;
      height: 2.2rem;
      margin: .5rem 0 0 1rem
    }

    p {
      margin-left: 1rem;
      margin-top: -0.5rem;
    }
  }
  .blur-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
    top: 0;
    left: 0;
    display: none;
  }
  .nav-btn {
    position: fixed;
    width: 5rem;
    height: 5rem;
    left: 2rem;
    bottom: 2rem;
    background-color: #141615;
    border-radius: 50%;
    img {
      width: 3rem;
      height: 3rem;
      margin: .4rem 0 0 1rem;
    }
    p {
      margin-left: 1.5rem;
      margin-top: -0.2rem;
      color: white;
    }
  }
  .cart-btn {
    position: fixed;
    width: 5rem;
    height: 5rem;
    right: 2rem;
    bottom: 2rem;
    background-color: red;
    border-radius: 50%;
    img {
      width: 3rem;
      height: 3rem;
      margin: .4rem 0 0 1rem;
    }
    p {
      margin-left: 1.5rem;
      margin-top: -0.2rem;
      color: white;
    }
  }
  .footer-nav-content {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    li {
      width: 5rem;
      height: 5rem;
      background-color: #141615;
      border-radius: 50%;
      position: absolute;

      img {
        width: 1.8rem;
        height: 1.8rem;
        margin: .8rem 0 0 1.5rem;
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
