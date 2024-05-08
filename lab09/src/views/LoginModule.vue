<template>
  <div class="login-container">
    <h3>请登录</h3>
    <div class="form">
      <input type="text" v-model="id" placeholder="请输入学号" />
      <input type="password" v-model="password" placeholder="请输入密码" />
      <button @click="validate">登录</button>
      <span class="lint">{{ lint }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

const id = ref('')
const password = ref('')
const lint = ref('')

const validate = () => {
  if (id.value === 'admin' && password.value === '123456') {
    sessionStorage.setItem('isLogin', 'true')
    router.push('/system')
  } else {
    lint.value = '登录失败，学号或密码错误!'
    setTimeout(() => {
      lint.value = ''
    }, 2000)
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  > * {
    display: block;
  }
}
.lint {
  color: red;
  height: 20px;
}
</style>
