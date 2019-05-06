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

    <div class="dish-group" v-for="dishType in homeData.result" v-show="dishType.list.length != 0">
      <h3 class="group-name">{{dishType.title}}</h3>
      <ul class="dish-content">
        <li v-for="dish in dishType.list">
          <div class="item" @click="clickProductItem(dish._id)">
            <img :src="baseUrl + '/' + dish.img_url" alt="">
            <p>{{dish.title}}</p>
            <p>￥{{dish.price}}</p>
          </div>
        </li>
      </ul>
    </div>

    <ul class="nav-list" id="nav-list">
      <li v-for="(dishType,index) in homeData.result" v-show="dishType.list.length != 0" @click="selectTypeItem(index)">
        {{dishType.title}}
      </li>
    </ul>
    <div class="menu" id="menu-icon">
      <img src="../assets/images/nav.png" alt="侧拉图标记">
      <p>菜单</p>
    </div>
    <div class="blur-bg" id="blur-bg"></div>

    <v-footer-nav></v-footer-nav>
    <div class="cart-btn" @click="goCart()">
      <img src="../assets/images/cart.png" alt="购物车图标">
      <p>购物车</p>
      <div class="dish-num" v-if="dishNum && dishNum > 0">
        {{dishNum}}
      </div>
    </div>
  </div>
</template>
<script>
  import FooterNav from './common/FooterNav.vue'
  import globalUrl from '../module/Config.js'
  import StorageTool from '../module/StorageTool.js'

 export default {
    data() {
      return {
        baseUrl: globalUrl.basic_url,
        homeUrl: globalUrl.basic_url + '/api/productlist',
        cartNumUrl: globalUrl.basic_url + '/api/cartCount?uid=',
        homeData: '',
        showLeftSlide: false,
        dishNum: 0,
        uid: StorageTool.get('roomid')
      }
    },
   sockets: {
     addcart: function(){  /*接受服务器广播过来的addcart*/
       console.log('Home receive addcart');
       //更新购物车的数量
       this.requestCartNum();
     }
   },
   methods: {
      clickProductItem: function (id) {
        // 带查询参数，变成 /register?plan=private
        // router.push({ path: 'register', query: { plan: 'private' }})
        this.$router.push({path:'pcontent',query: {'id': id}});
      },
      initLeftSlide: function () {
        let self = this;
        let navList = document.getElementById("nav-list");
        let menuIcon = document.getElementById("menu-icon");
        let blurBg = document.getElementById("blur-bg");

        blurBg.onclick = menuIcon.onclick = function () {
          console.log("showLeftSlide:" + self.showLeftSlide);
          if (!self.showLeftSlide) {
            navList.style.transform = 'translate(0,0)';
            menuIcon.style.transform = 'translate(0,0)';
            blurBg.style.display = "block";
          } else {
            navList.style.transform = 'translate(-100%,0)';
            menuIcon.style.transform = 'translate(-6rem,0)';
            blurBg.style.display = "none";
          }
          self.showLeftSlide = !self.showLeftSlide;
        }
      },
      selectTypeItem: function(index) {
        console.log("click:" + index);

        //侧边栏隐藏
        let navList = document.getElementById("nav-list");
        let menuIcon = document.getElementById("menu-icon");
        let blurBg = document.getElementById("blur-bg");
        navList.style.transform = 'translate(-100%,0)';
        menuIcon.style.transform = 'translate(-6rem,0)';
        blurBg.style.display = "none";
        this.showLeftSlide = !this.showLeftSlide;

        //定位指定类型条目
        let itemCatesDom=document.querySelectorAll('.group-name');
        document.documentElement.scrollTop=itemCatesDom[index].offsetTop;

      },
      resuestHomeData: function () {
        // GET /someUrl
        let self = this;
        this.$http.get(this.homeUrl).then(response => {
          self.homeData = response.body;
          console.log(self.homeData);

        }, response => {
          // error callback
          console.log('result-------------------');
          console.log('error');

        });
      },
     requestCartNum: function () {
       //http://a.itying.com/api/cartCount?uid=A001
       this.$http.get(this.cartNumUrl + this.uid).then(response => {
         console.log('cartNum:' + JSON.stringify(response.body));
         let resultData = response.body;
         if (resultData.success && resultData.result > 0) {
           this.dishNum = resultData.result;
         } else {
           this.dishNum = 0;
         }
       }, response => {

       });
     },
     goCart: function () {
       // this.$router.push({path:'pcontent',query: {'id': id}});
       this.$router.push({path:'cart'});
     }
    },mounted() {
      this.initLeftSlide();
      this.resuestHomeData();
      this.requestCartNum();
    },components: {
      "v-footer-nav": FooterNav
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

        a {
          color: #666;
          text-decoration: none;
        }
        img {
          width: 100%;
          height: 6.5rem;
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
    transform: translate(-100%,0);
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
    transform: translate(-6rem,0);
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

</style>
