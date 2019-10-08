<template>
  <div>
    <div class="salesItem" v-for="(item,index) in data" :key="index">
      <div class="salesLeft fl">
        <span class="stockName f32 color333">{{item.name}}</span>
        <span class="stockNum f24 color8c">{{item.num}}</span>
        <span class="stockPercentum f26 red">{{item.lv}}</span>
      </div>
      <div class="salesLine fl"></div>
      <div class="salesRight fl">
        <span class="f32 color333 salesTitle">{{item.t1}}</span>
        <span class="f32 color333 salesTitle">{{item.t2}}</span>
        <span class="f26 color8c" v-show="isHand==1">
          <i class="stockBtn">{{item.city}}</i>
          资金净买{{item.mairu}}万
          1年内携手
          <span class="red">{{item.more}}</span>次
        </span>
        <p class="f26 color8c" v-show="isHand==2">
          1年内携手
          <span class="red">{{item.more}}</span>次
          <span class="ml30">成功率</span>
          <span class="red">{{item.lvv}}</span>
        </p>
      </div>
    </div>
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
    visible(val) {
      this.isHand = val;
    }
  },
  mounted() {},
  methods: {}
};
</script>