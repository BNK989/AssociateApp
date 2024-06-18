import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {

    const {user_id} = await readBody(e)
    const game_id = +e.context.params.game

    let res

    try {
        res = await prisma.games.update({
            where: {
                id: +e.context.params.game,
            },
            data: {
                Users: {
                    create: [{
                        user: { connect: { id: user_id } },
                    }]
                }
            }
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)

    } catch (err) {
        console.error('there was an error', err)
    }

    return res

})
