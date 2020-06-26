<template>
  <div id="app">
    <Header />
    <HomePage />
    <Banner :content="banner.comingSoon" />
    <h1>Search for "{{message}}"</h1>
    <input v-model="message" placeholder="enter the name" aria-label="searchInput" />
    <button :disabled="message.length === 0 ? true : false" @click="clearInput">Search</button>
    <button :disabled="message.length === 0 ? true : false" @click="clearInput">x</button>
    <hr />
    <Vote :totalVotes="totalVotes" @add-to-vote="addVotes" @remove-from-vote="deleteVote" />
    <Banner :content="banner.comingSoon" />
    <Footer />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Content/Banner/Banner";
import Vote from "./components/Content/Vote/Vote";
export default {
  name: "App",
  components: {
    HomePage,
    Header,
    Footer,
    Banner,
    Vote
  },
  data() {
    return {
      message: "",
      isDisabled: true,
      banner: {
        comingSoon: `Still buidling this part 🏗 Will coming Soon`
      },
      totalVotes: 0
    };
  },
  methods: {
    clearInput() {
      this.message = "";
    },
    addVotes() {
      this.totalVotes += 1;
    },
    deleteVote() {
      this.totalVotes -= 1;
    }
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
