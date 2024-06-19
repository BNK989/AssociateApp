export interface User {
    id: string;
    createdAt?: Date;
    email: string;
    userName: string;
    avatar: string;
    authinticator?: string;
}

export type WordAndUser = {
    id: string,
    avatar: string,
    userName: string
}