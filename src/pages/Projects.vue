<template>
  <div class="projects">
    <BaseBanner>🏗 Projects Page is Coming Soon</BaseBanner>
    <Vote :totalVotes="totalVotes" @add-to-vote="addVotes" @remove-from-vote="deleteVote" />
    <BaseBanner>🏗 Ideas are Coming Soon</BaseBanner>
    <h1>Ideas</h1>
  </div>
</template>
<script>
import Vote from "../components/Vote";
export default {
  data() {
    return {
      totalVotes: 0
    };
  },
  components: {
    Vote
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

<style lang="scss" scoped>
.projects {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
