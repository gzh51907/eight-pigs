<template>
  <div id="home">
    <home-nav-bar />
    <div class="content">
      <home-swiper />
      <home-tips @gotolist="gotolist" />
      <tour-man :tour-man="TourMan" @gotoxq="gotoxq" @gotolist="gotolist" />
      <home-view :title="title" @getguide="getguide" :tour-view="TourView" />
      <home-recommand />
      <home-footer />
    </div>
  </div>
</template>
   
<script>
// 公共
// import Scroll from "components/common/scroll/Scroll";
// 组件
import HomeNavBar from "./childComps/HomeNavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeTips from "./childComps/HomeTips";
import TourMan from "./childComps/TourMan";
import HomeView from "./childComps/HomeView";
import HomeRecommand from "./childComps/HomeRecommand";
import HomeFooter from "./childComps/HomeFooter";

// 方法
import { homeTourMan, homeView } from "network/home";
export default {
  name: "Home",
  data() {
    return {
      TourMan: [],
      title: [
        {
          name: "阿刘",
          guideId: 655762
        },
        {
          name: "Lee李小鹿",
          guideId: 155295
        },
        {
          name: "尼克又又",
          guideId: 613430
        },
        {
          name: "Alan",
          guideId: 41336
        },
        {
          name: "跟P虫",
          guideId: 121811
        }
      ],
      TourView: []
    };
  },
  components: {
    // Scroll,
    HomeNavBar,
    HomeSwiper,
    HomeTips,
    TourMan,
    HomeView,
    HomeRecommand,
    HomeFooter
  },
  created() {
    this.getHomeTourMan();
    this.getguide(655762);
  },

  methods: {
    currentUser() {
      let srue = this.$store.state.ccommit.user;
    },
    getHomeTourMan() {
      homeTourMan().then(({ data }) => {
        this.TourMan = data;
      });
    },
    getguide(guideId) {
      homeView(guideId).then(({ data }) => {
        this.TourView = data;
      });
    },
    gotolist(id) {
      if (id == "当地向导") {
        this.$router.push({ name: "list" });
      } else {
        this.$router.push({ name: "list2", params: { id } });
      }
    },
    gotoxq(id) {
      this.$router.push({ path: "/xq2", query: { id, coll: "guide" } });
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  width: 98%;
  margin: 0 auto;
  padding: 0px 10px;
  overflow-y: auto;
}
</style>
