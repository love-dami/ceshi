import Vue from "vue";

import { Table, TableColumn } from "element-ui";

Vue.use(Table);
Vue.use(TableColumn);

// import store from "./store";
import router from "./router";

new Vue({
  el: "#dragonTiger",
  data() {
    return {
      bannerNum:2
    };
  },
  methods: {
    bannerClick(val,num){
      this.bannerNum = num;
      this.$router.push("/"+val);
    }
  },
  mounted() {
    // this.$router.push("/individualShare");
  },
  // store,
  router
});
