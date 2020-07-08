<template>
  <div class="testimonials">
    <BaseBanner>🏗 Testimonials Page is Coming Soon</BaseBanner>
    <Reviews @review-submitted="addReview" :reviews="reviews" />
  </div>
</template>
<script>
import Reviews from "../components/Reviews";
export default {
  data() {
    return {
      reviews: []
    };
  },
  components: {
    Reviews
  },
  methods: {
    addReview(websiteReview) {
      this.reviews.push(websiteReview);
    }
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
