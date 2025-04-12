import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const { email } = getQuery(e)

    let res

    try {
        res = await prisma.users.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
            },
        })

        if (!res) throw new Error(`user with email ${email} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
