<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <div id="container">
    <TodoList />
  </div>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>
