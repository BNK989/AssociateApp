import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
        return { succuss: false, err }
    }

    return { succuss: true, res }
})
