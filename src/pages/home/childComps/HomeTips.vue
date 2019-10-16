<template>
  <div class="home-tips">
    <use-tools class="boxtips">
      <use-tools-item @click.native="gotolist('当地向导')">
        <span slot="box">
          <img src="~assets/imgs/home/logo_cat_car.webp" alt="">
        </span>
        <span slot="text">特色达人</span>
      </use-tools-item>
      <use-tools-item @click.native="gotolist('机场接送')">
        <span slot="box">
          <img src="~assets/imgs/home/logo_cat_guide.webp" alt="">
        </span>
        <span slot="text">机场接送</span>
      </use-tools-item>
      <use-tools-item @click.native="gotolist('一日游')">
        <span slot="box">
          <img src="~assets/imgs/home/logo_cat_plan.webp" alt="">
        </span>
        <span slot="text">畅游包车</span>
      </use-tools-item>
      <use-tools-item>
        <span slot="box">
          <img src="~assets/imgs/home/logo_cat_dest.webp" alt="">
        </span>
        <span slot="text">目的地</span>
      </use-tools-item>
      <use-tools-item>
        <span slot="box">
          <img src="~assets/imgs/home/logo_cat_dest1.webp" alt="">
        </span>
        <span slot="text">行程定制</span>
      </use-tools-item>
    </use-tools>
  </div>
</template>

<script>
import UseTools from "components/common/usetools/UseTools";
import UseToolsItem from "components/common/usetools/UseToolsItem";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    UseTools,
    UseToolsItem
  },
  methods:{
    gotolist(id){
      this.$emit("gotolist", id);
    }
  }
};
</script>

<style scoped>
.home-tips{
  padding: 10px 0px 20px;
}
.boxtips img{
    width: 44px;
    height: 44px;
}
</style>
