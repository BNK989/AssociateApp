import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const {gameId}  = e.context.params
    console.log('gameId:', gameId)
    let res

    try {
        res = await prisma.users.findMany({
            where: {
                Games: {
                    some: {
                        GameId: +gameId
                    }
                }
            },
            select: {
                id: true,
                avatar: true,
                userName: true
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)

    } catch (err) {
        console.error('there was an error', err)
    }

    return res

})
