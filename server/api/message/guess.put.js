import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)
export default defineEventHandler(async (e) => {
    const body = await readBody(e)
    const { wordId: world_id, guess } = body
    console.log('body:', body)

    const { data, error } = await supabase.rpc('resolve_message', { world_id, guess })

    console.log('data:', data)
    console.log('error:', error)
    if (error) {
        return { success: false, error: error.message }
    }

    return { success: true, data }
})

// export default defineEventHandler(async (e) => {
//     const body = await readBody(e)

//     try {
//         const res = await prisma.messages.update({
//             where: {
//                 id: +body.wordId,
//                 isResolved: false,
//                 content: {
//                     equals: body.guess,
//                     mode: 'insensitive',
//                 },
//             },
//             data: {
//                 isResolved: true,
//                 // resolveAttempts: {
//                 //     increment: 1,
//                 // },
//                 Game: {
//                     update: {
//                         score: {
//                             increment: 100,
//                         },
//                         totalWords: {
//                             decrement: 1,
//                         },
//                     },
//                 },
//             },
//             select: {
//                 gameId: true,
//                 Game: {
//                     select: {
//                         totalWords: true,
//                     },
//                 },
//             },
//         })
//         console.log('res:', res)
//         if (res.Game.totalWords === 0) {
//             await $fetch(`/api/${res.gameId}/finish-game`, {
//                 method: 'PUT',
//             })
//         }

//         // If the update operation does not throw, it means the record was found and updated
//         return {
//             totalWords: res.Game.totalWords,
//             message: 'Word guessed successfully',
//         }
//     } catch (err) {
//         // If the update operation throws an error, catch it and handle it here
//         console.error('There was an error', err)
//         throw new Error(`Unable to guess word: ${body.guess}`)
//     }

//     //if guess is right go to games table and up the score
// })
