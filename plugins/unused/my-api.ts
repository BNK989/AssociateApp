export default defineNuxtPlugin({
    name: 'my-api',
    setup() {
        const api = $fetch.create({
            headers: {
                'X-Some-Custom': '1',
            },
        })

        return {
            provide: {
                api,
            },
        }
    },
})
