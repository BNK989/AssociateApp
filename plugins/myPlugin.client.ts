import Vue from 'vue'
import VueConfetti from 'vue-confetti'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: (msg: string) => `Hello ${msg}!`,
            test: (msg: string = 'world') => {
                alert(`Hello ${msg}!`)
            },

            confettiStart: (appContext) => {
                appContext.app.use(VueConfetti)
                appContext.config.globalProperties.$confetti.start()
            },

            confettiStop: (appContext) => {
                appContext.app.use(VueConfetti)
                appContext.config.globalProperties.$confetti.stop()
            },
        },
    }
})
