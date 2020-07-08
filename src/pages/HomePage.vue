<template>
  <div class="homepage">
    <Banner class="homepage__banner" :content="banner.content" />
    <OurService :title="serviceTitle" />
  </div>
</template>

<script>
import OurService from "../components/OurService";
import Banner from "../components/Banner";

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    OurService,
    Banner,
  },
  data() {
    return {
      serviceTitle: "What we do",
      banner: {
        content: `Sydney Volunteer Programmers`,
        comingSoon: ` 🏗 Coming Soon`,
      },
    };
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
