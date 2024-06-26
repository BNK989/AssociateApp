import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {

    const { user_id } = getQuery(e)

    let res

    try {
        res = await prisma.games.findMany({
            where: {
                Users: {
                    some: {
                        UserId: user_id
                    }
                }
            },
            include: {
                Users: {
                    select: {
                        user: {
                            select: {
                                email: true,                                
                                userName: true
                            }
                        }
                    }
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
