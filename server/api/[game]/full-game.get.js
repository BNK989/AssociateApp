import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const client = useSupabaseClient()

export default defineEventHandler(async (e) => {
    const gameId = +e.context.params.game

    let res

    try {

        res = await prisma.games.findUnique({
            where: {
                id: gameId,
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

        if (!res) throw new Error(`game id: ${gameId} not found`)


    } catch (err) {
        console.error('there was an error', err)
    }

    return res

})
