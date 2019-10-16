<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item">
        <img :src="item"/>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      banner: [
        require('assets/imgs/home/banner1.webp'),
        require('assets/imgs/home/banner2.webp'),
        require('assets/imgs/home/banner3.webp')
      ]
    };
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
</style>
