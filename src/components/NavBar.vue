<template>
  <div class="nav">
    <!-- <div class="nav__logo">
      <img src="../assets/logo.png" alt="logo1" height="25px" /> Code.Sydney
    </div>-->
    <router-link class="nav__link" :to="{ name: 'home' }">Home</router-link>|
    <router-link class="nav__link" :to="{ name: 'awards' }">Awards</router-link>|
    <router-link class="nav__link" :to="{ name: 'projects' }">Projects</router-link>|
    <router-link class="nav__link" :to="{ name: 'testimonials' }">Testimonials</router-link>|
    <router-link class="nav__link" :to="{ name: 'ourTeam' }">OurTeam</router-link>|
    <router-link class="nav__link" :to="{ name: 'newsletter' }">Newsletter</router-link>|
    <router-link class="nav__link" :to="{ name: 'vueProgress' }">Vue</router-link>|
    <router-link class="nav__link" :to="{ name: 'campers' }">Good to go</router-link>|
    <router-link class="nav__link" :to="{ name: 'contact' }">Contact</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  font-size: var(--nav-font-size);
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
  &__logo {
    font-size: var(--heading-font-size);
    font-weight: var(--heading-font-weight);
  }
  &__link {
    font-weight: var(--nav-font-weight);
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