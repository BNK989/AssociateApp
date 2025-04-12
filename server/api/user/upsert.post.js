import { prisma } from '../../utils/prisma'

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
            where: { email },
            update: { score: { increment: 1 } },
            create: {
                email,
                userName: name,
                avatar,
                preferences: basePref,
            },
        })
        return { success: true, user }
    } catch (error) {
        return { success: false, error: error.message }
    }
})
