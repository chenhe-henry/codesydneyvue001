<template>
  <div class="Reviews">
    <button
      class="tab"
      :class="{activeTab: selectedTab === tab}"
      v-for="(tab,index) in tabs"
      :key="index"
      @click="selectedTab = tab"
    >{{tab}}</button>
    <div v-show="selectedTab===`Reviews`">
      <div>
        <h3 v-if="reviews.length === 0">There are no reviews yet</h3>
        <h3 v-else-if="reviews.length === 1">There are some reviews from {{reviews.length}} person</h3>
        <h3 v-else>There are some reviews from {{reviews.length}} people</h3>
      </div>
      <div class="Review-blocks">
        <div v-for="(review,index) in reviews" :key="index" class="Review-block">
          <h4>Review Form {{review.name}}</h4>
          <h4>Rating: {{review.rating}}</h4>
          <h4>Review: {{review.review}}</h4>
        </div>
      </div>
    </div>
    <div v-show="selectedTab === `Make a Review`">
      <div v-if="errors.length">
        <strong>Please correct the following error(s):</strong>
        <ul>
          <li v-for="(error,index) in errors" :key="index">{{error}}</li>
        </ul>
      </div>
      <form class="Reviews-form" @submit.prevent="onSubmit">
        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name" aria-label="name" />
        </p>
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating" aria-label="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </p>

        <p>
          <label for="review">Review:</label>
          <br />
          <textarea id="review" v-model="review" aria-label="review" />
        </p>
        <p>
          <input type="submit" value="Submit" aria-label="submit" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
  props: {
    reviews: Array
  },

  data() {
    return {
      name: null,
      rating: null,
      review: null,
      errors: [],
      tabs: ["Reviews", "Make a Review"],
      selectedTab: "Reviews"
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.rating && this.review) {
        let websiteReview = {
          name: this.name,
          rating: this.rating,
          review: this.review
        };
        this.$emit("review-submitted", websiteReview);
        this.name = null;
        this.rating = null;
        this.review = null;
        this.errors = [];
        this.selectedTab = "Reviews";
      } else {
        this.errors = [];
        if (!this.name) this.errors.push("Name required");
        if (!this.rating) this.errors.push("Rating required");
        if (!this.review) this.errors.push("Review required");
      }
    }
  }
};
</script>

<style  scoped>
.Reviews {
  grid-column: center-start / center-end;
}
.Reviews-form {
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
}
.Review-blocks {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.Review-block {
  border: 1px solid #000;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  transition: all 0.2s;
}
.Review-block:hover {
  transform: translateY(-5px);
  background-color: rgba(12, 233, 181, 0.961);
}
.Review-block:active {
  transform: translateY(0);
}
.activeTab {
  background-color: rgba(12, 233, 181, 0.961);
}
.tab {
  margin: 5px;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>