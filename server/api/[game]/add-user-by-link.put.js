import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const game_id = +e.context.params.game
    const { user_id } = await readBody(e)

    let res

    try {
        res = await prisma.games.update({
            where: {
                id: game_id,
            },
            data: {
                Users: {
                    create: [
                        {
                            user: { connect: { id: user_id } },
                        },
                    ],
                },
            },
        })

        if (!res) throw new Error(`game id: ${game_id} not found`)
    } catch (err) {
        console.error('there was an error', err)
        return { success: false, error: err.message }
    }

    return { success: true, addedUser: res }
})
