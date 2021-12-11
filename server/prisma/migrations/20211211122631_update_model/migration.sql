/*
  Warnings:

  - Made the column `login` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "login" SET NOT NULL,
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" SET DATA TYPE TEXT;
