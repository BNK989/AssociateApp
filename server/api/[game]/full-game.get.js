import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const gameId = parseInt(e.context.params.game_id || e.context.params.game)

    if (!gameId || isNaN(gameId)) {
        throw createError({
            statusCode: 400,
            message: 'Invalid game ID provided',
        })
    }

    try {
        const res = await prisma.games.findUnique({
            where: {
                id: gameId,
            },
            include: {
                Users: {
                    select: {
                        user: {
                            select: {
                                id: true,
                                email: true,
                                userName: true,
                                avatar: true,
                            },
                        },
                    },
                },
                invites: {
                    where: {
                        status: 'PENDING',
                    },
                    select: {
                        invitee: {
                            select: {
                                id: true,
                                email: true,
                                userName: true,
                                avatar: true,
                            },
                        },
                    },
                },
            },
        })

        if (!res) {
            throw createError({
                statusCode: 404,
                message: `Game with id: ${gameId} not found`,
            })
        }

        const cleanRes = {
            ...res,
            players: res.Users.map((u) => u.user),
            invites: res.invites.map((i) => i.invitee),
        }
        delete cleanRes.Users

        return cleanRes
    } catch (err) {
        console.error('Error fetching game:', err)
        throw createError({
            statusCode: err.statusCode || 500,
            message: err.message || 'Internal server error while fetching game',
        })
    }
})
