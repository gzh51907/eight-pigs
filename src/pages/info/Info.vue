<template >
  <div id="indent">
    <div class="title">心仪订单</div>
    <el-row ref="div" v-for="(item, index) in indentlist" :key="index" style="margin-top:30px">
      <el-col :span="5">
        <h4 class="goal">{{item.tage }}</h4>
      </el-col>
      <el-col :span="8" class="page-img">
        <h5 class="img_h5">现场美图</h5>
        <img :src="item.imgurl" />
      </el-col>
      <el-col :span="6" class="bourn">
        <h4>目的地:{{item.info }}</h4>
        <h4>小猪达人:{{item.nickname}}</h4>
      </el-col>
      <el-col :span="5" class="remobutton">
        <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="open(item._id)"></el-button>
      </el-col>
    </el-row>
    <el-row id="popularitylist" v-show="indentlist.length===0">
      <p class="popularity">订单还是空的！去撩一下达人吧！</p>
      <el-button type="primary" size="medium" @click="goto('/list')">去了解</el-button>
    </el-row>
  </div>
</template>
<script>
import { runMain } from "module";
import { mapState } from "vuex";
export default {
  data() {
    return {
      datalist: {}
    };
  },
  computed: {
    ...mapState({
      indentlist(state) {
        return state.indent.data;
      }
    })
  },
  async created() {
    let { data } = await this.$guowei.get("/cart");
    this.$store.commit("getData", data);
  },

  methods: {
    clearindent() {
      this.$store.commit("clearindent");
    },
    open(id, state) {
      this.$confirm("是否删除已经规定好的行程吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.$store.dispatch("removeFromCart", id);
          this.$store.commit("Morerows", id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped >
#indent {
  width: 100%;
  .title {
    text-align: center;
    color: #f00;
    font-weight: 700;
    height: 60px;
    font-size: 17px;
    line-height: 60px;
    border-bottom: 2px solid #ddd;
  }
  #popularitylist {
    text-align: center;

    .popularity {
      font-weight: 700;
      color: #f00;
      font-size: 16px;
      margin-bottom: 10px;
    }

    .button {
      height: 28px;
      width: 55px;
    }
  }

  .page-img {
    text-align: center;
    .img_h5 {
      color: #000;
      font-size: 13px;
      margin-bottom: 10px;
    }

    img {
      width: 100%;
    }
  }
  .goal {
    margin-top: 50px;
    height: 60px;
    margin-left: 8px;
    line-height: 60px;
    font-weight: 700;
    color: #f00;
  }

  .bourn {
    margin: 52px 0 0 8px;
    h4 {
      width: 150px;
      margin: 10px 0;
    }
  }

  .remobutton {
    position: absolute;
    right: -72px;
    top: 66px;
  }
}
</style>