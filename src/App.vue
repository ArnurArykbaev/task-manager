<template>
  <div id="app">
    <b-container fluid>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/taskList">Task list</router-link>
      </nav>
      <router-view />
    </b-container>
  </div>
</template>

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
