import Vue from "vue";
import VueRouter from "vue-router";

import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(VueRouter);
Vue.use(element);
import indexList from "./indexList.vue";
import indexQuery from "./indexQuery.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/indexQuery"
    },
    {
      path: "/indexQuery",
      component: indexQuery
    },
    {
      path: "/indexList",
      component: indexList
    }
  ]
});

new Vue({
  el: "#list",
  router
});
