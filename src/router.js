import Vue from "vue";
import Router from "vue-router";
import Home from "./components/HomePage.vue";
import Awards from "./pages/Awards/Awards.vue";
import Campers from "./pages/Campers/Campers.vue";
import Contact from "./pages/Contact/Contact.vue";
import Newsletter from "./pages/Newsletter/Newsletter.vue";
import Testimonials from "./pages/Testimonials/Testimonials.vue";
import VueProgress from "./pages/VueProgress/VueProgress.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/awards",
      name: "awards",
      component: Awards,
    },
    {
      path: "/campers",
      name: "campers",
      component: Campers,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/newsletter",
      name: "newsletter",
      component: Newsletter,
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: Testimonials,
    },
    {
      path: "/vueProgress",
      name: "vueProgress",
      component: VueProgress,
    },
  ],
});
