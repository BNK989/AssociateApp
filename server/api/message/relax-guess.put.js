import { prisma } from '../../utils/prisma'
import { levTest } from '@/services/levenshtein'

export default defineEventHandler(async (e) => {
    const { wordId, guess, gameId } = await readBody(e)
    let res

    try {
        res = await prisma.messages.update({
            where: {
                id: +wordId,
                isResolved: false,
            },
            data: {
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
        // RECORD FAILED ATTEMPT
        return { success: false }
    }
})

async function correctGuess(wordId) {
    try {
        const res = await prisma.messages.update({
            where: {
                id: +wordId,
            },
            data: {
                isResolved: true,
            },
            select: {
                gameId: true,
            },
        })

        if (!res) throw new Error(`message id: ${wordId} not found`)

        // Update game score and decrement totalWords
        await prisma.games.update({
            where: {
                id: res.gameId,
            },
            data: {
                score: {
                    increment: 1000,
                },
                totalWords: {
                    decrement: 1,
                },
            },
        })

        return { success: true }
    } catch (err) {
        console.error('There was an error', err)
        throw new Error(`Unable to update message status`)
    }
}
