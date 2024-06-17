import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {

    const body = await readBody(e)
    const {content, cipher, gameId, senderId} = body

    if(!content || !cipher || !gameId || !senderId) throw new Error('missing body')
    let res

    try{
        res = await prisma.messages.create({
            data: {
                content,
                cipher,
                gameId: +gameId,
                senderId
            }
        })
        if (!res) throw new Error(`unable to send message: ${content}`)

    }
    catch(err){
        console.error("there was an error", err)
    }

    return res

})
