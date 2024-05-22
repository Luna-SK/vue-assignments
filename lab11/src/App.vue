<script setup lang="ts">
import { reactive, ref } from 'vue'

interface Book {
  id?: number
  title: string
  author: string
  copies: number
}

const data: Book[] = reactive([
  { id: 1, title: 'Python编程', author: 'John Doe', copies: 4 },
  { id: 2, title: '历史的秘密', author: 'Jane Smith', copies: 3 },
  { id: 3, title: '宇宙探索', author: 'Emily Brown', copies: 2 },
  { id: 4, title: '健康生活', author: 'Mike Johnson', copies: 5 },
  { id: 5, title: '数学之美', author: 'Sarah Lee', copies: 4 },
  { id: 6, title: '艺术欣赏', author: 'David White', copies: 3 },
  { id: 7, title: '编程入门', author: 'Alice Green', copies: 2 },
  { id: 8, title: '科幻世界', author: 'Frank Black', copies: 5 },
  { id: 9, title: '自然奇观', author: 'Grace Blue', copies: 4 },
  { id: 10, title: '音乐之声', author: 'Tom Red', copies: 3 }
])

const add = (index: number) => {
  data[index].copies++
}

const remove = (index: number) => {
  if (data[index].copies === 1) {
    data.splice(index, 1)
  } else {
    data[index].copies--
  }
}

const addDialogVisible = ref(false)
const addedBook: Book = reactive({
  title: '',
  author: '',
  copies: 1
})

const addDialogClose = () => {
  addedBook.title = ''
  addedBook.author = ''
  addedBook.copies = 1
}

const addBook = () => {
  data.push({
    id: data.length + 1,
    title: addedBook.title,
    author: addedBook.author,
    copies: addedBook.copies
  })
  addDialogVisible.value = false
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>图书管理</el-header>
      <el-main>
        <el-button class="add-button" type="primary" @click="addDialogVisible = true"
          >增加图书</el-button
        >
        <el-table border stripe :data="data" style="width: 100%">
          <el-table-column fixed prop="id" label="ID" min-width="120" />
          <el-table-column prop="title" label="书名" min-width="300" />
          <el-table-column prop="author" label="作者" min-width="300" />
          <el-table-column prop="copies" label="数量" min-width="160" />
          <el-table-column fixed="right" label="操作" min-width="160">
            <template #default="{ $index }">
              <el-button type="primary" size="small" @click="add($index)"> 增加 </el-button>
              <el-button type="danger" size="small" @click="remove($index)"> 减少 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <el-dialog
      v-model="addDialogVisible"
      title="增加图书"
      width="500"
      align-center
      @close="addDialogClose"
    >
      <el-form label-position="right" label-width="80px">
        <el-form-item label="书名">
          <el-input v-model="addedBook.title" placeholder="请输入书名" />
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="addedBook.author" placeholder="请输入作者" />
        </el-form-item>
        <el-form-item label="数量">
          <el-input type="number" v-model="addedBook.copies" placeholder="请输入数量" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addBook"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100%;
  width: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}

.el-header {
  background-color: #f5f7fa;
  line-height: 60px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}

.add-button {
  margin: 20px;
}
</style>
