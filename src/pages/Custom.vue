<template name="component-name">
  <div id="Custom">
    <div class="title">
      <h2>行程定制</h2>
      <div class="flow">
        <el-steps :active="1" simple>
          <el-step title="提交需求" icon="el-icon-edit"></el-step>
          <el-step title="安排行程" icon="el-icon-upload"></el-step>
          <el-step title="确认行程" icon="el-icon-bicycle"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="summarize">出游基本信息</div>
    <div id="trip">
      <div class="travel">
        <div class="travel_left">目的地</div>
        <div class="travel_right">中国-广州</div>
      </div>
      <div class="travel">
        <div class="block">
          <span class="demonstration">出游日期</span>
          <el-date-picker v-model="ruleEorm.value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </div>

      <div class="travel">
        <div class="travel_mun">游玩天数</div>
        <div class="numderdays">
          <el-input-number size="mini" v-model="ruleEorm.num4"></el-input-number>
        </div>
      </div>
    </div>
    <div class="summarize">出游者信息</div>
    <div id="trip">
      <div class="travel">
        <div class="block">
          <div class="travel_mun">成人</div>
          <div class="numderdays">
            <el-input-number size="mini" v-model="ruleEorm.num1"></el-input-number>
          </div>
        </div>
      </div>
      <div class="travel">
        <div class="block">
          <div class="travel_mun">儿童</div>
          <div class="numderdays">
            <el-input-number size="mini" v-model="ruleEorm.num2"></el-input-number>
          </div>
        </div>
      </div>
      <div class="travel">
        <div class="travel_left">预定人</div>
        <div class="travel_right">姓名</div>
      </div>
      <div class="travel">
        <div class="travel_left">电话</div>
        <div class="travel_right">手机号码</div>
      </div>
      <div class="travel">
        <div class="travel_left">微信</div>
        <div class="travel_right">微信号</div>
      </div>
    </div>
    <div class="summarize">需要服务</div>
    <div id="trip">
      <div id="but" v-for="item in datalist" :key="item.text">
        <el-button round>{{item.text}}</el-button>
      </div>
    </div>
    <div class="summarize">需要的其他服务</div>
    <div id="trip"></div>

    <el-button type="danger" id="dandut">提交</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [
        { text: "机场接收" },
        { text: "徒步向导" },
        { text: "包车向导" },
        { text: "定制行程" },
        { text: "机票待定" },
        { text: "商业翻译" },
        { text: "其他" }
      ],

      ruleEorm: {
        value1: "",
        num4: 3,
        num1: 1,
        num2: 0
      }
    };
  },
  methods: {
    Num(num) {
      let { num4 } = this.ruleEorm;
      if (num <= 0) {
        num4 = 1;
      }
    }
  }
};
</script>
<style lang="scss"  scoped>
html,
body {
  height: 100%;
}
#Custom {
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #ddd;
  position: relative;

  #dandut {
    width: 100%;
  }
  .title {
    text-align: center;
  }
  .flow {
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #ddd;
  }
  .summarize {
    margin-top: 12px;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #f7f5f5;
    color: #888888;
    padding-left: 8px;
    float: left;
  }
  .information {
    width: 100%;
    height: 160px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
}

#trip {
  width: 100%;
  padding: 18px;
  box-sizing: border-box;
  float: left;
  #but {
    margin: 40px 10px 0 10px;
    float: left;
  }

  .travel {
    width: 100%;
    height: 37px;
    margin-bottom: 18px;
    .travel_left,
    .travel_mun {
      display: inline;
    }

    .travel_right,
    .numderdays {
      float: right;
    }
  }
}
</style>