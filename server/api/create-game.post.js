import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {

    const {title, user_id} = await readBody(e)

    console.log('creating game', title, user_id)

    let res

    try {
        res = await prisma.games.create({
            data: {
                title,
                Users: {
                    create: [{
                        user: { connect: { id: user_id } },
                    }]
                }
            }
        })

        //try create if connect does not work

        if (!res) throw new Error(`game id: ${gameId} not found`)

    } catch (err) {
        console.error('there was an error', err)
    }

    return res

})
