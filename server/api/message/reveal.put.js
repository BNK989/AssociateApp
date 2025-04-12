import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const { msg_id } = getQuery(e)
    let res

    try {
        res = await prisma.messages.update({
            where: {
                id: +msg_id,
                isResolved: false,
            },
            data: {
                isResolved: true,
                Game: {
                    update: {
                        score: {
                            decrement: 500,
                        },
                        totalWords: {
                            decrement: 1,
                        },
                    },
                },
            },
            select: {
                gameId: true,
                Game: {
                    select: {
                        totalWords: true,
                    },
                },
            },
        })

        if (res.Game.totalWords === 0) {
            await $fetch(`/api/${res.gameId}/finish-game`, {
                method: 'PUT',
            })
        }
    } catch (err) {
        console.error('there was an error getting the message id: ' + msg_id, err)
        return { success: false, error: err.message }
    }
    return { success: true, data: res?.data }
})
