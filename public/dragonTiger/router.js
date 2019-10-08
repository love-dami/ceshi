import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import salesOffice from "./comps/salesOffice"; //营业部
import individualShare from "./comps/individualShare"; //个股

var router = new Router({
  routes: [
    { path: "/", redirect: "/individualShare" },
    { path: "/individualShare", component: individualShare },
    { path: "/salesOffice", component: salesOffice }
  ]
});

export default router;
