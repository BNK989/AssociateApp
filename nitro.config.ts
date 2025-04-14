// Nitro-specific configuration to help with Prisma module resolution
import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  rollupConfig: {
    plugins: [
      {
        name: 'prisma-module-resolver',
        resolveId(id) {
          // Catch all attempts to import from .prisma module
          if (id === '.prisma' || id.includes('.prisma/client')) {
            // Return a virtual module ID that we'll handle in load
            return '\0virtual:prisma-mock'
          }
          return null
        },
        load(id) {
          if (id === '\0virtual:prisma-mock') {
            // Return mock content for the virtual module
            return `
              // Mock Prisma client for build process
              export const PrismaClient = class {
                constructor() {}
                $connect() { return Promise.resolve() }
                $disconnect() { return Promise.resolve() }
                $on() {}
              };
              export default { PrismaClient };
            `
          }
          return null
        }
      }
    ]
  },
  externals: {
    // Exclude problematic modules from bundling
    external: ['@prisma/client', '.prisma/client', '.prisma']
  }
})