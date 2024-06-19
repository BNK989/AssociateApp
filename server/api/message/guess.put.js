import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const body = await readBody(e)
    console.log('body:', body)

    try {
        const res = await prisma.messages.update({
            where: {
                id: +body.wordId,
                content: {
                    equals: body.guess,
                    mode: 'insensitive'
                }
            },
            data: {
                isResolved: true
            }
        })

        // If the update operation does not throw, it means the record was found and updated
        return {
            message: 'Word guessed successfully',
        }
    } catch (err) {
        // If the update operation throws an error, catch it and handle it here
        console.error("There was an error", err)
        throw new Error(`Unable to guess word: ${body.guess}`)
    }
})
