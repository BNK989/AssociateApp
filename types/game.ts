export interface Game {
  id: number;
  createdAt: Date;
  title: string;
  status: string;
  Users?: Array<{ user: { email: string; userName: string } }>
  players?: SimpleUser[]
}

type SimpleUser = {
  email: string
  userName: string
}