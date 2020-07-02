<template>
  <div class="project">
    <h1>This page is for {{projectName}}</h1>
  </div>
</template>

<script>
export default { props: ["projectName"] };
</script>

<style>
.project {
  margin-top: 15vh;
  grid-column: full-start / full-end;
}
</style>