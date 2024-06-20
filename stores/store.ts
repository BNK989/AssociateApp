import { defineStore } from 'pinia'
import type { User } from '@/types/user'

interface State {
    count: number
    user: User | null
    toast: Toast | null
}

type Toast = {
    msg: string
    type?: string
    duration?: number
}

export const useStore = defineStore('store', {
    state: (): State => ({
        count: 99,
        user: null,
        toast: null,
    }),
    actions: {
        increment() {
            this.count++
        },
        setUser(user: User | null) {
            this.user = user
        },
        setToast(toast: Toast) {
            this.toast = toast
        },
    },
})
