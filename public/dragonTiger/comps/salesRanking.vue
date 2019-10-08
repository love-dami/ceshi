<template>
	<div class="salesRanking">
    <div class="img"></div>
    <el-table :data="tableData" max-height="640" border style="width: 100%">
      <el-table-column prop="id" label="序号" width="61" :resizable=false></el-table-column>
      <el-table-column prop="daima" label="营业部名称" width="376" :resizable=false></el-table-column>
      <el-table-column label="上榜次数" width="132" :resizable=false>
        <template slot-scope="scope">
          <span class="blue">{{scope.row.mingcheng}}</span>
        </template>
      </el-table-column>
      <el-table-column label="买入次数" width="132" :resizable=false>
        <template slot-scope="scope">
          <span class="blue" v-text="scope.row.zuixin"></span>
        </template>
      </el-table-column>
      <el-table-column label="卖出次数" width="132" :resizable=false>
        <template slot-scope="scope">
          <span class="blue" v-text="scope.row.zhangfu"></span>
        </template>
      </el-table-column>
      <el-table-column label="买入额" width="132" :resizable=false>
        <template slot-scope="scope">
          <span class="yellow" v-text="scope.row.shoupan"></span>
        </template>
      </el-table-column>
      <el-table-column label="卖出额" width="122" :resizable=false>
        <template slot-scope="scope">
          <span class="yellow" v-text="scope.row.chengjiao"></span>
        </template>
      </el-table-column>
      <el-table-column label="净买入额" width="112" :resizable=false>
        <template slot-scope="scope">
          <span class="yellow" v-text="scope.row.chengjiaoliang"></span>
        </template>
      </el-table-column>
    </el-table> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData:[{
        id:1,
        daima:"000001",
        mingcheng:"000001",
        zuixin:"000001",
        zhangfu:"000001",
        shoupan:"000001",
        chengjiao:"000001",
        chengjiaoliang:"000001",
      },{
        id:2,
        daima:"000001",
        mingcheng:"000001",
        zuixin:"000001",
        zhangfu:"000001",
        shoupan:"000001",
        chengjiao:"000001",
        chengjiaoliang:"000001",
      }]
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>