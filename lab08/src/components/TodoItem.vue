<template>
  <div>
    <input type="checkbox" :checked="completed" @change="toggleCompletion" />
    <span :class="{ 'line-through': completed }">{{ title }}</span>
    <button @click="removeTodo">删除</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: String,
  completed: Boolean
})

const emits = defineEmits(['update:completed', 'remove-todo'])

const toggleCompletion = () => {
  emits('update:completed', !props.completed)
}

const removeTodo = () => {
  emits('remove-todo')
}
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
