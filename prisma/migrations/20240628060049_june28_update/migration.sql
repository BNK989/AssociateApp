/*
  Warnings:

  - You are about to drop the column `authinticator` on the `Users` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "GameMode" ADD VALUE 'SOLVE_PENDING';

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "authinticator",
ADD COLUMN     "inActiveGame" INTEGER,
ADD COLUMN     "score" BIGINT NOT NULL DEFAULT 100;
