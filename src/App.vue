<template>
  <div id="app">
    <nav>
      <div></div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

nav {
  display: grid;
  grid-template-columns: 1fr 150px 150px 150px;
}

a {
  color: #333333;
  text-decoration: none;
}

a:hover {
  color: #999999;
}

@media screen  and (max-width: 320px) {
    nav {
      grid-template-columns: 1fr 100px 100px 100px 1fr;
    }
}
</style>
