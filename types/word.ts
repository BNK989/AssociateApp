import type { MiniUser } from "./user"

export interface Word {
  id: number
  createdAt: Date
  content: string
  cipher: string
  isResolved: boolean
  senderId: string
  user?: MiniUser
}