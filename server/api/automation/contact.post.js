import dotenv from 'dotenv'

dotenv.config()

export default defineEventHandler(async (e) => {
    const body = await readBody(e)
    let res
    try {
        res = await $fetch(import.meta.env.MAKE_URL, {
            method: 'POST',
            body,
        })

        if (!res) throw new Error('could not add word')
    } catch (err) {
        console.error('there was an error', err)
        return { success: false, error: err.message }
    }
    console.log('res:', res)
    return { success: res === 'Accepted', res }
})
