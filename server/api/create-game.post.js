import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { title, user_id } = await readBody(e)
    // const bla = await getHeaders(e)
    // const blaObj = JSON.parse(bla.cookie)
    // console.log('blaObj:', blaObj)

    // console.log('creating game', title, user_id)

    let res

    try {
        // const authHeader = e.req.headers.authorization //NEW
        // const token = authHeader ? authHeader.split(' ')[1] : null //NEW
        res = await prisma.games.create({
            data: {
                title,
                Users: {
                    create: [
                        {
                            user: { connect: { id: user_id } },
                        },
                    ],
                },
            },
            // context: {
            //     //NEW
            //     headers: {
            //         //NEW
            //         Authorization: `Bearer ${token}`, //NEW
            //     }, //NEW
            // }, //NEW
        })

        //try create if connect does not work

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
