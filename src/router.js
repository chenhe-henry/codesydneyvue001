import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/HomePage.vue";
import Awards from "./pages/Awards.vue";
import Campers from "./pages/Campers.vue";
import Contact from "./pages/Contact.vue";
import Newsletter from "./pages/Newsletter.vue";
import Testimonials from "./pages/Testimonials.vue";
import VueProgress from "./pages/VueProgress.vue";
import Projects from "./pages/Projects";
import OurTeam from "./pages/OurTeam";
import Project from "./pages/Project";
import fileNotFound from "./pages/fileNotFound";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/projects/:id",
      name: "project",
      component: Project,
      props: true,
    },
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
      path: "/ourteam",
      name: "ourTeam",
      component: OurTeam,
    },
    { path: "*", component: fileNotFound },
  ],
});
