<template>
  <div class="newsletter">
    <BaseBanner>🏗 Newsletter Page is Coming Soon</BaseBanner>
    {{ project.last_update }}
    <ul
      v-for="project in project.rows"
      :key="project.id"
      to="https://google.com"
    >
      <li>
        <img :src="project.flag" :alt="project.country" />{{ project.country }}:
        {{ project.active_cases }}
      </li>
    </ul>
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
        this.project = res.data.data;

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
