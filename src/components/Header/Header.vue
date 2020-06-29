<template>
  <div class="header">
    <h1>Code.Sydney</h1>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'awards' }">Awards</router-link> |
    <router-link :to="{ name: 'testimonials' }">Testimonials</router-link> |
    <router-link :to="{ name: 'newsletter' }">Newsletter</router-link> |
    <router-link :to="{ name: 'vueProgress' }">Vue</router-link> |
    <router-link :to="{ name: 'campers' }">Campers</router-link> |
    <router-link :to="{ name: 'contact' }">Contact</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      navigations: [
        {
          title: "Home",
          path: "",
        },
        {
          title: "Awards",
          path: "",
        },
        {
          title: "Testimonials",
          path: "",
        },
        {
          title: "Newsletter",
          path: "",
        },
        {
          title: "Vue",
          path: "",
        },
        {
          title: "Campers",
          path: "",
        },
        {
          title: "Contact",
          path: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  grid-column: full-start / full-end;
  height: 15vh;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  color: black;

  padding-right: 10vw;
  z-index: 1000;
  opacity: 0.95;
}
.header-link {
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
  color: grey;
  cursor: pointer;
  transition: color 1s ease;
}
.header-link:hover {
  color: black;
}
</style>

<!-- <a
      v-for="nav in navigations"
      :key="`${nav.title}`"
      :href="`${nav.path}`"
      class="header-link"
    >{{ nav.title }}</a> -->
