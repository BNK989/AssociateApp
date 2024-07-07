export default defineNuxtPlugin({
    // dependsOn: ['my-api'],
    parallel: true,
    async setup() {
        const { $api } = useNuxtApp()
        // await $api('/api/heartbeat')
    }
})