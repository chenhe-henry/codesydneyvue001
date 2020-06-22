<template>
  <div id="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    HomePage,
    Header,
    Footer
  }
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
}
</style>
