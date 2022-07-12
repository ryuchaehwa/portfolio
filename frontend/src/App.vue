<template>
  <div id="app">
    <menu-container></menu-container>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuContainer from "./components/menu/MenuContainer.vue";

export default {
  name: "App",
  components: {
    MenuContainer,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  min-width: 1200px;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
