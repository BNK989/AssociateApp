export default defineNuxtPlugin(() => {
    if (process.env.NODE_ENV === 'development') {
        const originalEmit = process.emit
        // @ts-ignore - Necessary to override the emit function
        process.emit = function (event: string, warning: Error) {
            if (
                event === 'warning' &&
                warning?.name === 'DeprecationWarning' &&
                (warning as any)?.code === 'DEP0040'
            ) {
                return false
            }
            return originalEmit.apply(process, arguments)
        }
    }
})