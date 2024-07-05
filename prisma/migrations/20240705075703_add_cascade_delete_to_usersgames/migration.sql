-- DropForeignKey
ALTER TABLE "UsersGames" DROP CONSTRAINT "UsersGames_GameId_fkey";

-- DropForeignKey
ALTER TABLE "UsersGames" DROP CONSTRAINT "UsersGames_UserId_fkey";

-- AddForeignKey
ALTER TABLE "UsersGames" ADD CONSTRAINT "UsersGames_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersGames" ADD CONSTRAINT "UsersGames_GameId_fkey" FOREIGN KEY ("GameId") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
