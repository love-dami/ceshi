import "./style/reset.css";
import "./style/common.css";

import Vue from "vue";
import App from "./App";
import { Dialog, Button, Input, Form, FormItem } from "element-ui";
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App)
});
