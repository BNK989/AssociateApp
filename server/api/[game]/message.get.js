import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const client = useSupabaseClient()

export default defineEventHandler(async (e) => {
    const gameId = +e.context.params.game

    let res

    try {

        res = await prisma.game.findUnique({
            where: {
                id: gameId,
            },
            select: {
                messages: true,
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)


    } catch (err) {
        console.error('there was an error', err)
    }

    return res.messages

})
