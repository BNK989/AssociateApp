<template>
    <div class="mx-2 mt-2">
        <h2 class="mb-2 text-3xl font-bold">About The Game</h2>
        <p>The Association game is a word association game with a chat twist.</p>
        <p>
            Chat with as many players as you want. (keep it short) and then start playing:
            try and recreate the messages you've sent to each other and see how far
            backwords you can get
        </p>
        <h2 class="mt-4 text-3xl font-bold">About The Developer</h2>
        <h3 class="my-1">Ben Klinovsky</h3>
        <p>I'm Ben this game is part of my nuxt3 projects you can find it on my github</p>
        <p>
            This is also a family project with both my siblings contributing and
            supporting this project
        </p>
        <h2 class="mt-4 text-3xl font-bold">Credits</h2>
        <h5 class="mt-1">Contributors</h5>
        <ul class="list-disc pl-4">
            <li class="text-base odd:text-accent-1 even:text-accent-2">Tom</li>
            <li class="text-base odd:text-accent-1 even:text-accent-2">Maya</li>
            <li class="text-base odd:text-accent-1 even:text-accent-2">Asaf</li>
        </ul>
        <!-- <pre>{{ locale }}</pre>
        <pre>{{ locales[0] }}</pre>
        <pre>{{ $t('About_title') }}</pre>
        <div class="flex gap-4"></div>
        <select v-model="selectedLocale">
            <option v-for="l in locales" :key="l.code" :value="l.code">
                {{ l.name }}
            </option>
        </select>
        <nuxt-link :to="localPath('/')">Go to homepage</nuxt-link> -->
        <!-- <div class="flex-center gap-4">
            <button class="p-4 bg-accent-2/40" @click="start">Confetti!</button>
            <button class="p-4 border border-accent-2/40" @click="stop">Stop</button>
        </div> -->
        <!-- <div class="text-5xl flex-center gap-4 my-6">
            <button @click="() => (num += 100)">+</button>
            <MiniCounter :n="num" />
            <button @click="() => (num -= 100)">-</button>
        </div> -->
        <!-- <div class="flex flex-col">
            <MiniEncrypter :t="text" />
            <button class="p-4 border border-accent-2/40" @click="() => (text += 'bla')">
                Bla
            </button>
        </div> -->
        <!-- <div class="balls flex-center gap-4">
            <div class="size-8 rounded-full bg-accent-1"></div>
            <div class="size-8 rounded-full bg-accent-2"></div>
            <div class="size-8 rounded-full bg-accent-3"></div>
        </div> -->
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
definePageMeta({
    layout: 'scrollable',
})
const { locale, setLocale, locales } = useI18n()
const localPath = useLocalePath()
const selectedLocale = computed({
    get: () => locale.value,
    set: (v) => setLocale(v),
})
const num = ref(0)
const text = ref('A')

const nuxtApp = useNuxtApp()
const { appContext } = getCurrentInstance()
const start = () => {
    nuxtApp.$confettiStart(appContext)
}
const stop = () => {
    nuxtApp.$confettiStop(appContext)
}

onMounted(() => {
    gsap.from('.list-disc > li', {
        scale: 0,
        duration: 2,
        stagger: 0.25,
    })
})
</script>
