import Vue from "vue";
import Router from "vue-router";
import Admin from "./views/Admin.vue";
import AdminIndex from "./views/AdminIndex.vue";
import AdminLogin from "./views/AdminLogin.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "home",
      component: Home,
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "",
          name: "admin-index",
          component: AdminIndex
        },
        {
          path: "login",
          name: "admin-login",
          component: AdminLogin
        }
      ]
    }
  ],
});
