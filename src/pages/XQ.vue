<template>
  <div>
    <el-carousel trigger="click" style="position: relative;">
      <el-carousel-item
        v-for="item in lunbo"
        :key="item"
        style="width:100%;height: 7.46667rem;background-color:#f7f8f9;"
      >
        <img :src="item" alt style="width:100%;height:100%;" />
      </el-carousel-item>
      <p class="price">￥ {{datalist.price}}</p>
    </el-carousel>
    <div class="con-main">
      <h2>{{datalist.tit}}</h2>
      <p>
        <i class="el-icon-toilet-paper"></i>
        <span style="margin-right:.26667rem;">{{datalist.tage}}</span>
        <i class="el-icon-location-outline"></i>
        <span style="color: #007aff;">{{datalist.info}}</span>
      </p>
      <p>
        <i class="el-icon-magic-stick"></i>
        <span>海岛度假 &nbsp;自然风光</span>
      </p>
      <el-divider></el-divider>
      <div class="main-bot">
        <div class="left">
          <div class="left-top">
            <h3>{{datalist.nickname}}</h3>
            <i class="el-icon-grape"></i>
            <div class="shenfen">
              <span>身份</span>
              <span style="color: #bbb;">已验证</span>
            </div>
          </div>
          <div class="xx">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
          </div>
          <div class="selfinf">
            <p>普通话导游 | 我能提供666种玩法</p>
            <p>回复率66%</p>
          </div>
        </div>
        <img
          :src="datalist.guipic"
          style="background-color:#58bc58width: 1.92rem;height: 1.92rem;border-radius: 50%;"
        />
      </div>
      <div class="tagenamelist">
        <el-tag type="info" effect="plain" class="tagename">专业翻译</el-tag>
        <el-tag type="info" effect="plain" class="tagename">环球旅行家</el-tag>
        <el-tag type="info" effect="plain" class="tagename">资深当地人</el-tag>
      </div>
    </div>
    <div class="space"></div>
    <div class="footer">
      <p style="border-right:1px solid #fff;">在线咨询</p>
      <p @click="putin">添加订单</p>
    </div>
    <el-menu
      v-if="this.switch"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#333"
      active-text-color="#ff5e69"
    >
      <el-menu-item index="1">行程介绍</el-menu-item>
      <el-menu-item index="2">预订信息</el-menu-item>
      <el-menu-item index="3">游客评价</el-menu-item>
    </el-menu>
    <el-menu
      v-else
      :default-active="activeIndex"
      class="el-menu-demo2"
      mode="horizontal"
      @select="handleSelect"
      text-color="#333"
      active-text-color="#ff5e69"
    >
      <el-menu-item index="1">行程介绍</el-menu-item>
      <el-menu-item index="2">预订信息</el-menu-item>
      <el-menu-item index="3">游客评价</el-menu-item>
    </el-menu>
    <div ref="xcjs" class="xcjs">
      <h2>行程亮点</h2>
      <p>
        经典蓝梦岛三点浮潜，拥抱梦幻玻璃海
        <br />环岛游，游山顶看蓝梦岛全景、梦幻海滩、魔鬼泪悬崖
      </p>
      <h2>行程概述</h2>
      <p>
        06:10开始 时长：60分钟 【机场接机-送至酒店】
        <br />行程起始时间和行驶时间仅作参考，具体接送时间以客人具体航班和酒店位置为准。
        <br />07:10开始 时长：110分钟 酒店接，乘车前往萨努尔码头，具体接送行驶时间以客人具体酒店位置为准。
        <br />09:00开始 时长：60分钟 乘快船驶离码头，前往蓝梦岛
        <br />10:00开始 时长：150分钟 【蓝梦岛海上玩乐项目】跟随工作人员前往活动地点，做相应准备活动，进行浮潜；游览红树林；观望爱之桥；
        <br />
        <br />【3个浮潜点为MANGROVE/WALL/JT,每个点浮潜30分钟(浮潜设备为一次性咬嘴)】
        <br />12:30开始 时长：60分钟 享用午餐，自理
        <br />13:00开始 时长：60分钟 自由活动
        <br />14:00开始 时长：120分钟 环岛游，游山顶看蓝梦岛全景、梦幻海滩、魔鬼泪悬崖
        <br />16:00开始 时长：60分钟 乘船返回巴厘岛码头
        <br />18:00开始 时长：60分钟 【酒店接客-送至机场】 行程起始时间和行驶时间仅作参考，具体接送时间以客人具体航班和酒店位置为准。
        <br />
      </p>
      <h2>行程安排</h2>
      <span class="el-icon-truck">&nbsp;&nbsp; 06:10开始 时长：60分钟 巴厘岛出发</span>
      <p>
        【机场接机-送至酒店】
        <br />行程起始时间和行驶时间仅作参考，具体接送时间以客人具体航班和酒店位置为准。
      </p>
      <span class="el-icon-truck">&nbsp;&nbsp; 07:10开始 时长：110分钟 巴厘岛出发</span>
      <p>酒店接，乘车前往萨努尔码头，具体接送行驶时间以客人具体酒店位置为准。</p>
      <span class="el-icon-truck">&nbsp;&nbsp; 09:00开始 时长：60分钟 巴厘岛出发</span>
      <p>乘快船驶离码头，前往蓝梦岛</p>
      <span class="el-icon-truck">&nbsp;&nbsp; 10:00开始 时长：150分钟 巴厘岛 蓝梦岛</span>
      <p>
        【蓝梦岛海上玩乐项目】跟随工作人员前往活动地点，做相应准备活动，进行浮潜；游览红树林；观望爱之桥；
        <br />
        <br />【3个浮潜点为MANGROVE/WALL/JT,每个点浮潜30分钟(浮潜设备为一次性咬嘴)】蓝梦岛是位于巴厘岛东南的一个小岛，岛上椰树茂盛，居民生活安详和乐。在蓝梦岛上可进行潜水、水上冲浪等活动。这里也是巴厘岛海藻养殖基地，蓝梦岛海水清澈无污染，水下生物放眼望去，清晰可见，观看当地种植海藻可选择清晨或者下午2-3点时分。这里的蘑菇海滩也不错，其他景点包括红树林、努沙切宁安岛，还可以眺望阿贡火山。
      </p>
      <p>
        <img src="../assets/imgs/xq1.png" alt style="width:100%;height:100%;" />
      </p>
      <p>
        <img src="../assets/imgs/xq2.png" alt style="width:100%;height:100%;" />
      </p>
      <p>
        <img src="../assets/imgs/xq3.png" alt style="width:100%;height:100%;" />
      </p>
      <span class="el-icon-tableware">&nbsp;&nbsp; 12:30开始 时长：60分钟 巴厘岛</span>
      <p>享用午餐，自理</p>
      <span class="el-icon-s-flag">&nbsp;&nbsp; 13:00开始 时长：60分钟 巴厘岛 蓝梦岛</span>
      <p>
        <img src="../assets/imgs/xq4.png" alt style="width:100%;height:100%;" />
      </p>
      <span class="el-icon-s-flag">&nbsp;&nbsp; 14:00开始 时长：120分钟 巴厘岛 梦幻海滩、魔鬼泪悬崖</span>
      <p>环岛游，游山顶看蓝梦岛全景、梦幻海滩、魔鬼泪悬崖必游景点之魔鬼泪崖与梦幻沙滩——魔鬼泪崖长得极像一颗大眼睛的弧形峭壁，天然的地理结构形成了壮观的巨浪，由巨浪冲击岩石形成的水雾将可看到条条彩虹，但千万不要靠近3米以内，因为巨浪会把人轻易带下海去，这可能是叫恶魔眼泪的原因。</p>
      <p>
        <img src="../assets/imgs/xq5.png" alt style="width:100%;height:100%;" />
      </p>
      <p>
        <img src="../assets/imgs/xq6.png" alt style="width:100%;height:100%;" />
      </p>
      <span class="el-icon-truck">&nbsp;&nbsp; 16:00开始 时长：60分钟 巴厘岛出发</span>
      <p>乘船返回巴厘岛码头</p>
      <span class="el-icon-truck">&nbsp;&nbsp; 18:00开始 时长：60分钟 巴厘岛出发</span>
      <p>【酒店接客-送至机场】 行程起始时间和行驶时间仅作参考，具体接送时间以客人具体航班和酒店位置为准。</p>
    </div>
    <div class="space"></div>
    <div ref="ydxx" class="ydxx">
      <h2>价格套餐</h2>
      <div class="taocan">
        <p>带车 5座车 普通话司机【双人套餐】</p>
        <span>￥{{datalist.price}} /次</span>
      </div>
      <el-collapse>
        <el-collapse-item title>
          <div class="collapse-con">
            <div>
              <span class="c-left">每日服务时长</span>
              <span class="c-right">10小时</span>
            </div>
            <div>
              <span class="c-left">每日里程数</span>
              <span class="c-right">50KM</span>
            </div>
            <div>
              <span class="c-left">价格包括</span>
              <span class="c-right">车辆使用费、燃油费、路桥费、停车费</span>
            </div>
            <div>
              <span class="c-left">额外费用：</span>
            </div>
            <div>
              <span class="c-left">超时服务费</span>
              <span class="c-right">30元/小时，达人会规定每天的固定服务时长，如超出这个服务时长，则需要向达人支付一定费用。</span>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
      <h2>预订须知</h2>
      <p>
        【套餐包含】含酒店到码头接送+接送机+双人船票
        <br />[2人以上预定，需补555元/人差价]
        <br />（行程接送机时间仅供参考，具体接送时间以客人航班和酒店位置为准）
        <br />
        <br />【价格适用时段】全年适用
        <br />
        <br />【接送区域】库塔(Kuta)/水明漾(Seminyak)/沙努尔(Sanur)/金巴兰(Jimbara)/努沙杜瓦(NusaDua)
        <br />
        <br />【接送机场】巴厘岛登巴萨国际机场
        <br />
        <br />【服务里程】套餐服务里程数仅供参考，具体以行程服务时间为准
      </p>
      <h2>可提供接待的车辆</h2>
      <p>5座车 可乘2人</p>
      <div style="padding-bottom: .4rem;">
        <img
          src="../assets/imgs/car.png"
          alt
          style="width: 2.90667rem;height: 2.90667rem;margin-right: .24rem;"
        />
        <img
          src="../assets/imgs/car.png"
          alt
          style="width: 2.90667rem;height: 2.90667rem;margin-right: .24rem;"
        />
        <img src="../assets/imgs/car.png" alt style="width: 2.90667rem;height: 2.90667rem;" />
      </div>
      <h2>退订政策</h2>
      <p>
        3日内（含第3日）服务退订政策
        <br />出发前7天以上（不含第7天）取消订单，可全额退款；
        <br />出发前72小时以上-7天内取消订单，扣除订单金额的30%
        <br />出发前24小时以上-72小时内取消订单，扣除订单金额的50%；
        <br />出发前24小时内取消订单，扣除订单金额的100%。
        <br />
        <br />3日以上（不含第3日）至7日内服务退订政策
        <br />出发前10天以上（不含第10天）取消订单，可全额退款；
        <br />出发前5天以上-10天内取消订单，扣除订单金额的30%；
        <br />出发前48小时以上-5天内取消订单，扣除订单金额的50%；
        <br />出发前48小时内取消订单，扣除订单金额的100%。
        <br />7日以上(不含第7日) 服务退订政策
        <br />出发前15天以上（不含第15天）取消订单，可全额退款；
        <br />出发前10天以上-15天内取消订单，扣除订单金额的30%
        <br />出发前5天以上-10天内取消订单，扣除订单金额的50%；
        <br />出发前5天内取消订单，扣除订单金额的100%。
        <br />
        <br />代订类服务退订说明
        <br />1）如游客需要达人代订当地酒店、门票等费用，达人与游客明确预订流程、费用细则和预订风险；
        <br />2）游客与达人达成共识后，代订费由游客提前支付平台，平台按照双方约定支付达人，达人提供预订凭证供游客备案；
        <br />3）如代订类服务产生退订，则按照第三方退订政策执行，达人需提供代订证明。若未实际支付，则代订费用全部退还；
        <br />4）由于不可抗力因素产生退订，请联系客服，协商处理。
        <br />
        <br />节假日（国内及国际法定节假日）退订政策
        <br />节假日期间订单，退订扣款比例或有调整，请提前与达人沟通确认。
      </p>
    </div>
    <div class="space"></div>
    <div ref="ykpj" class="ykpj">
      <h3>
        <span style="color:#ff5e69;">{{parseInt(datalist.comment)}}</span>
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
            <span>2019-10-11</span>
          </div>
          <div class="c-r-b">导游啦啦还是不错的，多数情况下会为游客着想，只是由于口味问题，有时候推荐餐馆不和国人口味，达人中文特别好，游玩项目比携程便宜，值得推荐</div>
          <div class="c-r-f">yuni团队为您打造轻松自由的巴厘岛之旅</div>
        </div>
      </div>
      <h2>达人的其他服务</h2>
      <div
        class="other"
        v-for="item in datalist2"
        :key="item._id"
        @click="goto(item._id,item.tage)"
      >
        <img :src="item.imgurl" alt style="background-color:#58bc58;" />
        <div class="o-con">
          <h5>{{item.tit}}</h5>
          <p>￥ {{item.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      lunbo: [],
      datalist: [],
      datalist2: [],
      switch: true,
      xcjs: "",
      ydxx: "",
      ykpj: ""
    };
  },
  created() {
    let { id, coll, tage } = this.$route.query;
    this.getdata(id, coll, tage);
    window.scrollTo(0, 0);
  },
  beforeRouteUpdate(to, from, next) {
    // console.log("beforeRouteUpdate:", to, from);
    if (to.query.id != from.query.id) {
      this.getdata(to.query.id, to.query.coll, to.query.tage);
      window.scrollTo(0, 0);
    }
    next();
  },
  mounted() {
    this.xcjs = this.$refs.xcjs.offsetTop;
    this.ydxx = this.$refs.ydxx.offsetTop;
    this.ykpj = this.$refs.ykpj.offsetTop;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async putin() {
      let { data } = await this.$axios.get("http://localhost:1907/cart/", {
        params: {
          _id: this.datalist._id
        }
      });
      // window.console.log(data);
      if (data.data.length === 0) {
        let { data: data2 } = await this.$axios.post(
          "http://localhost:1907/cart/",
          {
            query: this.datalist
          }
        );
        window.console.log(data2);
      } else {
        this.open();
      }
    },
    open() {
      this.$confirm("已经在订单中了哦~", "提示", {
        confirmButtonText: "跳去列表页",
        cancelButtonText: "留在本页",
        type: "warning"
      })
        .then(() => {
          this.$router.push({
            name: "list2",
            params: { id: this.datalist.tage }
          });
        })
        .catch(() => {});
    },
    async getdata(id, coll, tage) {
      let { data } = await this.$axios.get("http://localhost:1907/goods/xq/", {
        params: {
          id: id,
          coll: coll,
          tage: tage
        }
      });
      // window.console.log(data.data);
      data.data.forEach(item => {
        item.imgurl = item.imgurl.replace("../", "");
        item.imgurl = require("../" + item.imgurl);
        item.guipic = item.guipic.replace("../", "");
        item.guipic = require("../" + item.guipic);
        // window.console.log(item.imgurl);
      });
      this.datalist = data.data[0];
      this.lunbo = [
        this.datalist.imgurl,
        require("../assets/imgs/lb1.jpg"),
        require("../assets/imgs/lb3.png"),
        require("../assets/imgs/lb4.jpg"),
        require("../assets/imgs/lb5.jpg")
      ];
      // window.console.log(this.datalist);
      this.getdata2(this.datalist.nickname, this.datalist._id);
    },
    handleScroll() {
      // console.log(this.$refs);
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = 0;
      if (scrollTop < this.xcjs - 100) {
        this.switch = true;
      } else {
        this.switch = false;
      }
      if (scrollTop >= this.ykpj - 120) {
        this.activeIndex = "3";
      } else if (scrollTop >= this.ydxx - 110) {
        this.activeIndex = "2";
      } else if (scrollTop >= this.xcjs - 110) {
        this.activeIndex = "1";
      }
    },
    handleSelect(key) {
      if (key == 1) {
        window.scrollTo(0, this.xcjs - 88);
      } else if (key == 2) {
        window.scrollTo(0, this.ydxx - 100);
      } else if (key == 3) {
        window.scrollTo(0, this.ykpj - 100);
      }
    },
    async getdata2(nickname, id) {
      let { data } = await this.$axios.get(
        "http://localhost:1907/goods/other",
        {
          params: {
            nickname: nickname
          }
        }
      );
      window.console.log(data.data);
      data.data.forEach((item, index) => {
        item.imgurl = item.imgurl.replace("../", "");
        item.imgurl = require("../" + item.imgurl);
        item.guipic = item.guipic.replace("../", "");
        item.guipic = require("../" + item.guipic);
        if (item._id == id) {
          data.data.splice(index, 1);
        }
        // window.console.log(item.imgurl);
      });
      this.datalist2 = data.data;
      // window.console.log(this.datalist2);
    },
    goto(id, tage) {
      this.$router.push({
        path: "/xq",
        query: { id, tage, coll: "tour" }
      });
    }
  }
};
</script>
<style scoped>
.el-menu-demo2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.ykpj .other .o-con p {
  font-size: 0.48rem;
  color: #ff5e69;
}
.ykpj .other .o-con h5 {
  width: 5.333333rem;
  font-weight: 400;
  font-size: 0.42667rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.ykpj .other .o-con {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.ykpj .other img {
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 0.4rem;
}
.ykpj .other {
  padding-top: 0.4rem;
  display: flex;
}
.ykpj h2 {
  padding-top: 0.4rem;
  font-size: 0.48rem;
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
  color: #ffc70f;
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
  padding: 0.32rem 0;
}
.comment .com-right {
  width: 100%;
}
.comment .com-right .c-r-h {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.ykpj h3 {
  text-align: center;
  margin-top: 0.21333rem;
  padding-bottom: 0.08rem;
  font-size: 0.48rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.ykpj h3 p {
  color: #ffc70f;
}
.ykpj {
  padding: 0 0.4rem;
  border-bottom: 2rem solid #f7f5f5;
  padding-bottom: 0.4rem;
}
.ydxx {
  padding: 0 0.4rem;
}
.collapse-con {
  margin-top: 0.21333rem;
  background-color: #f7f5f5;
}
.collapse-con div {
  display: flex;
  white-space: nowrap;
  padding: 0.24rem 0.4rem;
  font-size: 0.37333rem;
  line-height: 1.4;
}
.collapse-con div .c-left {
  flex: 1;
  color: #888;
}
.collapse-con div .c-right {
  flex: 2;
  word-break: break-word;
  white-space: pre-wrap;
}
.ydxx .taocan {
  display: flex;
  padding: 0.4rem 0;
}
.ydxx .taocan span {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 5.33333rem;
  -ms-flex: 1 1 5.33333rem;
  flex: 1 1 5.33333rem;
  font-size: 0.42667rem;
  color: #ff5e69;
  white-space: nowrap;
  text-align: right;
}
.ydxx .taocan p {
  padding: 0;
  padding-right: 0.4rem;
  line-height: 1.4;
  font-size: 0.4rem;
  color: #333;
}
.ydxx p {
  padding: 0.4rem 0;
  font-size: 0.4rem;
}
.ydxx h2 {
  padding-top: 0.4rem;
  font-size: 0.48rem;
}
.xcjs span {
  padding-top: 0.4rem;
  font-size: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  color: #ff5e69;
}
.xcjs p {
  padding: 0.4rem;
  font-size: 0.4rem;
}
.xcjs h2 {
  padding-top: 0.4rem;
  padding-left: 0.4rem;
  font-size: 0.48rem;
}
.price {
  position: absolute;
  z-index: 100;
  padding: 0.08rem 0.32rem 0.08rem 0.24rem;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  bottom: 0.53333rem;
  color: #fff;
  font-size: 0.48rem;
}
.con-main {
  padding: 0.4rem;
}
.con-main h2 {
  padding-bottom: 0.16rem;
  color: #333;
  font-size: 0.48rem;
  font-weight: 700;
}
.con-main p i {
  width: 0.4rem;
  height: 0.4rem;
  font-size: 0.4rem;
  vertical-align: middle;
  margin: 0.08rem;
  color: #888;
  line-height: 1.5;
}
.con-main p span {
  vertical-align: middle;
  color: #888;
  font-size: 0.37333rem;
  line-height: 1.5;
}
.main-bot {
  display: flex;
  justify-content: space-between;
}
.main-bot .left .left-top h3 {
  font-size: 0.42667rem;
  font-family: sans-serif;
  line-height: 1.5;
  color: #333;
  vertical-align: middle;
  display: inline-block;
}
.main-bot .left .left-top .el-icon-grape {
  margin-right: 0;
  margin-left: 0.08rem;
  width: 0.58667rem;
  height: 0.58667rem;
  font-size: 0.58667rem;
  display: inline-block;
  vertical-align: middle;
  color: #ff5e69;
}
.main-bot .left .left-top .shenfen {
  display: inline-block;
  vertical-align: middle;
}
.main-bot .left .left-top .shenfen span {
  display: block;
  font-size: 0.26667rem;
  line-height: 1;
}
.main-bot .left .xx .el-icon-star-on {
  width: 0.42rem;
  height: 0.5rem;
  font-size: 0.5rem;
  color: #ffc70f;
}
.main-bot .left .selfinf p {
  color: #888;
  font-size: 0.37333rem;
  line-height: 1.5;
}
.tagenamelist {
  margin-top: 0.29333rem;
  text-align: center;
}
.tagenamelist .tagename {
  margin-right: 0.24rem;
  padding: 0.08rem 0.24rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  color: #bbb;
  line-height: 1.5;
}
.space {
  height: 0.4rem;
  background-color: #f7f5f5;
}
.footer {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  display: flex;
  width: 100%;
  font-size: 0.42667rem;
  background-color: #ff5e69;
  line-height: 1.2rem;
}
.footer p {
  color: #fff;
  flex: 1;
  text-align: center;
}
.el-menu-demo {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>