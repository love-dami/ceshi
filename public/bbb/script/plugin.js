import { Message, MessageBox } from "element-ui";

export default {
  install(Vue, option) {
    Vue.prototype.$error = message => Message({ type: "error", message });
    Vue.prototype.$success = message => Message({ type: "success", message });

    Vue.prototype.$confirm = message =>
      MessageBox.confirm(message, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      });

    Vue.mixin({
      methods: {
        //...
      }
    });
  }
};
