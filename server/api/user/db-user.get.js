import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { email } = getQuery(e)

    let res
    let reducedRes

    try {
        if (!email) throw new Error('No email provided at db-user.get')
        res = await prisma.users.findUnique({
            where: {
                email,
            },
            include: {
                Games: {
                    select: {
                        game: {
                            select: {
                                id: true,
                            },
                        },
                    },
                },
            },
        })

        if (!res) throw new Error(`user with email ${email} not found`)
        reducedRes = { ...res, games: res.Games.map((g) => g.game.id) }

        delete reducedRes.Games
        delete reducedRes.createdAt
        delete reducedRes.lastLoginAt
    } catch (err) {
        console.error('there was an error', err)
    }

    return reducedRes
})
