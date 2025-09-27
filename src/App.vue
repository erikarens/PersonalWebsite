<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
import { RouterView } from "vue-router";
import Sidebar from "./components/sidebar.vue";
</script>

<template>
  <Sidebar />
  <header>
    <div class="navigation-bar">
      <h3 class="navbar-logo">
        <a href="/" class="primary f30 secondary-l">arens.</a>
      </h3>
      <Navigation />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.navigation-bar {
  display: flex;
  margin: 0 0 2rem 0;
  justify-content: space-between;
  margin-top: 15px;
}

.navbar-logo {
  transition: all 0.4s;
}
.navbar-logo:hover {
  transition: all 0.3s ease-out;
  transform: scale(1.1);
}

a {
  text-decoration: none;
}
</style>
