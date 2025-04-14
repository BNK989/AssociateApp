export interface User {
    id: string
    createdAt?: Date
    email: string
    userName: string
    avatar: string
    authinticator?: string
    preferences?: Preferences
    receivedInvites: MiniUser[]
    isTemp: boolean
}

export type MiniUser = {
    inviter: string
    createdAt: string
    status: string
    id?: string
    email?: string
    userName: string
    avatar?: string  // Made avatar optional to match the actual data structure
}

type Preferences = {
    language?: string
    theme?: string
    soundOn?: boolean
    allowNotifications?: boolean
}
