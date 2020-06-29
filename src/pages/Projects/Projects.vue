<template>
  <div class="projects">
    <Banner :content="banner.comingSoon" />
    <Vote
      :totalVotes="totalVotes"
      @add-to-vote="addVotes"
      @remove-from-vote="deleteVote"
    />
    <Banner :content="banner.comingSoon" />
    <h1>Ideas</h1>
  </div>
</template>
<script>
import Banner from "../../components/Banner/Banner";
import Vote from "../../components/Vote/Vote";
export default {
  data() {
    return {
      banner: {
        content: `Sydney Volunteer
      <br />Programmers`,
        comingSoon: ` 🏗 Projects Page is Coming Soon`,
      },
      totalVotes: 0,
    };
  },
  components: {
    Banner,
    Vote,
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

<style lang="scss" scoped>
.projects {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
