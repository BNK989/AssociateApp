import Vue from 'vue'
import IntroJs from 'intro.js'
import 'intro.js/introjs.css'
import '@/assets/css/introjs.css'

export default defineNuxtPlugin(() => {
    return {
            provide: {
                intro: IntroJs,
            }
        }
    }
)
