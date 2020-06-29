import Vue from "vue";
import Router from "vue-router";
import Home from "../components/HomePage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/nice",
      name: "home",
      component: Home,
    },
  ],
});
