<template>
  <div id="app">
    <div class="header">
      <h1>Code.Sydney</h1>
      <router-link class="header__link" :to="{ name: 'home' }"
        >Home</router-link
      >
      |
      <router-link class="header__link" :to="{ name: 'awards' }"
        >Awards</router-link
      >
      |
      <router-link class="header__link" :to="{ name: 'projects' }"
        >Projects</router-link
      >
      |
      <router-link class="header__link" :to="{ name: 'testimonials' }"
        >Testimonials</router-link
      >
      |
      <router-link class="header__link" :to="{ name: 'newsletter' }"
        >Newsletter</router-link
      >
      |
      <router-link class="header__link" :to="{ name: 'vueProgress' }"
        >Vue</router-link
      >
      |
      <router-link class="header__link" :to="{ name: 'campers' }"
        >Campers</router-link
      >
      |
      <router-link class="header__link" :to="{ name: 'contact' }"
        >Contact</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      3,
      [col-start] minmax(min-content, 28rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
}
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
.header__link {
  font-weight: bold;
  margin: 10px;
  text-decoration: none;
  color: grey;
  cursor: pointer;
  transition: color 0.2s ease;
}
.header__link:hover {
  color: black;
}
</style>
