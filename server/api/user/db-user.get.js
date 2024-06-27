import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { email } = getQuery(e)

    let res

    try {
        if(!email) throw new Error('No email provided at db-user.get')
        res = await prisma.users.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                avatar: true,
                userName: true,
                email: true,
                preferences: true
            }
        })

        if (!res) throw new Error(`user with email ${email} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
