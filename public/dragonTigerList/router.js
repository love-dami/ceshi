import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import shangHai from "./comps/shanghai"; //沪A/深A/机构----table
import salesOffice from "./comps/salesOffice"; //营业部

var router = new Router({
  routes: [
    { path: "/", redirect: "/shangHai" },
    { path: "/shangHai", component: shangHai },
    { path: "/salesOffice", component: salesOffice }
  ]
});

export default router;
