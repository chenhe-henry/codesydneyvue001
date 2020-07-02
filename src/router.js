import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/HomePage/HomePage.vue";
import Awards from "./pages/Awards/Awards.vue";
import Campers from "./pages/Campers/Campers.vue";
import Contact from "./pages/Contact/Contact.vue";
import Newsletter from "./pages/Newsletter/Newsletter.vue";
import Testimonials from "./pages/Testimonials/Testimonials.vue";
import VueProgress from "./pages/VueProgress/VueProgress.vue";
import Projects from "./pages/Projects/Projects";
import OurTeam from "./pages/OurTeam/OurTeam";
import Project from "./pages/Projects/Project/Project";
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
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/projects/:projectName",
      name: "project",
      component: Project,
      props: true,
    },
    {
      path: "/ourteam",
      name: "ourTeam",
      component: OurTeam,
    },
  ],
});
