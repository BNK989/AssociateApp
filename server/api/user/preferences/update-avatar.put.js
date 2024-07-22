import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { id, avatar } = await readBody(e)

    let res

    try {
        res = await prisma.users.update({
            where: {
                id,
            },
            data: {
                avatar,
            },
            select: {
                email: true,
                id: true,
            },
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
