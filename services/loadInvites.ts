export async function getInvites( id:string) {
    try {
        if(!id) throw new Error('No id provided')
        const res = await $fetch(`/api/invite/${id}`)
        if (res) {
            return res
        } else {
            console.error('No invites found')
        }
    } catch (error) {
        console.error('Error fetching invites:', error)
    }
}