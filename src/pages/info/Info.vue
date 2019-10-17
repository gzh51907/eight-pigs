<template >
  <div id="indent">
    <div class="title">心仪订单</div>
    <el-row :gutter="30" v-for="item in indentlist" :key="item.id" style="margin-top:30px">
      <el-col :span="4" class="page-cart">
        <img :src="item.imgurl" />
      </el-col>
      <el-col :span="8">
        <h4>{{item.name}}</h4>
      </el-col>
      <el-col :span="8">
        <h4>{{item.name}}</h4>
      </el-col>
      <el-col :span="4" style="text-align:right">
        <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="remove(item.id)"></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="clearindent">清空购物车</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { runMain } from "module";
export default {
  data() {
    return {};
  },
  computed: {
    indentlist() {
      return this.$store.state.indent.indentlist;
    },
    list() {
      // // this.$store.state.indent.data;
      // // return datalist;
    }
  },
  methods: {
    remove(id) {
      this.$store.commit("removeFromCart", id);
    },
    clearindent() {
      this.$store.commit("clearindent");
    }
  },
  created() {
    this.$store.dispatch("ahld");
    console.log(this.$store.state);
  }
};
</script>
<style lang="scss" scoped >
#indent {
  width: 100%;
  .title {
    text-align: center;
    font-weight: 700;
    padding-bottom: 12px;
    border-bottom: 1px solid #ddd;
  }
  .page-cart {
    img {
      width: 100px;
      margin-right: 40px;
    }
  }
}
</style>