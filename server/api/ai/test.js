import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY)

export default defineEventHandler(async (e) => {
    const word = e.context.params.word
    // return await run()
})

async function run() {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const prompt =
        "I am playing a memory game, give me a short hint to the word 'gum' and make sure not to use it in your replay"

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    console.log(text)
    return text
}
