// This is a shim file for @prisma/client to fix module resolution issues
import { PrismaClient } from '@prisma/client'

// Create a singleton instance for the PrismaClient
const prismaClientSingleton = () => {
  const prisma = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
  return prisma
}

// Use global to maintain a single instance across hot reloads in development
const globalForPrisma = global as unknown as { prisma: ReturnType<typeof prismaClientSingleton> }
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Export to be used across the application
export default prisma