export interface User {
    id: string;
    createdAt?: Date;
    email: string;
    userName: string;
    avatar: string;
    authinticator?: string;
    preferences?: Preferences
}

export type WordAndUser = {
    id: string,
    avatar: string,
    userName: string
}

type Preferences = {
    language?: string,
    theme?: string,
    soundOn?: boolean,
    allowNotifications?: boolean
}