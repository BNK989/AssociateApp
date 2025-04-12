import { prisma } from '../utils/prisma'

export default defineEventHandler(async (e) => {
    const { user_id } = getQuery(e)

    // Always return an array, even if empty
    if (!user_id) {
        console.warn('No user_id provided to all-games.get.js')
        return { data: [] }
    }

    let res
    try {
        res = await prisma.games.findMany({
            where: {
                Users: {
                    some: {
                        UserId: user_id,
                    },
                },
            },
            select: {
                id: true,
                createdAt: true,
                title: true,
                score: true,
                updatedAt: true,
                nextTurn: true,
                GameMode: true,
                status: true,
                totalWords: true,
                Users: {
                    select: {
                        user: {
                            select: {
                                email: true,
                                userName: true,
                            },
                        },
                    },
                },
                _count: {
                    select: {
                        messages: true,
                    },
                },
            },
            orderBy: {
                updatedAt: 'desc',
            },
        })

        return { data: res || [] }
    } catch (err) {
        console.error('Error in all-games.get.js:', err)
        return { data: [] }
    }
})
