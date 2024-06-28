import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { senderId } = await readBody(e)
    const game_id = +e.context.params.game

    let res

    try {
        res = await prisma.games.update({
            where: {
                id: game_id,
            },
            data: {
                // GameMode: gameMode, // 'SOLVE_PENDING'
                confirmChange: {
                    push: senderId,
                },
            },
            select: {
                confirmChange: true,
                Users: {
                    select: {
                        UserId: true,
                    },
                },
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
        if (res.confirmChange.length === res.Users.length) {
            await $fetch(`/api/${game_id}/toggle-mode`, {
                method: 'PUT',
                body: {
                    gameMode: 'SOLVE',
                },
            })
        }
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
