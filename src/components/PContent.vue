<template>
  <div>
    <div class="pcontent">
      <div class="info">
        <img :src="baseUrl + '/' + contentData.img_url" alt="预览图" class="pre-img">
        <h2 class="product-name">{{contentData.title}}</h2>
        <p class="product-price">{{contentData.price}}元/份</p>
      </div>

      <div class="detail">
        <h3 class="detail-name">商品详情</h3>
        <div class="detal-con">
          <img :src="baseUrl + '/' + contentData.img_url" alt="大图" class="detail-img">
          <br/>
          <div class="detail-desc" v-html="contentData.content"></div>
        </div>
      </div>

    </div>

    <div class="pfooter">
      <div class="pfooter-left">
        <strong class="pfooter-amount-name">数量:</strong>
        <div class="amount-opration-con">
          <button class="minus" @click="minusProduct()">-</button>
          <input type="text" class="amount" readonly="readonly" name="num" id="num" placeholder="" v-model="productNum"/>
          <button class="add" @click="addProduct()">+</button>
        </div>
      </div>
      <button class="pfooter-right" @click="plusCart()">
        加入购物车
      </button>
    </div>

    <div class="pheader-back" @click="back()">
      返回
    </div>
  </div>
</template>
<script>
  import globalUrl from '../module/Config.js'

  export default {
    data() {
      return {
        baseUrl: globalUrl.basic_url,
        contentUrl: globalUrl.basic_url + '/api/productcontent?id=',
        addCartUrl: globalUrl.basic_url + '/api/addcart',
        contentData: '',
        productNum: 1
      }
    },methods: {
      requestPContent: function(id) {
        this.$http.get(this.contentUrl + id).then(response => {
          this.contentData = response.body.result[0];
        }, response => {
          // error callback
          console.log('result-------------------');
          console.log('error');

        });
      },
      back: function () {
        this.$router.go(-1);
      },plusCart:function () {
        //把菜加入购物车，上传桌号，菜名，数量
        let requestBody = {
          uid: 'a110',
          title: this.contentData.title,
          product_id: this.$route.query.id,
          img_url: this.contentData.img_url,
          price: this.contentData.price,
          num: this.productNum,
          open_id: ''
        };
        // POST /someUrl  http://a.itying.com/api/addcart
        this.$http.post(this.addCartUrl, requestBody).then(response => {
          // get body data
          this.someData = response.body;
          console.log(response.body);
          //加入购物车的时候给服务器发消息
          this.$socket.emit('addcart','addcart');
          this.$router.push({path: 'home'})

        }, response => {
          // error callback
        });


      },minusProduct: function () {
        if (this.productNum > 1) {
          --this.productNum;
        }
      },addProduct: function () {
        ++this.productNum;
      }
    },mounted() {
      //get传值
      let id = this.$route.query.id;
      this.requestPContent(id);
    }
  }

</script>
<style lang="scss">
  .pcontent {
    .info {
      background-color: white;

      img {
        width: 100%;
        height: 18rem;
      }

      h2 {
        padding: .2rem 0 0 .5rem;
      }

      p {
        padding: .2rem 0 0 .5rem;
        color: red;
      }
    }

    .detail {
      background-color: white;
      padding: .5rem .5rem 4.5rem .5rem;
      .detail-name {
      }
      .detal-con {

        padding: .4rem;
        img {
          width: 100%;
          margin: 0 auto;
          height: 25rem;
        }
      }
    }
  }
  /**
    底部添加购物车栏
   */
  .pfooter {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.4rem;
    line-height: 4.4rem;
    background-color: white;
    border-top: 1px solid #eee;

    .pfooter-left {
      display: flex;
      float: left;
      .pfooter-amount-name {
        flex: 1;
        font-size: 1.6rem;
        padding: 0 .5rem;
      }
      .amount-opration-con {
        display: flex;
        align-items: center;
        width: 10rem;
        .minus,.add{
          flex: 1;
          width: 2.8rem;
          height: 2.8rem;
          color: red;
          font-size: 2.4rem;
          background-color: white;
          border: 1px solid #eee;

        }

        input {
          flex: 1;
          display: block;
          width: 2.8rem;
          height: 2.8rem;
          text-align: center;
          border: none;
          border-bottom: 1px solid #eee;
          border-top: 1px solid #eee;
        }

      }
    }

    .pfooter-right {
      float: right;
      padding:  0 .5rem;
      height: 3rem;
      margin: .7rem .5rem 0 0;
      color: white;
      background-color: red;
      border: none;
      border-radius: .5rem;
    }
  }
  //顶部返回按钮
  .pheader-back {
    position: fixed;
    left: .5rem;
    top: .5rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 4.5rem;
    //css3 before伪类
    &:before {
      content: "";
      display: block;
      width: .8rem;
      height: .8rem;
      float: left;
      border-bottom: .2rem solid white;
      border-left: .2rem solid white;
      position: relative;
      top: 1.8rem;
      left: 1rem;
      transform: rotate(45deg);
    }
  }

</style>
