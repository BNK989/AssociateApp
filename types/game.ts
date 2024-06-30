export interface Game {
    id: number
    createdAt: Date
    title: string
    status: string
    score: number
    Users?: Array<{ user: { email: string; userName: string } }>
    players?: SimpleUser[]
}

type SimpleUser = {
    id: string
    avatar: string
    email: string
    userName: string
}
