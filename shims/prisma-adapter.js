// This is a shim to handle the .prisma module resolution during build
const { PrismaClient } = require('@prisma/client')

// Export a mock structure to satisfy module resolution
module.exports = {
    client: {
        default: {
            PrismaClient,
        },
    },
    PrismaClient,
}
