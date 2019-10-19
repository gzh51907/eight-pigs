<template>
  <div>
    <div class="nav">
      <img src="../assets/imgs/common/logo.webp" alt />
      <ul>
        <li @click="gotoindex">首页</li>
        <li>目的地</li>
        <li>咨询</li>
        <li>关于我们</li>
      </ul>
    </div>
    <div class="con-main">
      <div class="c-head">
        <img :src="datalist.imgurl" alt />
        <div class="info">
          <h2>{{datalist.human}}</h2>
          <div v-if="datalist.guide" class="tages">{{datalist.guide}}</div>
        </div>
      </div>
      <h3>{{datalist.des}}</h3>
      <p class="line"></p>
      <ul class="verification">
        <li>
          <i class="el-icon-user"></i>
          <div class="yz">
            <p>身份</p>
            <p style="color: #9a9a9a;">已验证</p>
          </div>
        </li>
        <li>
          <i class="el-icon-mobile-phone"></i>
          <div class="yz">
            <p>手机</p>
            <p style="color: #9a9a9a;">已验证</p>
          </div>
        </li>
        <li style="border-right: none;">
          <i class="el-icon-tickets"></i>
          <div class="yz">
            <p>邮箱</p>
            <p style="color: #9a9a9a;">已验证</p>
          </div>
        </li>
      </ul>
      <ul class="count">
        <li style="border-left:none">
          <h4>浏览数</h4>
          <p>66666</p>
        </li>
        <li>
          <h4>评价数</h4>
          <p>777</p>
        </li>
        <li>
          <h4>回复率</h4>
          <p>99%</p>
        </li>
      </ul>
      <div
        class="intro"
      >您好，我叫Yuni，我来自印度尼西亚的巴厘岛，我在巴厘岛有旅游公司，并且有8年的接待中国游客的经历，并能解决相关的问题。也因为有一个训练有素的团队，所以我们保证您将获得最好的巴厘岛服务。并且让您在此的旅程更有趣，使您能永远铭记。</div>
    </div>
    <div class="con-comment">
      <h3>
        <span>{{parseInt(datalist.comment)}}</span>
        <span>条评价</span>
        <p>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
        </p>
      </h3>
      <div class="comment">
        <el-avatar
          :size="50"
          icon="el-icon-user-solid"
          style="background-color:#ff5e69;margin-right:.4rem;flex-shrink: 0;"
        ></el-avatar>
        <div class="com-right">
          <div class="c-r-h">
            <h6>
              李迪
              <p>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
              </p>
            </h6>
            <span class="el-icon-time">2019-10-11</span>
          </div>
          <div class="c-r-b">导游啦啦还是不错的，多数情况下会为游客着想，只是由于口味问题，有时候推荐餐馆不和国人口味，达人中文特别好，游玩项目比携程便宜，值得推荐</div>
          <div class="c-r-f">yuni团队为您打造轻松自由的巴厘岛之旅</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p style="border-right:1px solid #fff;">在线咨询</p>
      <p>咨询达人</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: []
    };
  },
  created() {
    let { id, coll } = this.$route.query;
    this.getdata(id, coll);
    window.scrollTo(0, 0);
  },
  methods: {
    async getdata(id, coll) {
      let { data } = await this.$guowei.get("/goods/xq/", {
        params: {
          id: id,
          coll: coll
        }
      });
      // window.console.log(data.data);
      data.data.forEach(item => {
        item.imgurl = item.imgurl.replace("../", "");
        item.imgurl = require("../" + item.imgurl);
        // window.console.log(item.imgurl);
      });
      data.data[0].guide = data.data[0].guide.split(",").join(" | ");
      this.datalist = data.data[0];
      window.console.log(this.datalist);
    },
    gotoindex() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
.footer {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  display: flex;
  width: 100%;
  font-size: 0.42667rem;
  background-color: #ff5e69;
  opacity: 0.9;
  line-height: 1.2rem;
}
.footer p {
  color: #fff;
  flex: 1;
  text-align: center;
}
.comment .com-right .c-r-f {
  padding: 0.24rem 0;
  font-size: 0.32rem;
  color: #999;
}
.comment .com-right .c-r-b {
  margin-top: 0.32rem;
  font-size: 0.37333rem;
  line-height: 1.5;
  color: #333;
}
.comment .com-right .c-r-h h6 p {
  color: #ff5e69;
}
.comment .com-right .c-r-h span {
  font-size: 0.32rem;
  color: #999;
}
.comment .com-right .c-r-h h6 {
  flex: 2;
  font-size: 0.37333rem;
  line-height: 1.5;
}
.comment {
  display: flex;
  padding: 0.32rem 0.4rem;
}
.comment .com-right {
  width: 100%;
}
.comment .com-right .c-r-h {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.con-comment h3 {
  text-align: center;
  margin-top: 0.21333rem;
  font-size: 16px;
  text-align: center;
  background-color: #f2f2f2;
  padding: 8px;
}
.con-comment h3 p {
  font-size: 24px;
  color: #ff5e69;
}
.con-comment {
  border-bottom: 2rem solid #f7f5f5;
  padding-bottom: 0.4rem;
}
.intro {
  background-color: #fff;
  font-size: 14px;
  color: #666;
  line-height: 1.5em;
  padding: 15px;
  text-align: left;
}
.count li p {
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  color: #000;
}
.count li h4 {
  font-size: 12px;
  color: #5a5a5a;
  line-height: 14px;
}
.count li {
  width: 33%;
  border-left: 1px solid #ccc;
}
.count {
  background-color: #f9f9f9;
  border: 1px solid #e9e9e9;
  position: relative;
  height: 44px;
  display: table;
  width: 100%;
  padding: 5px 0;
  display: flex;
}
.verification .yz {
  display: inline-block;
}
.verification i {
  color: #53c5fb;
  height: 30px;
  font-size: 23px;
  line-height: 30px;
}
.verification li {
  width: 33.33%;
  border-right: 1px solid #ccc;
  display: inline-block;
  text-align: left;
  font-size: 12px;
  padding-left: 10px;
  margin-bottom: 10px;
}
.verification {
  display: flex;
  padding: 15px 10px;
  background-color: #fff;
}
.con-main .line {
  width: 115px;
  border-bottom: 1px solid #ccc;
  height: 1px;
  display: inline-block;
}
.con-main h3 {
  font-size: 14px;
  color: #666;
}
.con-main .c-head .info .tages {
  font-size: 12px;
  background-color: #fff;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 14px;
  margin: 10px 0 8px;
  color: #333;
  border: 1px solid #ccc;
}
.con-main .c-head .info {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  min-height: 62px;
}
.con-main .c-head .info h2 {
  font-size: 18px;
  color: #fff;
  text-shadow: 2px 2px 5px #999;
}
.con-main .c-head {
  position: relative;
  padding-bottom: 22px;
}
.con-main .c-head img {
  width: 100%;
  background-color: #c0d0e0;
}
.con-main {
  padding-top: 48px;
  width: 100%;
  text-align: center;
}
.nav {
  width: 100%;
  padding: 0 0 0 10px;
  display: flex;
  justify-content: space-between;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
}
.nav ul li {
  margin-right: 10px;
  color: #666;
  padding: 0 3px;
  height: 48px;
  line-height: 48px;
}
.nav ul {
  display: flex;
  font-size: 16px;
}
.nav img {
  margin-top: 14px;
  width: 92px;
  height: 20px;
}
</style>