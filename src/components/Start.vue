<template>
  <div id="start">
    <div class="start-header">
      <img src="../assets/images/canju.png" alt="餐具图标"> 用餐人数
    </div>

    <div class="notice">请选择正确的用餐人数,小二马上给您送餐</div>

    <div class="content">
      <ul class="users-list">
        <li v-for="people in userList"><span>{{people}}人</span></li>
      </ul>
    </div>

    <div class="extra-claim">
      <input type="text" placeholder="请输入您的口味，忌口等（可以不填写)" v-model="extraClaim">
    </div>

    <ul class="tips-list">
      <li><span>不要香菜</span></li>
      <li><span>一点点辣</span></li>
      <li><span>不要辣</span></li>
    </ul>

    <div class="start" @click="startOrder()"><span>开始点餐</span></div>
  </div>
</template>
<script>

  import globalUrl from '../module/Config.js'
  import StorageTool from '../module/StorageTool.js'
  export default {
    data() {
      return {
        saveOrderUrl: globalUrl.basic_url + '/api/addPeopleInfo',
        pNumber: '1人',
        extraClaim: '',
        userList:[],
        uid: StorageTool.get('roomid')
      }
    },methods: {
      addEventListener: function () {
        //为选择人数添加事件
        let self = this;
        let userLis = document.querySelectorAll('.users-list li');
        let length = userLis.length;
        for(let i=0; i < length;i++) {
          userLis[i].onclick = function () {
            for (let j = 0; j < length; j++) {
              userLis[j].className = '';
            }
            this.className = 'active';
            self.pNumber = this.querySelector('span').innerHTML.trim();
            console.log(self.pNumber);
          }
        }
        userLis[0].className = 'active';

        //为提示要求添加事件
        document.querySelector('.tips-list')
        let tipsLis = document.querySelectorAll(".tips-list li");
        let tipsLength = tipsLis.length;
        for (let i = 0; i < tipsLength; i++) {
          tipsLis[i].onclick = function () {
            for (let j = 0; j < tipsLength; j++) {
              tipsLis[j].className = '';
            }
            this.className = 'active';
            self.extraClaim = self.extraClaim + ' ' + this.querySelector('span').innerHTML.trim()

          }
        }
      },
      startOrder: function () {
        this.$http.post(this.saveOrderUrl,{
          uid: this.uid,
          p_num: this.pNumber,
          p_mark: this.extraClaim
        }).then(response => {
          console.log(JSON.stringify(response.body));
          //this.$router.push('/home');
          this.$router.push({path:'home'});

        },response => {

        });
      }
    },mounted() {
      for (let i=0; i < 12; i++) {
        this.userList.push(i+1);
      }
      //this.addEventListener();
      //数据没有渲染完成，就去获取dom节点

      //数据渲染完成再去获取
      this.$nextTick(function () {
        this.addEventListener();
      });

    }
  }
</script>
<style lang="scss">
  .start-header {
    background-color: #000000;
    width: 10rem;
    height: 3.2rem;
    line-height: 3.2rem;
    margin: 5rem auto 0 auto;
    color: #FFFFFF;
    border-radius: .5rem;

    img {
      width: 2.2rem;
      height: 2.2rem;
      position: relative;
      top: .5rem;
      margin-left: 1rem;
    }
  }

  .notice {
    text-align: center;
    color: red;
    padding-top: 3rem;
  }

  .users-list, .tips-list {
    display: flex;
    flex-wrap: wrap;
    padding: .5rem;

    li {
      width: 25%;
      box-sizing: border-box;
      padding: .5rem;
      text-align: center;

      span {
        border: 1px solid #ccc;
        border-radius: .4rem;
        display: block;
        width: 100%;
        height: 5rem;
        line-height: 5rem;
        background-color: #ffffff;
      }
    }

    /*如果点中间没有空格：li.active{color:red;}*/
    /*是选择类名为 active 的 li 对其生效*/
    li.active{
      span{
        background: red;
        border: 1px solid red;
        color:#fff;
      }
    }
  }

  .extra-claim {
    padding: 0 1rem;
    input {
      width: 100%;
      height: 3rem;
      padding-left: .5rem;
      box-sizing: border-box;
    }
  }
  .start {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: red;
    position: fixed;
    bottom: 5rem;
    left: 50%;
    margin-left: -3rem;

    span {
      position: relative;
      top: 1.5rem;
      color: white;
      display: block;
      text-align: center;
      width: 2.5rem;
      margin: 0 auto;
    }
  }
</style>
