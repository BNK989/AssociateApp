export interface User {
    id: string;
    createdAt?: Date;
    email: string;
    userName: string;
    avatar: string;
    authinticator?: string;
}