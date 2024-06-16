import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {

    console.log('upserting user')

    const body = await readBody(e)
    const {email, name, avatar} = body
    console.log('user:', email, name, avatar)

    try{
        const user = await prisma.users.upsert({
            where: { email: email}, 
            update: {userName: name, avatar: avatar},
            create: {email: email, userName: name, avatar: avatar}
        })
        return {success: true, user}
    }
    catch(error){
        return {success: false, error: error.message}
    }

    // let res

    // try {
    //     res = await prisma.users.create({
    //         data: body
    //     })

    //     if (!res) throw new Error(`game id: ${gameId} not found`)

    // } catch (err) {
    //     console.error('there was an error', err)
    // }

    // return res

})
