import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const { userName } = getQuery(e)

    let res

    try {
        res = await prisma.users.findMany({
            where: {
                userName: {
                    contains: userName,
                    mode: 'insensitive',
                },
            },
        })

        if (!res) throw new Error(`No users found matching: ${userName}`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
