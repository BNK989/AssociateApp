import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    let res
    const { gameId } = await e.context.params

    try {
        if (!gameId) return console.log('10no game id', gameId)
        res = await prisma.users.findMany({
            where: {
                Games: {
                    some: {
                        // GameId: +gameId,
                        GameId: {
                            equals: +gameId || 999,
                        },
                    },
                },
            },
            select: {
                id: true,
                avatar: true,
                userName: true,
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
