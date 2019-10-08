<!--  -->
<template>
  <div id="shanghai">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed label="名称" width="80">
        <template slot-scope="scope">
          <span class="color333">{{scope.row.name}}</span>
          <span class="color8c">{{scope.row.name1}}</span>
        </template>
      </el-table-column>
      <el-table-column label="涨跌幅" width="80">
        <template slot-scope="scope">
          <span :class="scope.row._a">{{scope.row.a}}</span>
        </template>
      </el-table-column>
      <el-table-column label="上榜原因" width="150">
        <template slot-scope="scope">
          <span class="color333">{{scope.row.b}}</span>
          <span class="color8c">{{scope.row.b1}}</span>
        </template>
      </el-table-column>
      <el-table-column label="净买额（万）" width="105">
        <template slot-scope="scope">
          <span :class="scope.row._c">{{scope.row.c}}</span>
        </template>
      </el-table-column>
      <el-table-column label="买入（万）" width="95">
        <template slot-scope="scope">
          <span :class="scope.row._d">{{scope.row.d}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="e" label="买入占比" width="80"></el-table-column>
      <el-table-column label="卖出（万）" width="95">
        <template slot-scope="scope">
          <span :class="scope.row._f">{{scope.row.f}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="g" label="卖出占比" width="80"></el-table-column>
      <el-table-column prop="h" label="上榜次数" width="80"></el-table-column>
      <el-table-column label="收盘价" width="80">
        <template slot-scope="scope">
          <span :class="scope.row._j">{{scope.row.j}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      tableData: []
    };
  },

  components: {},
  computed: {
    ...mapState(["shangHaiData", "shenZhenData", "institutionData"])
  },
  watch: {
    shangHaiData(val) {
      if (!val) return;
      this.tableData = this.handle(val);
    },
    shenZhenData(val) {
      if (!val) return;
      this.tableData = this.handle(val);
    },
    institutionData(val) {
      if (!val) return;
      this.tableData = this.handle(val);
    }
  },
  mounted() {
    this.tableData = this.handle(this.shangHaiData);
  },

  methods: {
    handle(arr) {
      return arr.map(item => {
        this.obj(item);
        return item;
      });
    },
    obj(val) {
      for (key in val) {
        const isNumber = function(value) {
          //验证是否为数字
          value = value.replace("%", "");
          var patrn = /^(-)?\d+(\.\d+)?$/;
          if (patrn.exec(value) == null || value == "") {
            return false;
          } else {
            return true;
          }
        };
        if (isNumber(val[key])) {
          val["_" + key] = val[key].replace("%", "");
          val["_" + key] = val["_" + key] > 0 ? "red" : "green";
        }
      }
    }
  }
};
</script>
