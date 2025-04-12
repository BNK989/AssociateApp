import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const { email } = getQuery(e)
    if (email === 'undefined') return console.warn('No email provided at db-user.get')

    let res
    let reducedRes

    try {
        if (!email) throw new Error('No email provided at db-user.get')
        res = await prisma.users.findUnique({
            where: { email },
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
                receivedInvites: {
                    where: {
                        status: 'PENDING',
                    },
                    select: {
                        inviter: {
                            select: {
                                email: true,
                                userName: true,
                                avatar: true,
                            },
                        },
                    },
                },
            },
        })

        if (!res) throw new Error(`user with email ${email} not found`)
        reducedRes = {
            ...res,
            games: res.Games.map((g) => g.game),
            invites: res.receivedInvites.map((i) => ({
                from: i.inviter,
            })),
        }
        delete reducedRes.Games
        delete reducedRes.receivedInvites
    } catch (err) {
        console.error('there was an error', err)
    }

    return reducedRes
})
