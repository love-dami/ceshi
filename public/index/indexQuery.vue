<template>
  <div class="query">
    <div class="query-if">
      <div class="query-list">
        <label for>股票：</label>
        <input type="text" v-model="socket" placeholder="股票名称/代码" />
      </div>
      <div class="query-list">
        <label for>入选时间：</label>
        <!-- <input type="text" v-model="time" placeholder="入选时间"> -->
        <el-date-picker v-model="time" type="datetime" placeholder="入选时间"></el-date-picker>
      </div>
      <div class="query-list">
        <label for>入选理由：</label>
        <input type="text" v-model="reason" placeholder="入选理由" />
      </div>
      <div class="query-btn">
        <button @click="search">查询</button>
      </div>
    </div>
    <div class="query-container">
      <div class="content">
        <el-table :data="tableData" style="width:100%">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="gpname" label="股票名称" width="120"></el-table-column>
          <el-table-column prop="gpcode" label="股票代码" width="120"></el-table-column>
          <el-table-column prop="gptime" label="创建时间" width="120"></el-table-column>
          <el-table-column prop="teacher" label="推荐老师" width="120"></el-table-column>
          <el-table-column prop="reason" label="入选理由" width="200"></el-table-column>
        </el-table>
        <el-pagination
          @current-change="onPage"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
const data = [
  {
    gpname: "恒宝股份1",
    gpcode: "012104",
    gptime: "2019-01-30 14:35",
    teacher: "曹向东",
    reason: "具体操作策略通过趋势三部战法并结合四种指标进行操作啊"
  },
  {
    gpname: "恒宝股份2",
    gpcode: "022104",
    gptime: "2019-01-30 14:35",
    teacher: "曹向东",
    reason: "具体操作策略通过趋势三部战法并结合四种指标进行操作"
  },
  {
    gpname: "恒宝股份3",
    gpcode: "032104",
    gptime: "2019-01-30 14:35",
    teacher: "曹向东",
    reason: "具体操作策略通过趋势三部战法并结合四种指标进行操作啊"
  },
  {
    gpname: "恒宝股份4",
    gpcode: "042104",
    gptime: "2019-01-30 14:35",
    teacher: "曹向东",
    reason: "具体操作策略通过趋势三部战法并结合四种指标进行操作"
  },
  {
    gpname: "恒宝股份5",
    gpcode: "052105",
    gptime: "2019-01-30 14:35",
    teacher: "曹向东",
    reason: "具体操作策略通过趋势三部战法并结合四种指标进行操作"
  },
  {
    gpname: "恒宝股份6",
    gpcode: "002105",
    gptime: "2019-01-30 14:35",
    teacher: "曹向东",
    reason: "具体操作策略通过趋势三部战法并结合四种指标进行操作啊"
  }
];
export default {
  data() {
    return {
      tableData: [],
      table: data,
      socket: "",
      reason: "",
      time: "",
      total: 6,
      currentPage: 1,
      pageSize: 1,
      multipleSelection: []
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    list() {
      this.tableData = data.slice(
        (this.currentPage - 1) * this.pageSize,
        this.pageSize * this.currentPage
      );
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handle() {
      let socket = this.tableData.filter(item => {
        if (item.gpcode.indexOf(this.socket) != -1 && this.socket) return item;
      });
      socket = socket.length == 0 ? this.tableData : socket;
      let reason = socket.filter(item => {
        if (item.reason.indexOf(this.reason) != -1 && this.reason) return item;
      });
      reason = reason.length == 0 ? this.tableData : reason;
      let time = reason.filter(item => {
        if (item.gptime.indexOf(this.time) != -1 && this.time) return item;
      });
      console.log("--time--", time);
      console.log("--reason--", reason);
      console.log("--socket--", socket);
      if (time.length != 0) return time;
      if (time.length == 0 && reason.length != 0) return reason;
      if (time.length == 0 && reason.length == 0 && socket.length != 0)
        return socket;
    },
    search() {
      this.tableData = data;
      if (!this.socket && !this.reason && !this.time) return;
      let res = this.handle();
      console.log("--res--", res);
      this.tableData = res.slice(
        (this.currentPage - 1) * this.pageSize,
        this.pageSize * this.currentPage
      );
      this.total = res.length;
    },
    onPage(page) {
      this.currentPage = page;
      this.list();
    }
  }
};
</script>
<style>
.query-if {
  overflow: hidden;
}
.query-list {
  float: left;
  margin: 0 14px 0 0;
}
.query-list input[placeholder] {
  color: #000;
}
.query-list input {
  width: 180px;
  line-height: 20px;
  padding-left: 4px;
}
.query-btn {
  float: left;
}
.query-btn button {
  width: 60px;
  height: 26px;
  line-height: 24px;
}
.query-container {
  margin-top: 20px;
}
</style>
