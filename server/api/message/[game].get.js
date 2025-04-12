import { prisma } from '../../utils/prisma'

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
                Game: {
                    select: {
                        GameMode: true,
                    },
                },
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    refinedRes = res.map((msg, i) => {
        const isLast = i === res.length - 1
        const isInputMode = msg.Game.GameMode === 'INPUT'
        return {
            id: msg.id,
            createdAt: msg.createdAt,
            content: msg.content,
            cipher: msg.cipher,
            isResolved: msg.isResolved,
            senderId: msg.senderId,
            isLast,
            isOpen: !isLast && !isInputMode,
        }
    })

    return refinedRes
})
