/*
  Warnings:

  - You are about to drop the `user_message_count` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_message_count" DROP CONSTRAINT "user_message_count_userId_fkey";

-- AlterTable
ALTER TABLE "auth_user" ADD COLUMN     "credits" INTEGER NOT NULL DEFAULT 5;

-- DropTable
DROP TABLE "user_message_count";
