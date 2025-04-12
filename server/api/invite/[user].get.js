import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const user = e.context.params.user

    if (!user) {
        console.warn('No user provided to [user].get.js')
        return []
    }

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
        if (!res) return []
    } catch (err) {
        console.error('Error in [user].get.js:', err)
        return []
    }

    return res
})
