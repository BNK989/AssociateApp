import { v4 as randomUUID } from 'uuid'
import { prisma } from '../utils/prisma'

export default defineEventHandler(async (e) => {
    const { title, user_id } = await readBody(e)

    let res
    const tempEmail = title.replace(' ', '-').toLowerCase() + '@temp.app'
    const randomUuid = randomUUID()

    try {
        res = await prisma.games.create({
            data: {
                title,
                Users: {
                    create: [
                        {
                            user: {
                                connectOrCreate: {
                                    where: {
                                        id: user_id ?? randomUuid,
                                    },
                                    create: {
                                        id: randomUuid,
                                        userName: title,
                                        email: tempEmail,
                                        avatar: 'avatar',
                                        isTemp: true,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        })

        if (!res) throw new Error(`Failed to create game: ${title}`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return { ...res, tempEmail }
})
