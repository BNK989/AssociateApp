<template>
    <section>
        <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
            <h2 class="mb-4 text-center text-4xl font-extrabold tracking-tight">
                Contact Us
            </h2>
            <p class="mb-8 text-center font-light sm:text-xl lg:mb-16">
                Got a technical issue? Want to send feedback about a beta feature? Need
                details about our Business plan? Let us know.
            </p>
            <form @submit.prevent="sendEmail" class="space-y-8">
                <div>
                    <label for="email" class="mb-2 block text-sm font-medium"
                        >Your email</label
                    >
                    <input
                        v-model="senderEmail"
                        type="email"
                        id="email"
                        class="block w-full rounded-lg border border-content/30 bg-bkg p-2.5 text-sm shadow-sm focus:border-accent-3/30 focus:ring-accent-3/30"
                        placeholder="You@gmail.com"
                        required />
                </div>
                <div>
                    <label for="subject" class="mb-2 block text-sm font-medium"
                        >Subject</label
                    >
                    <input
                        v-model="subject"
                        type="text"
                        id="subject"
                        class="block w-full rounded-lg border border-content/30 bg-bkg p-3 text-sm shadow-sm focus:border-accent-3/30 focus:ring-accent-3/30"
                        placeholder="Let us know how we can help you"
                        required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="mb-2 block text-sm font-medium"
                        >Your message</label
                    >
                    <textarea
                        v-model="message"
                        id="message"
                        rows="6"
                        class="block w-full rounded-lg border border-content/30 bg-bkg p-2.5 text-sm shadow-sm focus:border-accent-3/30 focus:ring-accent-3/30"
                        placeholder="Leave a comment..."></textarea>
                </div>
                <button
                    type="submit"
                    class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 rounded-lg bg-accent-3/80 px-5 py-3 text-center text-sm font-medium duration-300 hover:bg-accent-3/60 focus:outline-none focus:ring-4 sm:w-fit">
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
