<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-submenu index="1" style="width:25%;">
        <template slot="title">{{mdd}}</template>
        <el-menu-item index="1-1" @click="selectmdd('中国')">中国</el-menu-item>
        <el-menu-item index="1-2" @click="selectmdd('印度尼西亚')">印度尼西亚</el-menu-item>
        <el-menu-item index="1-3" @click="selectmdd('越南')">越南</el-menu-item>
        <el-menu-item index="1-4" @click="selectmdd('新加坡')">新加坡</el-menu-item>
        <el-menu-item index="1-5" @click="selectmdd('柬埔寨')">柬埔寨</el-menu-item>
        <el-menu-item index="1-6" @click="selectmdd('菲律宾')">菲律宾</el-menu-item>
        <el-menu-item index="1-7" @click="selectmdd('泰国')">泰国</el-menu-item>
        <el-menu-item index="1-8" @click="selectmdd('西班牙')">西班牙</el-menu-item>
        <el-menu-item index="1-9" @click="selectmdd('日本')">日本</el-menu-item>
      </el-submenu>
      <el-submenu index="2" style="width:25%;">
        <template slot="title">{{guide}}</template>
        <el-menu-item index="2-1" @click="selectgui('当地向导')">当地向导</el-menu-item>
        <el-menu-item index="2-2" @click="selectgui('机场接送')">机场接送</el-menu-item>
        <el-menu-item index="2-3" @click="selectgui('一日游')">一日游</el-menu-item>
      </el-submenu>
      <el-submenu index="3" style="width:25%;">
        <template slot="title">{{order}}</template>
        <el-menu-item index="3-1" @click="selectord('综合排序')">综合排序</el-menu-item>
        <el-menu-item index="3-2" @click="selectord('价格从低到高')">价格从低到高</el-menu-item>
        <el-menu-item index="3-3" @click="selectord('价格从高到低')">价格从高到低</el-menu-item>
      </el-submenu>
      <el-submenu index="4" style="width:25%;">
        <template slot="title">筛选</template>
        <h2 style="padding:8px;">价格范围</h2>
        <el-menu-item index="4-1" @click="selectran({xy:499})">0-499</el-menu-item>
        <el-menu-item index="4-2" @click="selectran({dy:500,xy:999})">500-999</el-menu-item>
        <el-menu-item index="4-3" @click="selectran({dy:1000,xy:1499})">1000-1499</el-menu-item>
        <el-menu-item index="4-4" @click="selectran({dy:1500,xy:1999})">1500-1999</el-menu-item>
        <el-menu-item index="4-5" @click="selectran({dy:2000,xy:2499})">2000-2499</el-menu-item>
        <el-menu-item index="4-6" @click="selectran({dy:2500})">2500+</el-menu-item>
      </el-submenu>
    </el-menu>
    <section style="padding: 0.48rem;">
      <div
        class="con-list"
        v-for="item in listdata"
        :key="item._id"
        ref="scoele"
        @click="goto(item._id)"
      >
        <div class="con-ban">
          <el-image :src="item.imgurl" style="width:100%;height:100%;"></el-image>
          <p>￥ {{item.price}}</p>
        </div>
        <div class="con-main">
          <div class="left">
            <p>{{item.tit}}</p>
            <span class="el-icon-bicycle">{{item.tage}}</span>
            <span class="el-icon-location-information">{{item.info}}</span>
            <div class="con-comm">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <span class="comment">{{item.comment}}</span>
            </div>
          </div>
          <div class="right">
            <el-image
              :src="item.guipic"
              style="width: 1.6rem;border-radius:50%;background-color: #58bc58;"
            ></el-image>
            <p>{{item.nickname}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mdd: "目的地",
      guide: "当地向导",
      order: "综合排序",
      pages: 0,
      sort: 0,
      des: 0,
      tage: "",
      dy: 0,
      xy: 0,
      listdata: [],
      timer: null
    };
  },
  created() {
    let { id } = this.$route.params;
    this.tage = id;
    this.guide = id;
    this.getdata();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async getdata() {
      let { data } = await this.$axios.get("http://localhost:1907/goods/tour", {
        params: {
          num: 20,
          pages: this.pages,
          sort: this.sort,
          des: this.des,
          tage: this.tage,
          dy: this.dy,
          xy: this.xy
        }
      });
      window.console.log(data.data);
      // data.data.imgurl = require(data.data.imgurl);
      data.data.forEach(item => {
        item.imgurl = item.imgurl.replace("../", "");
        item.imgurl = require("../" + item.imgurl);
        item.guipic = item.guipic.replace("../", "");
        item.guipic = require("../" + item.guipic);
        // window.console.log(item.imgurl);
      });
      this.listdata = data.data;
      window.console.log(this.listdata);
    },
    async handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = 0;
      this.$refs.scoele.map((item, index) => {
        if (index === this.$refs.scoele.length - 1) {
          offsetTop = this.$refs.scoele[index].offsetTop;
        }
      });
      // window.console.log(scrollTop + "," + offsetTop);
      if (scrollTop + 550 >= offsetTop) {
        clearTimeout(this.timer);
        this.timer = setTimeout(async () => {
          this.pages += 1;
          let { data } = await this.$axios.get(
            "http://localhost:1907/goods/tour",
            {
              params: {
                num: 20,
                pages: this.pages,
                sort: this.sort,
                des: this.des,
                tage: this.tage,
                dy: this.dy,
                xy: this.xy
              }
            }
          );
          // data.data.imgurl = require(data.data.imgurl);
          data.data.forEach(item => {
            item.imgurl = item.imgurl.replace("../", "");
            item.imgurl = require("../" + item.imgurl);
            // window.console.log(item.imgurl);
            item.guipic = item.guipic.replace("../", "");
            item.guipic = require("../" + item.guipic);
            this.listdata.push(item);
          });
          window.console.log(this.listdata);
        }, 1000);
      }
    },
    selectmdd(val) {
      this.pages = 0;
      this.mdd = val;
      this.des = val;
      this.getdata();
    },
    selectgui(id) {
      this.guide = id;
      this.tage = id;
      this.pages = 0;
      this.dy = 0;
      this.xy = 0;
      this.des = 0;
      this.sort = 0;
      if (id == "当地向导") {
        this.$router.push({ name: "list" });
      } else {
        this.$router.push({ name: "list2", params: { id } });
        this.getdata();
      }
    },
    selectord(val) {
      this.pages = 0;
      this.order = val;
      if (this.order === "价格从高到低") {
        this.sort = -1;
      } else if (this.order === "价格从低到高") {
        this.sort = 1;
      } else {
        this.sort = 0;
      }
      this.getdata();
    },
    selectran({ dy, xy }) {
      this.pages = 0;
      this.dy = dy;
      this.xy = xy;
      this.getdata();
    },
    goto(id) {
      this.$router.push({
        name: "xq",
        params: { id, tage: this.tage, coll: "tour" }
      });
    }
  }
};
</script>
<style scoped>
.con-list .con-ban {
  position: relative;
  width: 9.2rem;
  height: 6.89333rem;
  background-color: #f2f3f3;
}
.con-list .con-ban p {
  position: absolute;
  left: 0;
  bottom: 0.32rem;
  background: rgba(0, 0, 0, 0.76);
  width: 2.77333rem;
  height: 0.98667rem;
  line-height: 0.98667rem;
  text-align: center;
  font-size: 0.48rem;
  color: #fff;
}
.con-list .con-main {
  display: flex;
  padding: 0.346667rem 0;
  justify-content: space-between;
}
.con-list .con-main .left p {
  font-size: 0.42667rem;
}
.con-list .con-main .left .el-icon-bicycle,
.con-list .con-main .left .el-icon-location-information {
  height: 0.666667rem;
  line-height: 0.666667rem;
  font-size: 0.4rem;
  margin: 0.08rem 0;
  color: #888;
  margin-right: 0.266667rem;
}
.con-list .con-main .left .el-icon-star-on {
  width: 0.4rem;
  height: 0.4rem;
  color: #ffc70f;
}
.con-list .con-main .left .comment {
  margin-left: 0.26667rem;
  color: #888;
  line-height: 1.5;
}
.con-list .con-main .right {
  text-align: center;
}
</style>