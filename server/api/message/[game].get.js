import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const gameId = +e.context.params.game

    let res
    let refinedRes

    try {
        res = await prisma.messages.findMany({
            where: {
                gameId,
            },
            orderBy: {
                createdAt: 'asc',
            },
            select: {
                id: true,
                createdAt: true,
                content: true,
                cipher: true,
                isResolved: true,
                senderId: true,
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    refinedRes = res.map((msg, i) => {
        const isLast = i === res.length - 1
        return {
            id: msg.id,
            createdAt: msg.createdAt,
            content: msg.isResolved || isLast ? msg.content : '',
            cipher: msg.cipher,
            isResolved: msg.isResolved,
            senderId: msg.senderId,
        }
    })

    return refinedRes
})
