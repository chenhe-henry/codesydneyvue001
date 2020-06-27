<template>
  <div id="app">
    <Header />
    <HomePage />
    <Banner :content="banner.comingSoon" />
    <Vote :totalVotes="totalVotes" @add-to-vote="addVotes" @remove-from-vote="deleteVote" />
    <Banner :content="banner.comingSoon" />
    <Reviews @review-submitted="addReview" :reviews="reviews" />
    <Footer />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Vote from "./components/Vote/Vote";
import Reviews from "./components/Reviews/Reviews";
export default {
  name: "App",
  components: {
    HomePage,
    Header,
    Footer,
    Banner,
    Vote,
    Reviews
  },
  data() {
    return {
      isDisabled: true,
      banner: {
        comingSoon: ` 🏗 Coming Soon`
      },
      totalVotes: 0,
      reviews: []
    };
  },
  methods: {
    addVotes() {
      this.totalVotes += 1;
    },
    deleteVote() {
      this.totalVotes -= 1;
    },
    addReview(websiteReview) {
      this.reviews.push(websiteReview);
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
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      3,
      [col-start] minmax(min-content, 28rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
}
</style>
