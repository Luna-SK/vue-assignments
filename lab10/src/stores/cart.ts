import { defineStore } from 'pinia'

interface CartItem {
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  getters: {
    total: (state) => state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  actions: {
    addItem(name: string, price: number) {
      const existingItem = this.items.find((item) => item.name === name)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ name, price, quantity: 1 })
      }
    },
    removeItem(name: string) {
      const itemIndex = this.items.findIndex((item) => item.name === name)
      if (itemIndex !== -1) {
        const item = this.items[itemIndex]
        if (item.quantity > 0) {
          item.quantity--
        }
      }
    }
  }
})
