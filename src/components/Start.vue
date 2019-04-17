<template>
  <div id="start">
    <div class="start-header">
      <img src="../assets/images/canju.png" alt="餐具图标"> 用餐人数
    </div>

    <div class="notice">请选择正确的用餐人数,小二马上给您送餐</div>

    <div class="content">
      <ul class="users-list">
        <li><span>1人</span></li>
        <li><span>2人</span></li>
        <li><span>3人</span></li>
        <li><span>4人</span></li>
        <li><span>5人</span></li>
        <li><span>6人</span></li>
        <li><span>7人</span></li>
        <li><span>8人</span></li>
        <li><span>9人</span></li>
        <li><span>10人</span></li>
        <li><span>11人</span></li>
        <li><span>12人</span></li>
      </ul>
    </div>

    <router-link to="/home">
      <div class="start"><span>开始点餐</span></div>
    </router-link>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        msg: '我是开始页面'
      }
    }, mounted() {
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

  .users-list {
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
      top: 2rem;
      color: white;
      display: block;
      text-align: center;
      margin: 0 auto;
    }


  }
</style>
