export interface Game {
  id: number;
  createdAt: Date;
  title: string;
  status: string;
  Users: Array<{ user: { email: string; userName: string } }>
}
