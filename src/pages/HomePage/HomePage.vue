<template>
  <div class="homepage">
    <Banner class="homepage__banner" :content="banner.content" />
    <OurService :title="serviceTitle" />
    <Banner class="homepage__banner" :content="banner.comingSoon" />
    <Vote
      :totalVotes="totalVotes"
      @add-to-vote="addVotes"
      @remove-from-vote="deleteVote"
    />
    <Banner class="homepage__banner" :content="banner.comingSoon" />
    <Reviews @review-submitted="addReview" :reviews="reviews" />
    <Footer />
  </div>
</template>

<script>
import OurService from "../../components/OurService/OurService";
import Banner from "../../components/Banner/Banner";
import Vote from "../../components/Vote/Vote";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    OurService,
    Vote,
    Reviews,
    Banner,
    Footer,
  },
  data() {
    return {
      serviceTitle: "What we do",
      banner: {
        content: `Sydney Volunteer
      Programmers`,
        comingSoon: ` 🏗 Coming Soon`,
      },
      totalVotes: 0,
      reviews: [],
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
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.homepage {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
