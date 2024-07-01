import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const basePref = {
        theme: 'light',
        soundOn: true,
        language: 'he-IL',
        AllowNotifications: true,
    }

    const body = await readBody(e)
    const { email, name, avatar } = body

    try {
        const user = await prisma.users.upsert({
            where: { email: email },
            update: { score: { increment: 1 } },
            create: {
                email: email,
                userName: name,
                avatar: avatar,
                preferences: basePref,
            },
        })
        return { success: true, user }
    } catch (error) {
        return { success: false, error: error.message }
    }
})
