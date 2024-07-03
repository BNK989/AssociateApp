import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { status } = await readBody(e)
    const game_id = +e.context.params.game

    console.log('status:', status)
    console.log('game_id:', game_id)

    let res

    try {
        res = await prisma.games.update({
            where: {
                id: game_id,
            },
            data: {
                status: status,
            },
            select: {
                id: true,
                status: true,
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return {
        ok: true,
        res,
    }
})
