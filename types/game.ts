export interface Game {
    id: number
    createdAt: Date
    title: string
    status: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'FINISHED'
    score: number
    ticker?: number
    Users?: Array<{ user: { email: string; userName: string } }>
    players?: SimpleUser[]
    invites?: SimpleUser[]
    updatedAt?: Date
    nextTurn?: string
    GameMode?: 'INPUT' | 'SOLVE_PENDING' | 'SOLVE'
    confirmChange?: string[]
    totalWords?: number
    _count?: {
        messages: number
    }
}

type SimpleUser = {
    id: string
    avatar: string
    email: string
    userName: string
}
