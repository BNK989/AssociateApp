-- AlterTable
ALTER TABLE "Games" ADD COLUMN     "confirmChange" TEXT[] DEFAULT ARRAY[]::TEXT[];
