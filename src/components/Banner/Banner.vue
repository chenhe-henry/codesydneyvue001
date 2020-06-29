<template>
  <div class="banner">
    <h1 class="banner-content">{{ content }}</h1>
  </div>
</template>

<script>
export default { name: "Banner", props: { content: String } };
</script>

<style scoped>
.banner {
  color: white;
  background-color: rgb(8, 90, 125);
  height: 20vh;
  font-size: 2rem;
  grid-column: full-start / full-end;
}

.banner-content::after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  animation: ellipsis 2s infinite;
  position: absolute;
  content: "...";
}
@keyframes ellipsis {
  from {
    width: 2px;
  }
  to {
    width: 60px;
  }
}
</style>
