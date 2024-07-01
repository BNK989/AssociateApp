import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const {
        gameMode = null,
        senderId = null,
        resetConfirmChange = false,
    } = await readBody(e)
    const game_id = +e.context.params.game

    const data = { GameMode: gameMode }
    if (resetConfirmChange) data.confirmChange = []
    if (!resetConfirmChange && senderId) data.confirmChange = { push: senderId }

    if (gameMode === 'SOLVE') {
        data.totalWords =
            (await prisma.messages.count({
                where: {
                    gameId: game_id,
                },
            })) - 1
    }

    let res

    try {
        res = await prisma.games.update({
            where: {
                id: game_id,
            },
            data,
        })

        if (!res) throw new Error(`game id: ${gameId} not found`)
    } catch (err) {
        console.error('there was an error', err)
    }

    return res
})
