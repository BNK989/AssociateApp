import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        count: 99,
        user: null
    }),
    actions: {
        increment() {
            this.count++
        }
    }
})

// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
// }