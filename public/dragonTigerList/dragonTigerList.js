import Vue from "vue";

import { Table, TableColumn } from "element-ui";

Vue.use(Table);
Vue.use(TableColumn);

import store from "./store";
import router from "./router";

new Vue({
  el: "#dragonTigerList",
  data() {
    return {
      isOn: 1
    };
  },
  methods: {
    tableClick(val, num) {
      this.$router.push("/shangHai");
      store.dispatch(val);
      this.isOn = num;
    },
    salesClick(num) {
      this.$router.push("/salesOffice");
      this.isOn = num;
    }
  },
  mounted() {
    this.$router.push("/shangHai");
  },
  store,
  router
});
