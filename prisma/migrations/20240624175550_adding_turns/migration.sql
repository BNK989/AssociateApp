/*
  Warnings:

  - The values [INACTIVE] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('ACTIVE', 'ARCHIVED', 'DELETED', 'FINISHED');
ALTER TABLE "Games" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Games" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Games" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "nextTurn" TEXT,
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMPTZ(6),
ALTER COLUMN "title" SET DEFAULT 'Untitled Game';

-- AlterTable
ALTER TABLE "Messages" ADD COLUMN     "updatedAt" TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "lastLoginAt" TIMESTAMPTZ(6),
ADD COLUMN     "preferences" JSONB;
