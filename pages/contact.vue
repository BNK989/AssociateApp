<template>
    <section>
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">
                Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">
                Got a technical issue? Want to send feedback about a beta feature? Need
                details about our Business plan? Let us know.
            </p>
            <form @submit.prevent="sendEmail" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium"
                        >Your email</label
                    >
                    <input
                        v-model="senderEmail"
                        type="email"
                        id="email"
                        class="shadow-sm bg-bkg border border-content/30 text-sm rounded-lg focus:ring-accent-3/30 focus:border-accent-3/30 block w-full p-2.5"
                        placeholder="You@gmail.com"
                        required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium"
                        >Subject</label
                    >
                    <input
                        v-model="subject"
                        type="text"
                        id="subject"
                        class="block bg-bkg p-3 w-full text-sm rounded-lg border border-content/30 shadow-sm focus:ring-accent-3/30 focus:border-accent-3/30"
                        placeholder="Let us know how we can help you"
                        required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium"
                        >Your message</label
                    >
                    <textarea
                        v-model="message"
                        id="message"
                        rows="6"
                        class="block p-2.5 w-full text-sm bg-bkg rounded-lg shadow-sm border border-content/30 focus:ring-accent-3/30 focus:border-accent-3/30"
                        placeholder="Leave a comment..."></textarea>
                </div>
                <button
                    type="submit"
                    class="py-3 px-5 text-sm bg-accent-3/80 hover:bg-accent-3/60 duration-300 font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
                    Send message
                </button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
// import dotenv from 'dotenv'
// import { Email } from '@/services/smtp'
definePageMeta({
    layout: 'scrollable',
})
const store = useStore()

// const { Email } = useEmailer()
// dotenv.config()
const apiKey = 'placeholder' // import.meta.env.VITE_ELASTIC_EMAIL
const port = 2525
const server = 'smtp.elasticemail.com'

const senderEmail = ref('')
const message = ref('')
const subject = ref('')

async function sendEmail() {
    if (senderEmail.value && message.value && subject.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(senderEmail.value)) {
            alert('Please enter a valid email address')
            return
        }
        const res = await $fetch('/api/automation/contact', {
            method: 'POST',
            body: {
                senderEmail: senderEmail.value,
                message: message.value,
                subject: subject.value,
            },
        })
        if (res) {
            store.setToast({ msg: 'Email sent', type: 'success' })
        } else {
            store.setToast({ msg: 'Something went wrong', type: 'error' })
        }
    }
}
</script>
