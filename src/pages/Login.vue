<template >
  <div id="login">
    <div class="tile">
      <i class="el-icon-arrow-left" @click="prev()"></i>
      登录8只小猪
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="regForm" status-icon label-width="100px">
      <el-form-item label="账号" prop="pass">
        <el-input v-model="ruleForm.age" placeholder="请输入账号或者手机号码"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.passs"
          autocomplete="off"
          placeholder="请输入密码"
          @input="ContentCh"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="下次免登陆" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
      <el-form-item id="login-button">
        <el-button
          class="buttlog"
          :id="isok ? 'change' : ''"
          ref="pTag"
          type="danger"
          @click="submitForm"
        >登录</el-button>
        <el-button
          class="butterg"
          v-for="item in items"
          :key="item.label"
          type="success"
          effet="plain"
          @click="goto('/register')"
        >注册</el-button>
        <p class="agreement">
          登录即代表
          <a href="http://h5.8pig.com/protocol.html#fuwuxieyi">《用户协议》</a>
        </p>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { async } from "q";
import { log } from "util";
export default {
  data() {
    return {
      items: [{ type: "", label: "注册" }],
      isok: true,
      ruleForm: {
        age: "",
        passs: "",
        mdl: true
      },
      rules: {
        age: [{ required: true, message: "请输入密码", trigger: "blur" }],
        passs: [{ required: true, message: "账号不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.regForm.validate(async valid => {
        if (valid) {
          let { age, passs, mdl } = this.ruleForm;
          let { data } = await this.$guowei.post("/users/login", {
            age,
            passs,
            mdl
          });
          if (data.code === 1) {
            let { targetUrl } = this.$route.query;
            this.$store.commit("login", { age, Authorization: data.data });
            this.$router.push({
              path: targetUrl || "/home"
            });
          } else {
            alert("用户名或密码不正确");
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },

    ContentCh() {
      this.$refs.regForm.validate(valid => {
        if (valid) {
          this.isok = false;
        } else {
          this.isok = true;
        }
      });
    },
    prev() {
      this.$router.go(-1);
    },
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
#change {
  color: #bbb;
  background-color: #ddd;
  border: 1px solid #ddd;
}

#login {
  width: 100%;

  #login-button {
    width: 100%;
    height: 254px;

    .buttlog {
      width: 100%;
      margin: 0 -48px;
      margin-bottom: 10px;
    }
    .butterg {
      width: 100%;
      margin: 0 -48px;
    }
  }
}

.agreement {
  font-size: 12px;
  color: #bbb;
  a {
    text-decoration: none;
    color: rgba(15, 61, 146, 0.788);
  }
}
.tile {
  width: 100%;
  height: 41px;
  text-align: center;
  line-height: 41px;
  font-size: 17px;
  border-bottom: 1px solid #ddd;

  i {
    margin-top: 14px;
    float: left;
    color: #ff5e69;
    margin-left: 12px;
  }
}
</style>