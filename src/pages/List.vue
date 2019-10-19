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
        <el-menu-item index="2-1">当地向导</el-menu-item>
        <el-menu-item index="2-2" @click="selectgui('机场接送')">机场接送</el-menu-item>
        <el-menu-item index="2-3" @click="selectgui('一日游')">一日游</el-menu-item>
      </el-submenu>
      <el-submenu index="3" style="width:25%;">
        <template slot="title">{{order}}</template>
        <el-menu-item index="3-1" @click="selectord('综合排序')">综合排序</el-menu-item>
        <el-menu-item index="3-2" @click="selectord('评论从多到少')">评论从多到少</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" disabled style="width:25%;">筛选</el-menu-item>
    </el-menu>
    <section style="padding: 0.32rem;">
      <div
        class="con-item"
        v-for="item in listdata"
        :key="item._id"
        ref="scoele"
        @click="goto(item._id)"
      >
        <el-image
          :src="item.imgurl"
          style="background-color: #f6f7f8;width: 2.933333rem;height: 2.933333rem;margin-right: 0.266667rem;"
        ></el-image>
        <div class="con-right">
          <div class="con-title">
            <h2>{{item.human}}</h2>
            <span>{{item.des}}</span>
          </div>
          <div class="con-comm">
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <span class="comment-num">{{item.comment}}</span>
            <span>条评价 {{item.info}}</span>
          </div>
          <p>{{item.selfInt}}</p>
        </div>
        <div v-if="item.guide[0]">
          <el-tag
            v-for="key in item.guide"
            :key="key"
            type="info"
            effect="plain"
            class="tagename"
          >{{ key }}</el-tag>
        </div>
        <div v-else>
          <el-tag
            style="border-color:#fff;"
            v-for="key in item.guide"
            :key="key"
            type="info"
            effect="plain"
            class="tagename"
          >{{ key }}</el-tag>
        </div>
      </div>
      <div ref="last" style="font-size:20px;">正在加载中...</div>
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
      listdata: [],
      timer: null
    };
  },
  created() {
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
      let { data } = await this.$guowei.get("/goods/guide", {
        params: {
          num: 20,
          pages: this.pages,
          sort: this.sort,
          des: this.des
        }
      });
      // data.data.imgurl = require(data.data.imgurl);
      data.data.forEach(item => {
        item.imgurl = item.imgurl.replace("../", "");
        item.imgurl = require("../" + item.imgurl);
        // window.console.log(item.imgurl);
        item.guide = item.guide.split(",");
      });
      this.listdata = data.data;
      // window.console.log(data.data);
      if (data.data.length < 20) {
        this.$refs.last.innerHTML = "没有更多了~";
      } else {
        this.$refs.last.innerHTML = "正在加载中...";
      }
    },
    async handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = 0;
      this.$refs.scoele.forEach((item, index) => {
        if (index === this.$refs.scoele.length - 1) {
          offsetTop = this.$refs.scoele[index].offsetTop;
        }
      });
      // window.console.log(scrollTop + "," + offsetTop);
      if (scrollTop + 550 >= offsetTop) {
        clearTimeout(this.timer);
        this.timer = setTimeout(async () => {
          this.pages += 1;
          let { data } = await this.$guowei.get("/goods/guide", {
            params: {
              num: 20,
              pages: this.pages,
              sort: this.sort,
              des: this.des
            }
          });
          // window.console.log(data.data);
          // data.data.imgurl = require(data.data.imgurl);
          data.data.forEach(item => {
            item.imgurl = item.imgurl.replace("../", "");
            item.imgurl = require("../" + item.imgurl);
            // window.console.log(item.imgurl);
            item.guide = item.guide.split(",");
            this.listdata.push(item);
          });
          if (data.data.length === 0) {
            this.$refs.last.innerHTML = "没有更多了~";
          } else {
            this.$refs.last.innerHTML = "正在加载中...";
          }
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
      this.$router.push({ name: "list2", params: { id } });
    },
    goto(id) {
      this.$router.push({ path: "/xq2", query: { id, coll: "guide" } });
    },
    selectord(val) {
      this.pages = 0;
      this.order = val;
      if (this.order === "评论从多到少") {
        this.sort = -1;
      } else {
        this.sort = 0;
      }
      this.getdata();
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.con-item {
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 2.933333rem;
  height: 2.933333rem;
  margin-right: 0.266667rem;
}
.con-right {
  width: 6.133333rem;
}
.con-right .con-title {
  line-height: 1.5;
}
.con-right .con-title h2 {
  display: inline-block;
  font-size: 0.42667rem;
  font-weight: 700;
  margin-right: 0.16rem;
  color: #333;
}
.con-right .con-title span {
  font-size: 0.32rem;
  color: #888;
}
.con-right .con-comm {
  line-height: 1.5;
  font-size: 0.32rem;
  color: #888;
  margin: 0.17333rem 0 0.09333rem;
}
.con-right .con-comm i,
.con-right .con-comm .comment-num {
  color: #ffc524;
}
.con-right p {
  font-size: 0.37333rem;
  line-height: 1.5;
  color: #333;
  height: 1.64rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.tagename {
  font-size: 0.32rem;
  color: #bbb;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  margin-right: 0.32rem;
  margin-top: 0.32rem;
  margin-bottom: 0.64rem;
  height: 0.66667rem;
  line-height: 0.66667rem;
  padding-left: 0.24rem;
  padding-right: 0.24rem;
}
</style>