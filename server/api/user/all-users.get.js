import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
