<template>
  <div>
    <div class="cart-content">
      <div class="cart-info">
        <h2>购物车</h2>
        <div class="p-number" v-if="totalPrice != 0">
          <div class="p-number-left">
            <p class="p-number-persons">用餐人数：{{pNum}}</p>
            <p class="p-number-remark" v-if="pMark">备注：{{pMark}}</p>
            <p class="p-number-remark" v-else>备注：无</p>
          </div>

          <div class="p-number-right">
            <img src="../assets/images/edit.png" alt="" class="p-img-modify">
            <p class="p-modify" @click="modifyPInfo()">修改</p>
          </div>
        </div>
        <div class="cart-p-number" v-if="totalPrice != 0">
          <div class="tips-about-all-dishes">您的购物车有{{dishNum}}个菜</div>
          <div class="total-price">合计：<span>￥{{totalPrice}}元</span></div>
        </div>
      </div>
      <div class="cart-list" v-if="totalPrice != 0">
        <div class="item" v-for="(dish,index) in cartData">
          <img :src="baseUrl + '/' + dish.img_url" alt="" class="picture">
          <div class="desc">
            <p>{{dish.title}}</p>
            <p>￥{{dish.price}}</p>
          </div>

          <div class="operation-number">
            <div class="minus" @click="minusItem(dish,index)">-</div>
            <input type="text" placeholder="" class="number" v-model="dish.num" readonly="readonly">
            <div class="plus" @click="addItem(dish)">+</div>
          </div>
        </div>
      </div>
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
    <div class="empty-cart-tips" v-if="totalPrice == 0">购物车空空的</div>

    <router-link to="home">
      <div class="book-btn">
        <img src="../assets/images/book.png" alt="">
        <p>菜单</p>
      </div>
    </router-link>

    <div class="cart-btn">
      <img src="../assets/images/doorder.png" alt="">
      <p>下单</p>
    </div>
    <v-footer-nav></v-footer-nav>


  </div>
</template>

<script>
  import FooterNav from './common/FooterNav.vue'
  import globalUrl from '../module/Config.js'

  export default {
    data() {
      return {
        baseUrl: globalUrl.basic_url,
        cartData: '',
        pNum: '',
        pMark: '',
        dishNum: 0,
        totalPrice: ''
      }
    },components: {
      "v-footer-nav": FooterNav
    },
    sockets: {
      addcart: function(){  /*接受服务器广播过来的addcart*/
        console.log('Home receive addcart');
        //更新购物车的数量
        this.initCartData();
      }
    },
    methods: {
      initCartData: function () {
        let initUrl = this.baseUrl + '/api/cartlist?uid=' + 'a110'
        this.$http.get(initUrl).then(response => {
          console.log('initCartData:' + JSON.stringify(response.body));
          if (response.body.success) {
            this.cartData = response.body.result;
            console.log('initCartData:' + this.cartData);
            this.computeTotalResult();
          }
        },response => {

        });

      },
      initPeopleInfo: function () {
        let pInfoUrl = this.baseUrl + '/api/peopleInfoList?uid=' + 'a110'
        this.$http.get(pInfoUrl).then(response => {
          console.log('pInfoUrl:' + JSON.stringify(response.body));
          if (response.body.success) {
            this.pNum = response.body.result[0].p_num;
            this.pMark = response.body.result[0].p_mark;
          }
        },response => {

        });

      },
      computeTotalResult: function() {
        let length = this.cartData.length;
        let dishNum = 0;
        let totalPrice = 0;
        for(let i=0; i < length; i++) {
          dishNum += this.cartData[i].num;
          totalPrice += parseFloat(this.cartData[i].price * this.cartData[i].num);
        }
        this.dishNum = dishNum;
        this.totalPrice = totalPrice;
      },
      minusItem: function (dish,index) {

        //http://a.itying.com/api/decCart?uid=a001&product_id=1241241255436246&num=2
        let minusUrl = this.baseUrl + '/api/decCart?uid=' + 'a110' + '&product_id='
          + dish.product_id
          + '&num=' + dish.num;
        console.log('minusUrl:' + minusUrl);

        this.$http.get(minusUrl).then(response => {
          console.log('minusResult:' + JSON.stringify(response.body));
          if (response.body.success) {
            this.$socket.emit('addcart','addcart');
            --dish.num;
            //删除后如果条目数量为0，则展示数组中删除这条数据
            if (dish.num == 0) {
              this.cartData.splice(index,1);
            }
            this.computeTotalResult();
          }
        },response => {

        });


      },
      addItem: function (dish) {
        //http://a.itying.com/api/incCart?uid=a001&product_id=1241241255436246&num=2
        let addUrl = this.baseUrl + '/api/incCart?uid=' + 'a110' + '&product_id='
          + dish.product_id
          + '&num=' + dish.num;
        console.log('addUrl:' + addUrl);

        this.$http.get(addUrl).then(response => {
          console.log('addResult:' + JSON.stringify(response.body));
          if (response.body.success) {
            this.$socket.emit('addcart','addcart');
            ++dish.num;
          }
          this.computeTotalResult();

        },response => {

        });
      },
      modifyPInfo: function () {
        this.$router.push({path:'/modifypeopleinfo'})
      }
    },mounted() {
      this.initCartData();
      this.initPeopleInfo();
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

  .empty-cart-tips {
    text-align: center;
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
