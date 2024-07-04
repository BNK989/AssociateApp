import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const body = await readBody(e)
    const { gameId, inviterId, inviteeId, alias = null } = body

    if (!gameId || !inviterId || !inviteeId) throw new Error('missing body')
    let res

    try {
        res = await prisma.invites.create({
            data: {
                inviterId,
                inviteeId,
                gameId: +gameId,
                alias,
            },
        })
        if (!res) throw new Error(`unable to send message: ${content}`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
