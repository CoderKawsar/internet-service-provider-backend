/*
  Warnings:

  - You are about to drop the column `photo` on the `streaming_services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "streaming_services" DROP COLUMN "photo",
ADD COLUMN     "photoURL" TEXT;
