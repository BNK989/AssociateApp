<template></template>

<script lang="ts" setup>
const emit = defineEmits<{
    closeTour: () => void
}>()
const { $intro } = useNuxtApp()

const startTour = () => {
    $intro()
        .onexit(() => {
            emit('closeTour')
        })
        .setOptions({
            exitOnEsc: true,
            autoPosition: true,

            onexit: () => {
                console.log('close')
            },

            steps: [
                {
                    element: document.querySelector(
                        'section.mx-2.flex.h-14.items-center.justify-between',
                    ),
                    title: 'View and add players to the game',
                    intro: 'Click "+" to Invite players',
                },
                {
                    element: document.querySelector('.flex-center.min-w-fit.flex-col'),
                    title: 'View and add players to the game',
                    intro: 'View the game score',
                },
                {
                    element: document.querySelector(
                        'section.mx-2.flex.h-14.items-center.justify-between > button',
                    ),
                    title: 'Game Action Button',
                    intro: 'Click to get hints or start guessing backwards to the original word',
                },
                {
                    element: document.querySelector('form > div.relative'),
                    title: 'Send messages to the chat',
                    intro: 'Like any chat simply type your message and press enter',
                },
                {
                    title: 'If you need, you can always take the tour again from the chat menu',
                },
            ],
        })
        .start()
}

onMounted(() => {
    startTour()
})
</script>
