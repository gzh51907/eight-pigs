<template>
  <div class="box">
    <h2>添加体验项目</h2>
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
      <div class="imglist">
        <div class="img1">
          <h3>上传导游图片</h3>
          <el-upload
            action="http://localhost:1907/addtour/picture"
            list-type="picture-card"
            ref="upload"
            name="picture"
            :auto-upload="true"
            :limit="1"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <div class="img2">
          <h3>上传景点图片</h3>
          <el-upload
            action="http://localhost:1907/addtour/picture"
            list-type="picture-card"
            ref="upload2"
            name="picture"
            :auto-upload="true"
            :limit="1"
            :on-success="handleSuccess2"
            :on-remove="handleRemove2"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove2(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
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
      img1: "",
      img2: ""
    };
  },
  methods: {
    handleSuccess(response) {
      //response这个
      this.img1 = response.data.imgurl;
      // window.console.log(this.img1);
    },
    handleSuccess2(response) {
      //response这个
      this.img2 = response.data.imgurl;
      // window.console.log(this.img2);
    },
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
          window.console.log(query);
          if (this.img1 && this.img2) {
            let { data } = await this.$gw.post("/addtour/", {
              query
            });
            // window.console.log(data);
            if (data.code === 1) {
              this.$confirm("添加数据成功！~", "提示", {
                confirmButtonText: "确定",
                type: "success"
              })
                .then(() => {
                  this.$router.go(0);
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
              message: "图片也不要漏了哦~",
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
    },
    handleRemove(file) {
      this.$confirm(`确定移除 ${file.name}？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$refs.upload.clearFiles();
          this.img1 = "";
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleRemove2(file) {
      this.$confirm(`确定移除 ${file.name}？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$refs.upload2.clearFiles();
          this.img2 = "";
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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