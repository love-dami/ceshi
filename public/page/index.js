import "./style/reset.css";
import "./style/common.css";

import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
import { Input, DatePicker } from "element-ui";
Vue.use(Input);
Vue.use(DatePicker);
new Vue({
  el: "#app",
  render: h => h(App)
});
