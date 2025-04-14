// Vite plugin to handle Prisma import issues during build
export default function prismaMockPlugin() {
  return {
    name: 'vite-plugin-prisma-mock',
    
    resolveId(id: string) {
      // Intercept .prisma imports
      if (id === '.prisma' || id.includes('.prisma/client')) {
        // Return a virtual module id
        return '\0virtual:prisma-mock';
      }
      return null;
    },
    
    load(id: string) {
      // Handle our virtual module
      if (id === '\0virtual:prisma-mock') {
        // Return mock content
        return `
          // Mock Prisma client to avoid build errors
          export const PrismaClient = class {
            constructor() {}
            $connect() { return Promise.resolve() }
            $disconnect() { return Promise.resolve() }
            $on() {}
          };
          export default { PrismaClient };
        `;
      }
      return null;
    }
  };
}