<template>
  <div class="campers">
    <Banner :content="banner.comingSoon" />
  </div>
</template>
<script>
import Banner from "../../components/Banner/Banner";
export default {
  data() {
    return {
      banner: {
        content: `Sydney Volunteer
      <br />Programmers`,
        comingSoon: ` 🏗 Campers Page is Coming Soon`,
      },
    };
  },
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.campers {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
