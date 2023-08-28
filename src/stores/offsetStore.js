import { defineStore } from 'pinia'

export const useOffsetStore = defineStore({
  id: 'offset',
  state: () => ({
    isOpen: false,
    mutation: null
  }),
  actions: {
    open(mutation) {
      this.isOpen = true
      this.mutation = mutation
    },
    close() {
      this.isOpen = false
      this.mutation = null
    }
  }
})
