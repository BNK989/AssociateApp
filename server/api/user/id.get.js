import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { email } = getQuery(e)


    let res

    try {
        res = await prisma.users.findUnique({
            where: {
                email,
            },
            select: {
                id: true
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
