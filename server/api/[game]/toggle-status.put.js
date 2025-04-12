import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const { status } = await readBody(e)
    const game_id = +e.context.params.game

    let res

    try {
        res = await prisma.games.update({
            where: {
                id: game_id,
            },
            data: {
                status,
            },
            select: {
                id: true,
                status: true,
            },
        })

        if (!res) throw new Error(`game id: ${game_id} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return {
        ok: true,
        res,
    }
})
