import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import type { Game } from '@/types/game'

interface State {
    count: number
    user: User | null
    toast: Toast | null
    game: Game | null
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
        game: null,
    }),
    getters: {
        playersEmails: (state) => state.game?.players.map(p => p.email),
        userPref: (state) => state.user?.preferences
    },
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
        setGame(game: Game) {
            this.game = game
        }
    },
})
