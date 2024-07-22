export function getSupabaseSessionToken() {
    if (!localStorage) return null
    const tokenItem = localStorage.getItem('sb-kyaoiarnnjcubothnkpy-auth-token')
    if (tokenItem) {
        const tokenData = JSON.parse(tokenItem)
        return tokenData.access_token
    }
    return null
}
