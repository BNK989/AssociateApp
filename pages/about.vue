<template>
    <div>
        <h2 class="text-3xl font-bold">About The Game</h2>
        <p>The Association game is a word association game with a chat twist.</p>
        <p>Chat with as many players as you want. (keep it short) and then start playing: try and recreate the messages you've sent to each other and see how far backwords you can get</p>
        <h2 class="text-3xl font-bold">About The Developer</h2>
        <h3>Ben Klinovsky</h3>
        <p>I'm Ben this game is part of my nuxt3 projects you can find it on my github</p>
        <p>This is also a family project with both my siblings contributing and supporting this project</p>
        <h2 class="text-3xl font-bold">Credits</h2>
        <h5>Contributors</h5>
        <ul>
            <li>Tom</li>
            <li>Maya</li>
            <li>Asaf</li>
        </ul>
        <!-- <pre>{{ locale }}</pre>
        <pre>{{ locales[0] }}</pre>
        <pre>{{ $t('About_title') }}</pre>
        <div class="flex gap-4">
        </div>
        <select v-model="selectedLocale">
            <option v-for="l in locales" :key="l.code" :value="l.code">{{ l.name }}</option>
        </select>
        <nuxt-link :to="localPath('/')">Go to homepage</nuxt-link> -->
    </div>
</template>

<script lang="ts" setup>
const {locale, setLocale, locales} = useI18n()
const localPath = useLocalePath()
const selectedLocale = computed({
    get: () => locale.value,
    set: (v) => setLocale(v)
})
</script>
