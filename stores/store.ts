import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import type { Game } from '@/types/game'
import type { Toast } from '@/types/toast'

interface State {
    count: number
    user: User | null
    toast: Toast | null
    game: Game | null
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
        userPref: (state) => state.user?.preferences,
        activeGameScore: (state) => state.game?.score,

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
        },
        setScore(score: number) {
            this.game.score += score
        },
    },
})
