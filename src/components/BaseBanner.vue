<template>
  <div class="banner">
    <h1 class="banner-content">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  color: var(--banner-text-color);
  background-color: var(--banner-bg-color);
  height: var(--banner-height);
  font-size: var(--title-font-size);
  font-weight: var(--title-font-weight);
  grid-column: full-start / full-end;
}

/* .banner-content::after {
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
} */
</style>
