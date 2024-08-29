import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    let res

    try {
        res = await prisma.messages.count({
            where: {
                isResolved: true,
            },
        })

        if (!res) throw new Error('Error while getting all guessed messages')
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
