<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="container">
    <nav>
      <RouterLink class="router-label" to="/binhai">滨海</RouterLink>&nbsp;|&nbsp;
      <RouterLink class="router-label" to="/chashan">茶山</RouterLink>&nbsp;|&nbsp;
      <RouterLink class="router-label" to="/yueqing">乐清</RouterLink>&nbsp;|&nbsp;
      <RouterLink class="router-label" to="/system">学生管理系统</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin-top: 20%;
}
.nav {
  display: flex;
  justify-content: center;
}
.router-label {
  color: black;
  font-size: larger;
}
.router-link-active {
  color: green;
  font-weight: bold;
}
</style>
