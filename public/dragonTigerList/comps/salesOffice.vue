<!--  -->
<template>
  <div id="salesOffice">
    <div class="salesNav">
      <span
        class="salesNavList f30 fl"
        :class="{ select: isSale==1 }"
        @click="saleClick('getCityWide',1)"
      >同城</span>
      <span
        class="salesNavList f30 fl"
        @click="saleClick('getHand',2)"
        :class="{ select: isSale==2 }"
      >携手</span>
      <span
        class="salesNavList f30 fl"
        :class="{ select: isSale==3 }"
        @click="saleClick('getRanking',3)"
      >排行</span>
    </div>
    <div v-show="isSale!=3">
      <salesItem :data="saleData" :visible="number&&isSale"></salesItem>
    </div>
    <div v-show="isSale==3">
      <ranking :data="saleData" :visible="number&&isSale"></ranking>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import salesItem from "./salesItem";
import ranking from "./ranking";

export default {
  data() {
    return {
      saleData: [],
      isSale: 1,
      number: 0
    };
  },
  components: { salesItem, ranking },
  computed: {
    ...mapState(["cityWideData", "handData", "rankingData"])
  },
  watch: {
    cityWideData(val) {
      this.saleData = val;
    },
    handData(val) {
      this.saleData = val;
    },
    rankingData(val) {
      this.saleData = val;
    }
  },
  mounted() {
    this.$store.dispatch("getCityWide");
  },
  activated() {},
  methods: {
    saleClick(val, num) {
      this.$store.dispatch(val);
      this.isSale = num;
      ++this.number;
    }
  }
};
</script>
