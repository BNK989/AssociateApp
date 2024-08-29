import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    let res
    console.log('res:', res)

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
        // res.map((u) => (u.games = u._count.Games))
        // res.map((u) => delete u._count)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
