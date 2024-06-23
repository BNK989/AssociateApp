<template>
    <div>
        <h1 class="text-3xl font-bold">Lets check how well you now each other</h1>
        <h3>This is the about page</h3>
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
