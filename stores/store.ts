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
        inviteesEmails: (state) => state.game?.invites.map(i => i.email),
        // inviteeEmails: (state) => {
        //     // if(!state.game?.invites || state.game?.invites.length) return [555]
        //     console.log('state.game.invites:', state.game.invites)
        //     // return state.game?.invites//.map(inv => inv.email)
        //     return [555 ,444]
        // },
        userPref: (state) => state.user?.preferences,
        activeGameScore: (state) => state.game?.score,

    },
    // setters: {
    //     inviteeEmails: (state, emails: string[]) => {
    //         state.game?.invitees = emails.map(e => ({ email: e }))
    //     }
    // },
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
            this.game.score = score
        },
    },
})
