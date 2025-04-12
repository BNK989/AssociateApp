import { prisma } from '../../utils/prisma'
import { test } from '@/services/checkGame'

export default defineEventHandler(async (e) => {
    const res = await prisma.messages.count({
        where: {
            gameId: 1,
        },
    })
    await $fetch('https://webhook.site/9391cac8-91a2-41f0-be02-cb563a31b353', {
        method: 'POST',
        body: {
            gameId: 1,
            res,
        },
    })

    return res
})
