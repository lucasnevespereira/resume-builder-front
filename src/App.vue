<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img class="logo" src="./assets/logo.svg" alt="logo" />
    <nav>
      <RouterLink to="/">Resume</RouterLink>
      <RouterLink to="/templates">Templates</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  background: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  position: sticky;
}

.logo {
  width: 50px;
  height: 50px;
}

nav {
  margin-left: 12px;
}

nav a {
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
}
</style>
