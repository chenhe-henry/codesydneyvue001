<template>
  <div class="icon-wrapper">
    <svg
      class="icon"
      :width="width"
      :height="height"
      :stroke="color"
      :fill="fill"
      :stroke-width="strokeWidth"
    >
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + name }" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    color: {
      type: String,
      default: "black",
    },
    fill: {
      type: String,
      default: "none",
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    strokeWidth: {
      type: [Number, String],
      default: 2,
    },
  },
};
</script>

<style lang="scss" scoped></style>
