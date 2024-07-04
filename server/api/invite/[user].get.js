import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const user = e.context.params.user

    if (!user) throw new Error('Missing user at request')
    let res

    try {
        res = await prisma.invites.findMany({
            where: {
                inviteeId: user,
            },
            include: {
                inviter: {
                    select: {
                        userName: true,
                        avatar: true,
                    },
                },
            },
        })
        if (!res) throw new Error(`unable to send message: ${content}`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
