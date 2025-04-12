import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (e) => {
    const body = await readBody(e)

    let res

    try {
        res = await prisma.users.create({
            data: body,
        })

        if (!res) throw new Error(`Failed to create user`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
