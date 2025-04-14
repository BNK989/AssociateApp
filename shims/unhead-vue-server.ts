// This is a shim for @unhead/vue/server
// Providing all necessary exports to satisfy imports
export * from './unhead-vue-client'
export const renderSSRHead = () => ({})
export const createServerHead = () => ({})
export const useHead = () => ({})
export const createServerHead$ = () => ({})
export default {}