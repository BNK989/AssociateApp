import { PrismaClient } from '@prisma/client'
import { test } from '@/services/checkGame'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const body = await readBody(e)

    try {
        const res = await prisma.messages.update({
            where: {
                id: +body.wordId,
                isResolved: false,
                content: {
                    equals: body.guess,
                    mode: 'insensitive',
                },
            },
            data: {
                isResolved: true,
                Game: {
                    update: {
                        score: {
                            increment: 100,
                        },
                        totalWords: {
                            decrement: 1,
                        },
                    },
                },
            },
            select: {
                gameId: true,
                Game: {
                    select: {
                        totalWords: true,
                    },
                },
            },
        })
        console.log('res:', res)
        if (res.Game.totalWords === 0) {
            await $fetch(`/api/${res.gameId}/finish-game`, {
                method: 'PUT',
            })
        }

        // If the update operation does not throw, it means the record was found and updated
        return {
            totalWords: res.Game.totalWords,
            message: 'Word guessed successfully',
        }
    } catch (err) {
        // If the update operation throws an error, catch it and handle it here
        console.error('There was an error', err)
        throw new Error(`Unable to guess word: ${body.guess}`)
    }

    //if guess is right go to games table and up the score
})
