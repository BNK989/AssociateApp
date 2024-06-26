import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY)

export default defineEventHandler(async (e) => {
    // const word = e.context.params.word
    const { msg_id } = getQuery(e)
    let res

    try {
        res = await prisma.messages.findUnique({
            where: {
                id: +msg_id,
            },
            select: {
                content: true,
            },
        })
    } catch (err) {
        console.error(
            'there was an error getting the message id: ' + msg_id,
            err,
        )
    }
    if (res) return await run(res.content)
})

async function run(word) {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

    const prompt = `I am playing a memory game, give me a short hint to the word '${word}' and make sure not to use it in your replay`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    console.log(text)
    return text
}
