<template>
  <div class="project">
    <h1>Project: {{projectName}}</h1>
    <h3 class="project__description">{{description}}</h3>
  </div>
</template>

<script>
export default { props: ["projectName", "description"] };
</script>

<style lang="scss" >
.project {
  margin-top: 15vh;
  height: 65vh;
  grid-column: full-start / full-end;
  &__description {
    text-align: justify;
    margin: 5rem;
  }
}
</style>