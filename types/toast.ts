export type Toast = {
    msg: string
    type?: 'success' | 'info' | 'oops' | 'warn' | 'error'
    duration?: number
}