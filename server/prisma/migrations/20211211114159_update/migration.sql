/*
  Warnings:

  - Added the required column `owned_private_repos` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `private_gists` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "owned_private_repos" INTEGER NOT NULL,
ADD COLUMN     "private_gists" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "User_id_seq";
