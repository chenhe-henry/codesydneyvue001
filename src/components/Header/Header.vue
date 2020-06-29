<template>
  <div class="header">
    <h1>Code.Sydney</h1>
    <router-link class="header__link" :to="{ name: 'home' }">Home</router-link>
    |
    <router-link class="header__link" :to="{ name: 'awards' }"
      >Awards</router-link
    >
    |
    <router-link class="header__link" :to="{ name: 'projects' }"
      >Projects</router-link
    >
    |
    <router-link class="header__link" :to="{ name: 'testimonials' }"
      >Testimonials</router-link
    >
    |
    <router-link class="header__link" :to="{ name: 'ourTeam' }"
      >OurTeam</router-link
    >
    |
    <router-link class="header__link" :to="{ name: 'newsletter' }"
      >Newsletter</router-link
    >
    |
    <router-link class="header__link" :to="{ name: 'vueProgress' }"
      >Vue</router-link
    >
    |
    <router-link class="header__link" :to="{ name: 'campers' }"
      >Campers</router-link
    >
    |
    <router-link class="header__link" :to="{ name: 'contact' }"
      >Contact</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.header {
  grid-column: full-start / full-end;
  height: 15vh;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  color: black;
  padding-right: 10vw;
  z-index: 1000;
  opacity: 0.95;
  &__link {
    font-weight: bold;
    margin: 10px;
    text-decoration: none;
    color: grey;
    cursor: pointer;
    transition: color 0.2s ease;
    &:hover {
      color: black;
    }
  }
}
</style>
