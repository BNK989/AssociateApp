import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (e) => {
    const { inviteId, status } = await readBody(e)

    let res
    let gameRes

    try {
        res = await prisma.invites.update({
            where: {
                id: +inviteId,
            },
            data: {
                status: status,
            },
            select: {
                gameId: true,
                inviteeId: true,
            },
        })
        if (status === 'DECLINED') return { success: true, status: status }

        if (!res && res?.gameId) {
            throw new Error('error updating invite status')
        } else {
            gameRes = await $fetch(`/api/${res.gameId}/add-user`, {
                method: 'PUT',
                body: {
                    user_id: res.inviteeId,
                },
            })
        }
        if (!gameRes) throw new Error('error adding user to game')
        else return { success: true, status: status, gameId: res.gameId }
    } catch (err) {
        console.error('there was an error', err)
        await prisma.invites.update({
            where: {
                id: +inviteId,
            },
            data: {
                status: 'PENDING',
            },
        })
        return { success: false, error: err }
    }
})

async function acceptInvite(inviteId) {
    console.log('inviteId:', inviteId)
    const { data, error } = await supabase.rpc('accept_invite', {
        invite_id: +inviteId,
    })

    if (error) {
        console.error('Error accepting invite:', error)
        return false
    }

    return data
}
