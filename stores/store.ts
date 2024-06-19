import { defineStore } from 'pinia'
import type { User } from '@/types/user'


interface State {
    count: number;
    user: User | null;
    userId: string | null;
}

export const useStore = defineStore('store', {
    state: (): State => ({
        count: 99,
        user: null,
        userId: null
    }),
    actions: {
        increment() {
            this.count++
        },
        //UNUSED
        setUser(user: User | null) {
            this.user = user;
        },
        //UNUSED
            setUserId(userId: string | null) {
            this.userId = userId;
        }
    }
})