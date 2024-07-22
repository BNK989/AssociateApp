import type { User } from '~/types/user'

import imageCompression from 'browser-image-compression'

//Shrinks before upload
export const imageCompressionFunc = async (imageFile) => {
    const options = {
        maxSizeMB: 0.5, // (number) max size in MB
        maxWidthOrHeight: 1000, // (number) max width or height
    }

    const compressedFile = await imageCompression(imageFile, options)
    return compressedFile
}

export async function updateImage(fileLink: string) {
    const store = useStore()
    const { user } = storeToRefs(store)

    // console.log('updating userAvatar for user:', user.value.id, 'to:', fileLink)
    try {
        const res = await $fetch(
            'http://localhost:3000/api/user/preferences/update-avatar',
            {
                method: 'PUT',
                body: {
                    id: user.value.id,
                    avatar: fileLink,
                },
            },
        )
        if (!res) {
            throw new Error(`user id: ${user.value.id} not found. unable to update`)
        } else {
            store.setToast({ msg: 'Avatar updated', type: 'success', duration: 2500 })
            //@ts-ignore
            const dbUser: User = await $fetch(
                `/api/user/db-user?email=${user.value.email}`,
            )
            store.setUser(dbUser)
        }
    } catch (err) {
        console.error('there was an error', err)
    }
}
