import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const gameId = +e.context.params.game

    let res

    try {

        res = await prisma.messages.findMany({
            where: {
                gameId,
            },
            orderBy: {
                createdAt: 'asc'
            },
            select: {
                id: true,
                createdAt: true,
                content: true,
                cipher: true,
                isResolved: true,
                senderId: true
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)


    } catch (err) {
        console.error('there was an error', err)
    }

    return res

})
