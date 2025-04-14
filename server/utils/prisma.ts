// Conditional implementation of the Prisma client for better build compatibility
let PrismaClient: any;
let prisma: any;

// Check if we're in a build process or if Prisma is explicitly disabled
const isPrismaBuildDisabled = process.env.PRISMA_DISABLE_DURING_BUILD === 'true';

// Only import and initialize Prisma in non-build environments
if (!isPrismaBuildDisabled) {
  // Use a try-catch to handle potential import errors during build
  try {
    const { PrismaClient: RealPrismaClient } = require('@prisma/client');
    
    const prismaClientSingleton = () => {
      return new RealPrismaClient();
    };
    
    // Use globalThis to maintain a singleton between hot reloads in development
    prisma = (globalThis as any).prisma ?? prismaClientSingleton();
    if (process.env.NODE_ENV !== 'production') (globalThis as any).prisma = prisma;
  } catch (error) {
    console.error('Error initializing PrismaClient:', error);
    // Provide a mock implementation in case of error
    prisma = createMockPrismaClient();
  }
} else {
  // During build, provide a mock implementation
  prisma = createMockPrismaClient();
}

// Mock implementation factory
function createMockPrismaClient() {
  return {
    // Add mock implementations for any Prisma models used in your app
    user: {
      findUnique: () => Promise.resolve(null),
      findMany: () => Promise.resolve([]),
      create: () => Promise.resolve({}),
      update: () => Promise.resolve({}),
    },
    game: {
      findUnique: () => Promise.resolve(null),
      findMany: () => Promise.resolve([]),
      create: () => Promise.resolve({}),
      update: () => Promise.resolve({}),
    },
    // Add other model mocks as needed
    $connect: () => Promise.resolve(),
    $disconnect: () => Promise.resolve(),
  };
}

export { prisma };