<template>
  <div class="header">
    <h1>Code.Sydney</h1>
    <a
      v-for="nav in navigations"
      :key="`${nav.title}`"
      :href="`${nav.path}`"
      class="header-link"
    >{{ nav.title }}</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  data() {
    return {
      navigations: [
        {
          title: "Home",
          path: ""
        },
        {
          title: "Awards",
          path: ""
        },
        {
          title: "Testimonials",
          path: ""
        },
        {
          title: "Newsletter",
          path: ""
        },
        {
          title: "Vue",
          path: ""
        },
        {
          title: "Campers",
          path: ""
        },
        {
          title: "Contact",
          path: ""
        }
      ]
    };
  }
};
</script>


<style  scoped>
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