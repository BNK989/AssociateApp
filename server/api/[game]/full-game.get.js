import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const client = useSupabaseClient()

export default defineEventHandler(async (e) => {
    const gameId = +e.context.params.game

    let res
    let cleanRes

    try {
        res = await prisma.games.findUnique({
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

        if (!res) throw new Error(`game id: ${gameId} not found`)

        cleanRes = {
            ...res,
            players: res.Users.map((u) => u.user),
            invites: res.invites.map((i) => i.invitee),
        }
        delete cleanRes.Users
    } catch (err) {
        console.error('there was an error', err)
    }

    return cleanRes
})
