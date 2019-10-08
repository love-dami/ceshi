<template>
  <div class="ranking">
    <div class="rankTitle">
      <span>排行周期：</span>
      <span class="blue">近1年</span>
    </div>
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="a" label="营业部名称" width="100"></el-table-column>
      <el-table-column prop="b" label="动用资金"></el-table-column>
      <el-table-column prop="c" label="上榜次数"></el-table-column>
      <el-table-column prop="d" label="跟买成功率"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHand: 1
    };
  },
  props: ["data", "visible"],
  components: {},
  computed: {},
  watch: {
    // visible(val) {
    //   this.isHand = val;
    // }
  },
  mounted() {},
  methods: {}
};
</script>