<template>
  <div class="baseCard">
    <slot name="img" class="baseCard__img"></slot>
    <slot name="title" class="baseCard__title"></slot>
    <slot name="content" class="baseCard__content"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.baseCard {
  margin: 0 20px;
}
</style>