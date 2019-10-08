
<template>
  <div id="app">
    {{ a }}
    <button @click="getchild">通过ref得到子组件的值</button>
    <!-- 使用组件 -->
    <three ref="mesage" />

    <div id="ue-container"></div>
  </div>
</template>
<script>
import three from "./comps/three";

export default {
  components: {
    three
  },
  data() {
    return {
      a: "我是父组件"
    };
  },
  methods: {
    getchild() {
      // 通过this.$refs调用
      console.log(this.$refs.mesage.mes);
      console.log(this.$refs.mesage.msg);
    }
  },
  mounted() {
    // console.log("--window.UE--", UE);
    var ue = window.UE.getEditor("ue-container");
  }
};
</script>


