<template >
  <div id="register">
    <div class="tile">
      <i class="el-icon-arrow-left" @click="prev()"></i>
      注册账号
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="age">
        <el-input v-model.number="ruleForm.age" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" id="verify">
        <el-input placeholder="请输入相应验证码" v-model="ruleForm.authcode"></el-input>
        <el-button
          type="danger"
          class="dioxide"
          :class="{disabled: !this.time.canClick}"
          @click="Sand"
        >
          {{
          time.content
          }}
        </el-button>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.passs"
          autocomplete="off"
          placeholder="请设置6-16位登陆密码"
          @input="ContentCh"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <span class="help-link">密码长度6～16位，由英文字母a～z (区分大小写)、数字0～9、至少两种特殊字符组成</span>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :class="isok ? 'sucuus':''"
          style="  width: 100%"
          @click="submitForm('ruleForm')"
        >完成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    let phone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (!phone.test(value)) {
            callback(new Error("请检查手机号格式"));
          } else {
            callback();
          }
        }
      }, 300);
    };
    let passvie = (rule, value, callback) => {
      let pass = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/;
      if (!value) {
        return callback(new Error("设置密码为必填选项"));
      }
      setTimeout(() => {
        if (!pass.test(value)) {
          callback(new Error("请检查手机号格式"));
        } else {
          callback();
        }
      }, 300);
    };
    let register = (rule, value, callback) => {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.isok = false;
        } else {
          this.isok = true;
        }
      });
    };
    // 检查用户名是否存在
    const checkUsername = async (rule, value, callback) => {
      console.log(this.ruleForm.age);

      let { data } = await this.$axios.get(
        "http://10.3.133.73:1907/users/check",
        {
          params: {
            age: this.ruleForm.age
          }
        }
      );

      console.log(data);

      if (data.code === 0) {
        callback(new Error("用户名已存在"));
      } else {
        callback();
      }
    };
    return {
      isok: true,
      time: {
        content: "发送验证码",
        totalTime: 60,
        canClick: true //添加canClick
      },
      ruleForm: {
        age: "",
        passs: "",
        authcode: ""
      },
      rules: {
        age: [
          { validator: checkAge, trigger: "blur" },
          { validator: checkUsername, trigger: "blur" }
        ],
        passs: [{ validator: passvie, trigger: "blur" }]
      }
    };
  },
  methods: {
    async Sand() {
      if (this.ruleForm.age.length === 0) {
        return this.$notify({
          title: "温馨提示",
          message: "手机号码不能为空",
          type: "warning"
        });
      }
      // 节流数据方法
      if (!this.time.canClick) return;
      this.time.canClick = false;
      this.time.content = this.time.totalTime + "s后重新发送";
      let clock = window.setInterval(() => {
        this.time.totalTime--;
        this.time.content = this.time.totalTime + "s后重新发送";
        if (this.time.totalTime < 0) {
          this.time.content = "重新发送验证吗";
          this.time.totalTime = 60;
          this.time.canClick = true;
        }
      }, 1000);
      let { age } = this.ruleForm;
      let { result } = await this.$axios.get("http://10.3.133.36:1907/verify", {
        params: {
          age
        }
      });
    },
    prev() {
      this.$router.go(-1);
    },
    ContentCh() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.isok = false;
        } else {
          this.isok = true;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { age, passs } = this.ruleForm;
          let { data } = await this.$axios.post(
            "http://10.3.133.73:1907/users/reg",
            {
              age,
              passs
            }
          );
          if (data.code === 1) {
            this.$router.replace({
              name: "mine",
              params: { age },
              query: { age }
            });
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss"  scoped >
.disabled {
  background-color: #ddd;
  border-color: #ddd;
  color: #57a3f3;
  cursor: not-allowed;
}

#verify {
  position: relative;

  .dioxide {
    position: absolute;
    height: 30px;
    right: 15px;
    top: 4px;
    font-size: 6px;
  }
}

.sucuus {
  background: #ddd;
  color: #ccc;
  border: #ccc;
}

.succ {
  background-color: #ddd;
  color: #ccc;
}

#register {
  width: 100%;

  .help-link {
    color: #888;
    font-size: 12px;
    position: relative;
    top: -17px;
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