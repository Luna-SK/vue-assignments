<template>
  <div>
    <h3>温州理工滨海校区</h3>
    <div>
      <input type="text" v-model="input" @keyup.enter="query" placeholder="请输入学号" />
      <button @click="query">查询</button>
    </div>
    <div class="info" v-if="status">
      <div>学生信息</div>
      <div>学号: {{ data.id }}</div>
      <div>姓名: {{ data.name }}</div>
      <div>年龄: {{ data.age }}</div>
      <div>专业: {{ data.major }}</div>
    </div>
    <div class="lint" v-else>{{ lint }}</div>
  </div>
</template>

<script setup lang="ts">
import type { StudentInfo } from '@/types'
import { reactive, ref } from 'vue'
import stuData from '@/utils/data'

const input = ref('')

const status = ref(false)

const lint = ref('')

const data = reactive<StudentInfo>({
  id: 0,
  name: '',
  age: 0,
  major: ''
})

const query = () => {
  const id = Number.parseInt(input.value) ?? 0
  const index = stuData.findIndex((item) => item.id === id)
  if (id === 0 || index === -1) {
    status.value = false
    lint.value = '请输入正确的学号!(1-10)'
    setTimeout(() => {
      lint.value = ''
    }, 2000)
    return
  }
  Object.assign(data, stuData[index])
  status.value = true
}
</script>

<style scoped>
.lint {
  color: red;
  height: 250px;
  margin-top: 10px;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
</style>
