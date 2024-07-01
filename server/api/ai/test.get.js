import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { test } from '@/services/checkGame'

export default defineEventHandler(async (e) => {
    const res = await prisma.messages.count({
        where: {
            gameId: 1,
        },
    })

    return res
})
