<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
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
</style>
