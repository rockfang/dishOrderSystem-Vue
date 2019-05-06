<template>
  <div id="start">
    <div class="start-header">
      <img src="../assets/images/canju.png" alt="餐具图标"> 修改用餐信息
    </div>

    <div class="notice">请选择正确的用餐人数,小二马上给您送餐</div>

    <div class="content">
      <ul class="users-list">
        <li v-for="people in userList" :class="{'active':parseFloat(pNumber) == people}"><span>{{people}}人</span></li>
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

    <div class="cancel-modify" @click="cancelModify()"><span>取消修改</span></div>
    <div class="complete-modify" @click="completeModify()"><span>修改完成</span></div>
  </div>
</template>
<script>

  import globalUrl from '../module/Config.js'
  import StorageTool from '../module/StorageTool.js'

  export default {
    data() {
      return {
        baseUrl: globalUrl.basic_url,
        pNumber: '1人',
        userList:[],
        extraClaim: '',
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

        //为提示要求添加事件
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
      initPeopleInfo: function () {
        let pInfoUrl = this.baseUrl + '/api/peopleInfoList?uid=' + this.uid;
        this.$http.get(pInfoUrl).then(response => {
          console.log('pInfoUrl:' + JSON.stringify(response.body));
          if (response.body.success) {
            this.pNumber = response.body.result[0].p_num;
            this.extraClaim = response.body.result[0].p_mark;
          }
        },response => {

        });

      },
      cancelModify: function () {
        this.$router.push({path:'cart'});
      },
      completeModify: function () {
        console.log('completeModify:' + this.pNumber);

        this.$http.post(this.baseUrl + '/api/addPeopleInfo',{
          uid: this.uid,
          p_num: this.pNumber,
          p_mark: this.extraClaim
        }).then(response => {
          console.log('completeModify:' + JSON.stringify(response.body));
          this.$router.push({path:'cart'});

        },response => {

        });
      }
    },mounted() {
      for (let i=0; i < 12; i++) {
        this.userList.push(i+1);
      }
      this.initPeopleInfo();
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

  .cancel-modify {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: red;
    position: fixed;
    bottom: 4rem;
    left: 15%;

    span {
      position: relative;
      top: .7rem;
      color: white;
      display: block;
      text-align: center;
      width: 2rem;
      margin: 0 auto;

    }
  }
  .complete-modify {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: red;
    position: fixed;
    bottom: 4rem;
    right: 15%;

    span {
      position: relative;
      top: .7rem;
      color: white;
      display: block;
      text-align: center;
      width: 2rem;
      margin: 0 auto;

    }
  }
</style>
