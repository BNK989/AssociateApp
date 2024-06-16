import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const client = useSupabaseClient()

export default defineEventHandler(async (e) => {
    const gameId = +e.context.params.game

    const msg = await readBody(e)

    let res

    try {
        res = await prisma.game.update({
            where: {
                id: gameId,
            },
            data: {
                messages: {
                    push: msg,
                },
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)

    } catch (err) {
        console.error('there was an error', err)
    }

    return res

})
