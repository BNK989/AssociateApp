import { PrismaClient } from '@prisma/client'
import { levTest } from '@/services/levenshtein'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { wordId, guess } = await readBody(e)
    let res

    try {
        res = await prisma.messages.update({
            where: {
                id: +wordId,
                isResolved: false,
            },
            data: {
                // MAKE SURE TO UPDATE SCHEMA BEFORE ENABLING THIS
                resolveAttempts: {
                    increment: 1,
                },
            },
            select: {
                content: true,
            },
        })

        if (!res) throw new Error(`message id: ${wordId} not found`)
    } catch (err) {
        console.error('There was an error', err)
        throw new Error(`Unable to relax-guess word: ${guess}`)
    }

    if (levTest(res.content, guess)) {
        // GUESS IS SUCCESSFUL
        return correctGuess(wordId)
    } else {
        // GUESS IS NOT SUCCESSFUL
        throw new Error(`Unable to relax-guess word: ${guess}`)
    }
})

async function correctGuess(id) {
    try {
        const res = await prisma.messages.update({
            where: {
                id: +id,
            },
            data: {
                isResolved: true,
                Game: {
                    update: {
                        score: {
                            increment: 50,
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
}
