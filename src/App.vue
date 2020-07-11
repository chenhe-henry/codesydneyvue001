<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" >
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      3,
      [col-start] minmax(min-content, 28rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
}
:root {
  //color
  --banner-bg-color: rgb(8, 90, 125);
  --banner-text-color: white;
  //font-size
  --p-font-size: 1rem;
  --nav-font-size: 1.1rem;
  --title-font-size: 1.5rem;
  --heading-font-size: 3rem;
  //font-weight
  --p-font-weight: 500;
  --nav-font-weight: 600;
  --title-font-weight: 700;
  --heading-font-weight: bold;
  //height
  --banner-height: 15vh;
}
</style>
