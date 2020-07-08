<template>
  <div class="contact">
    <Banner :content="banner.comingSoon" />
  </div>
</template>
<script>
import Banner from "../components/Banner";
export default {
  data() {
    return {
      banner: {
        content: `Sydney Volunteer
      <br />Programmers`,
        comingSoon: ` 🏗 Contact Page is Coming Soon`,
      },
    };
  },
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
