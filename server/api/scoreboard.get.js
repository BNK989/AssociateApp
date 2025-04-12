import { prisma } from '../utils/prisma'

export default defineEventHandler(async (e) => {
    let res

    try {
        res = await prisma.users.findMany({
            select: {
                email: true,
                userName: true,
                avatar: true,
                score: true,
                _count: {
                    select: {
                        Games: true,
                    },
                },
            },
            orderBy: {
                score: 'desc',
            },
            take: 10,
        })

        if (!res) throw new Error('Error finding top players')
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
