<template>
  <div class="homepage">
    <div class="banner">
      Sydney Volunteer
      <br />Programmers
    </div>
    <OurService :title="serviceTitle" />
  </div>
</template>

<script>
import OurService from "./Content/OurService/OurService";
export default {
  name: "HomePage",
  props: {
    msg: String
  },
  components: {
    OurService
  },
  data() {
    return {
      serviceTitle: "What we do"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage {
  margin-top: 15vh;

  color: white;
  background-color: rgb(8, 90, 125);
}
.banner {
  height: 50vh;
  font-size: 5rem;
  padding-top: 10vh;
}
</style>
