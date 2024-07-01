export interface Game {
    id: number
    createdAt: Date
    title: string
    status: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'FINISHED'
    score: number
    Users?: Array<{ user: { email: string; userName: string } }>
    players?: SimpleUser[]
    updatedAt?: Date
    nextTurn?: string
    GameMode?: 'INPUT' | 'SOLVE_PENDING' | 'SOLVE'
    confirmChange?: string[]
    totalWords?: number      
}

type SimpleUser = {
    id: string
    avatar: string
    email: string
    userName: string
}
