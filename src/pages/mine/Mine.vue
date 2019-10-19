<template >
  <div id="box">
    <div class="topbox">
      <el-row class="demo-avatar demo-basic">
        <el-col :span="24">
          <div class="demo-basic--circle">
            <div class="block" @click="where('/login')" id="userma">
              <el-avatar :size="50" class="myicon">
                <img
                  src="https://pic.8pig.com/avatar/default/no_login_avatar.jpg@112w_112h__1e_1c.webp"
                />
              </el-avatar>
              <div type="text" class="logincol">{{hello}}</div>
            </div>
          </div>
        </el-col>
      </el-row>

      <div class="listbox">
        <ul>
          <li class="listhah">
            <img src="../../img/love.png" alt />
            <span class="demonstration">我的收藏</span>
          </li>
          <li class="listhah">
            <img src="../../img/order.png" alt />
            <span class="demonstration">我的订单</span>
          </li>
          <li class="listhah">
            <img src="../../img/umbrella.png" alt />
            <span class="demonstration">我的保单</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="contlist">
      <div class="contlistmine">
        我的优惠券
        <span class="el-icon-arrow-right icon"></span>
      </div>
      <div class="contlistmine">
        邀请好友，立享优惠
        <span class="el-icon-arrow-right icon"></span>
      </div>
      <div class="contlistmine">
        联系客户
        <span class="el-icon-arrow-right icon"></span>
      </div>
    </div>

    <div class="contlist">
      <div class="contlistmine">
        下载八只小猪app
        <span class="el-icon-arrow-right icon"></span>
      </div>
      <div class="contlistmine">
        成为达人，赚取百万佣金
        <span class="el-icon-arrow-right icon"></span>
      </div>
      <div class="contlistmine">
        关于我们
        <span class="el-icon-arrow-right icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: "点击登录"
    };
  },
  created() {
    try {
      let { age } = JSON.parse(localStorage.getItem("user"));
      if (age) {
        this.hello = age;
      }
    } catch (err) {
    }
  },
  methods: {
    where(path) {
      this.$router.push(path);
    },
    user() {}
  }
};
</script>

<style lang="scss" scoped>
ul li {
  padding: 0;
  margin: 0;
  list-style: none;
}

#box {
  width: 100%;
  height: 100%;
}

.topbox {
  margin-bottom: 20px;
  .demo-basic--circle {
    background: url(https://pic.8pig.com/img/h5/new/my/bg.png) 0 0 no-repeat;
    background-size: cover;
  }
  .el-col .el-col-8 {
    width: 200px;
  }

  .listbox {
    width: 100%;
    height: 80px;

    .listhah {
      margin: 0 5%;
      width: 73px;
      text-align: center;
      float: left;

      img {
        width: 62px;
        height: 54px;
      }

      .demonstration {
        color: #ddd;
        font-size: 12px;
      }
    }
  }

  .myicon {
    margin-top: 60px;
    margin-left: 60px;
    position: relative;
  }
  .demo-basic {
    width: 100%;
  }
  #userma {
    width: 100%;
    height: 130px;
    padding-bottom: 30px;
  }

  .logincol {
    display: inline-block;
    color: #fff;
    font-size: 22px;
    line-height: 40px;
    position: absolute;
    top: 62px;
    left: 122px;
  }
}

.contlist {
  width: 100%;
  margin-bottom: 30px;
  background-color: rgba(252, 233, 233, 0.253);

  .contlistmine {
    padding: 37px 8px 0 8px;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    font-size: 18px;
    color: #333;
    border-bottom: 1px solid #fff;
  }
}
</style>
