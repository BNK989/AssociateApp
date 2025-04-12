import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (e) => {
    let res
    const { gameId } = await e.context.params

    try {
        if (!gameId) return console.log('No game id provided:', gameId)
        res = await prisma.users.findMany({
            where: {
                Games: {
                    some: {
                        GameId: {
                            equals: +gameId || 999,
                        },
                    },
                },
            },
            select: {
                id: true,
                avatar: true,
                userName: true,
            },
        })

        if (!res) throw new Error(`No users found for game: ${gameId}`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
