// Custom resolver for unhead modules
export default function unheadResolverPlugin() {
  return {
    name: 'vite-plugin-unhead-resolver',
    resolveId(id: string, importer: string | undefined) {
      // Handle the specific problematic import path
      if (id === '@unhead/vue/client' || id.includes('@unhead/vue/client')) {
        console.log('[unhead-resolver] Redirecting @unhead/vue/client to @unhead/vue');
        return { id: '@unhead/vue', external: false };
      }
      
      // Also intercept the actual module resolution
      if (id === '@unhead/vue' && importer?.includes('client')) {
        console.log('[unhead-resolver] Handling @unhead/vue import from client context');
        return { id: '@unhead/vue', external: false };
      }
      
      return null;
    },
    load(id: string) {
      // Provide a stub implementation for missing client module
      if (id.includes('@unhead/vue/client')) {
        console.log('[unhead-resolver] Providing stub for @unhead/vue/client');
        return `
          import * as unheadVue from '@unhead/vue';
          export * from '@unhead/vue';
          export default unheadVue;
        `;
      }
      return null;
    }
  };
}