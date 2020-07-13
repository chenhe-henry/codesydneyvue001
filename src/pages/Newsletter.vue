<template>
  <div class="newsletter">
    <BaseBanner>🏗 Newsletter Page is Coming Soon</BaseBanner>
    <div v-for="project in project" :key="project.id">
      {{ project.id }}: {{ project.title }}
    </div>
  </div>
</template>
<script>
import ProjectService from "../services/ProjectService";
export default {
  data() {
    return {
      project: {},
    };
  },
  components: {},
  created() {
    ProjectService.getProjects()
      .then((res) => {
        this.project = res.data;
        this.project.length = 9;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.newsletter {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>
