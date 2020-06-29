<template>
  <div class="testimonials">
    <Banner :content="banner.comingSoon" />
    <Reviews @review-submitted="addReview" :reviews="reviews" />
  </div>
</template>
<script>
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
export default {
  data() {
    return {
      banner: {
        content: `Sydney Volunteer
      <br />Programmers`,
        comingSoon: ` 🏗 Testimonials Page is Coming Soon`,
      },
      reviews: [],
    };
  },
  components: {
    Banner,
    Reviews,
  },
  methods: {
    addReview(websiteReview) {
      this.reviews.push(websiteReview);
    },
  },
};
</script>

<style lang="scss" scoped>
.testimonials {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
