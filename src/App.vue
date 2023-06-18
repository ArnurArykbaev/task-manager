<template>
  <div id="app">
    <b-container fluid>
      <header>
        <HeaderPage v-if="currentRouteName !== 'home'" />
      </header>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import HeaderPage from "@/views/HeaderPage.vue";

export default {
  components: { HeaderPage },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #212529;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  background-color: #212529;
}

nav a.router-link-exact-active {
  color: #5787e0;
}
</style>
