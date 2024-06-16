import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {

    let res

    try {
        res = await prisma.games.create({
            data: {
                title: 'temp title',
                Users
            }
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)

    } catch (err) {
        console.error('there was an error', err)
    }

    return res

})
