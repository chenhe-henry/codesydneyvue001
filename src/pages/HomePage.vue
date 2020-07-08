<template>
  <div class="homepage">
    <BaseBanner class="homepage__banner"
      >Sydney Volunteer <br />Programmers</BaseBanner
    >
    <OurService :title="serviceTitle" />
  </div>
</template>

<script>
import OurService from "../components/OurService";

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    OurService,
  },
  data() {
    return {
      serviceTitle: "What we do",
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
