/*
  Warnings:

  - You are about to alter the column `score` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "score" SET DATA TYPE INTEGER;
