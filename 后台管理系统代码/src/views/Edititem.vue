<template>
  <div class="box">
    <h2>修改项目信息</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="景点名称" prop="sight">
        <el-input v-model="ruleForm.sight"></el-input>
      </el-form-item>
      <el-form-item label="导游名字" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="目的地点" prop="place">
        <el-input v-model="ruleForm.place"></el-input>
      </el-form-item>
      <el-form-item label="项目价格(￥)" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="项目类型" prop="tage">
        <el-radio-group v-model="ruleForm.tage">
          <el-radio label="一日游"></el-radio>
          <el-radio label="机场接送"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">确认修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkPlace = (rule, value, callback) => {
      setTimeout(() => {
        if (!/^[\u4e00-\u9fa5]+\s[\u4e00-\u9fa5]+/.test(value)) {
          callback(new Error("输入格式请满足：国家 地区"));
        } else {
          //   通过校验
          callback();
        }
      }, 1000);
    };
    var checkPri = (rule, value, callback) => {
      setTimeout(() => {
        if (!/^[0-9]+/.test(value)) {
          callback(new Error("请输入数字值"));
        } else {
          //   通过校验
          callback();
        }
      }, 1000);
    };
    return {
      ruleForm: {
        sight: "",
        name: "",
        place: "",
        price: "",
        tage: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入导游名字", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" }
        ],
        sight: [
          { required: true, message: "请输入景点名称", trigger: "blur" },
          { max: 20, message: "请输入小于 20 个字符", trigger: "blur" }
        ],
        place: [
          { required: true, message: "请输入目的地点", trigger: "blur" },
          { max: 20, message: "请输入小于 10 个字符", trigger: "blur" },
          { validator: checkPlace, trigger: "blur" }
        ],
        price: [
          { required: true, message: "请输入项目价格", trigger: "blur" },
          { validator: checkPri, trigger: "blur" }
        ],
        tage: [{ required: true, message: "请选择项目类型", trigger: "change" }]
      },
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      id: ""
    };
  },
  created() {
    let { data } = this.$route.query;
    window.console.log(data);
    this.ruleForm.sight = data.tit;
    this.ruleForm.name = data.nickname;
    this.ruleForm.place = data.info;
    this.ruleForm.price = data.price;
    this.ruleForm.tage = data.tage;
    this.id = data._id;
  },
  methods: {
    async submitForm() {
      this.$refs.ruleForm.validate(async valid => {
        // console.log(valid, fail);
        if (valid) {
          let query = {
            tit: this.ruleForm.sight,
            imgurl: this.img2,
            price: this.ruleForm.price - 0,
            info: this.ruleForm.place,
            comment: "0条评论",
            guipic: this.img1,
            nickname: this.ruleForm.name,
            tage: this.ruleForm.tage
          };
          window.console.log(query, this.id);
          let { data } = await this.$gw.patch("/addtour/", {
            _id: this.id,
            query
          });
          // window.console.log(data);
          if (data.code === 1) {
            this.$confirm("添加数据成功！~", "提示", {
              confirmButtonText: "确定",
              ancelButtonText: "知道了",
              type: "success"
            })
              .then(() => {
                this.$router.push({ path: "hotlist" });
              })
              .catch(() => {});
          } else {
            this.$message({
              showClose: true,
              message: "添加失败哦！~",
              type: "error",
              duration: 2000
            });
          }
        } else {
          this.$message({
            showClose: true,
            message: "请先正确填完所有信息",
            type: "error",
            duration: 2000
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.imglist {
  display: flex;
}
.img1 h3,
.img2 h3 {
  font-size: 15px;
  line-height: 36px;
  text-align: center;
}
.img1,
.img2 {
  padding: 0 18px 18px 18px;
}
.box {
  padding: 30px;
}
.box h2 {
  font-size: 20px;
  font-weight: bold;
  color: rgb(64, 158, 255);
  margin-bottom: 25px;
}
</style>