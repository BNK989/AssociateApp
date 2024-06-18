-- CreateEnum
CREATE TYPE "GameMode" AS ENUM ('INPUT', 'SOLVE');

-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "GameMode" "GameMode" NOT NULL DEFAULT 'INPUT';

-- CreateIndex
CREATE INDEX "Users_email_idx" ON "Users"("email");
