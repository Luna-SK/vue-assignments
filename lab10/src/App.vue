<template>
  <div id="app">
    <h1>购物车</h1>
    <div class="contents" v-for="item in cartStore.items" :key="item.name">
      <span>{{ item.name }} - ¥{{ item.price }} - 数量: {{ item.quantity }}</span>
      <button @click="cartStore.addItem(item.name, item.price)">+</button>
      <button @click="cartStore.removeItem(item.name)">-</button>
    </div>
    <p>总价: ¥{{ cartStore.total }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()

cartStore.addItem('手机', 1000)
cartStore.addItem('电脑', 2000)
cartStore.addItem('键盘', 200)
cartStore.addItem('键盘', 200)
</script>

<style scoped>
#app {
  gap: 10px;
}

.contents {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
