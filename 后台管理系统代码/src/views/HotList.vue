<template>
  <div class="hot-list">
    <div>
      <el-form :inline="true">
        <el-row :gutter="10">
          <el-col type="flex" class="row-bg">
            <el-col :span="20">
              <el-col :span="2" class="text-style">
                <el-button type="text">搜索</el-button>
              </el-col>
              <el-col :span="22">
                <el-input placeholder="请输入搜索内容" v-model.trim="keyword" class="input-with-select">
                  <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="导游" value="nickname"></el-option>
                    <el-option label="国家" value="info"></el-option>
                    <el-option label="景区" value="tit"></el-option>
                    <el-option label="价格区" value="price"></el-option>
                  </el-select>
                </el-input>
              </el-col>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" size="big" icon="search" @click="onSearch()">筛选</el-button>
            </el-col>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="table_container">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        v-if="tableData.length > 0"
        max-height="450"
      >
        <el-table-column type="index" label="序号" align="center" width="70"></el-table-column>
        <el-table-column prop="nickname" label="导游名字" width="180"></el-table-column>
        <el-table-column prop="info" label="国家" width="180"></el-table-column>
        <el-table-column prop="tit" label="景区名"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="operation" align="center" label="操作" fixed="right" width="180">
          <template slot-scope="scope">
            <el-button type="warning" icon="edit" size="small" @click="onEditMoney(scope.row)">编辑</el-button>
            <el-button
              type="danger"
              icon="delete"
              size="small"
              @click="onDeleteMoney(scope.row,scope.$index)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-col :span="24">
        <div class="pagination" v-if="tableData.length > 0">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="paginations.currentPage"
            :page-sizes="paginations.page_sizes"
            :page-size="paginations.page_size"
            :layout="paginations.layout"
            :total="paginations.total"
          ></el-pagination>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "hot-list",
  data() {
    return {
      keyword: "",
      select: "nickname",
      tableData: [],
      allTableData: [],
      filterTableData: [],
      paginations: {
        currentPage: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 50, // 1页显示多少条
        page_sizes: [50, 100, 150, 200], //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
      }
    };
  },
  created() {
    this.gettableData();
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    gettableData() {
      this.$axios.get("home").then(({ data: { data } }) => {
        this.allTableData = data;
        this.filterTableData = data;
        // window.console.log(data);
        // 设置分页
        this.setPaginations(this.allTableData);
      });
    },
    setPaginations(data) {
      this.paginations.total = data.length;
      this.paginations.currentPage = 1;
      this.paginations.page_size = 50;
      this.tableData = data.filter((item, index) => {
        return index < this.paginations.page_size;
      });
    },
    onSearch() {
      this.search(this.select);
    },
    search(info) {
      this.allTableData = this.filterTableData.filter(item => {
        return (
          item[info].toLowerCase().indexOf(this.keyword.toLowerCase()) != -1
        );
      });
      if (this.allTableData.length > 0) {
        this.setPaginations(this.allTableData);
      } else {
        this.$message({
          message: "无相关信息，请重新筛选！",
          type: "warning"
        });
        this.setPaginations(this.allTableData);
      }
    },
    onEditMoney(data) {
      // window.console.log(data);
      this.$router.push({
        path: "edit",
        query: { data }
      });
    },
    async onDeleteMoney(query) {
      window.console.log(query._id);
      let { data } = await this.$gw.delete("/addtour/", {
        params: {
          _id: query._id
        }
      });
      // window.console.log(data);
      if (data.code === 1) {
        this.$confirm("删除数据成功！~", "提示", {
          confirmButtonText: "确定",
          type: "success"
        })
          .then(() => {
            this.gettableData();
          })
          .catch(() => {
            this.gettableData();
          });
      } else {
        this.$message({
          showClose: true,
          message: "删除失败哦！~",
          type: "error",
          duration: 2000
        });
      }
    },
    handleSizeChange(num) {
      this.paginations.page_size = num;
      this.tableData = this.allTableData.filter((item, index) => {
        return index < num;
      });
    },
    handleCurrentChange(page) {
      this.paginations.currentPage = page;
      this.tableData = this.allTableData.filter((item, index) => {
        return (
          index < this.paginations.page_size * page &&
          index >= this.paginations.page_size * (page - 1)
        );
      });
    }
  }
};
</script>

<style scoped>
.hot-list {
  font-size: 14px;
  padding-top: 10px;
  line-height: 2;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  color: #333;
}
.text-style {
  line-height: 40px;
  text-align: center;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
.el-select {
  width: 100px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
