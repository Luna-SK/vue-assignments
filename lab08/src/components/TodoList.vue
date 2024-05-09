<template>
  <div id="list-container">
    <h2>自律一下</h2>
    <div>
      <input v-model="newTodoTitle" type="text" placeholder="添加新的待办事项" />
      <button @click="addTodo">添加</button>
    </div>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :title="todo.title"
      :completed="todo.completed"
      @update:completed="updateTodoCompleted(index, $event)"
      @remove-todo="removeTodo(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

interface Todo {
  title: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const newTodoTitle = ref('')

const addTodo = () => {
  todos.value.push({
    title: newTodoTitle.value,
    completed: false
  })
  newTodoTitle.value = ''
}

const removeTodo = (index: number) => {
  todos.value.splice(index, 1)
}

const updateTodoCompleted = (index: number, completed: boolean) => {
  todos.value[index].completed = completed
}
</script>

<style scoped>
#list-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  > h2 {
    display: flex;
    justify-content: center;
  }
}
</style>
