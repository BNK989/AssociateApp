import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const game_id = +e.context.params.game

    let res

    try {
        res = await prisma.games.delete({
            where: {
                id: game_id,
            },
        })
        if (!res) throw new Error(`game id: ${game_id} not found`)
    } catch (err) {
        console.error('there was an error', err)
        return { success: false, error: err }
    }

    return { success: true, res }
})
