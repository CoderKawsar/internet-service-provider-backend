/*
  Warnings:

  - You are about to drop the column `streamingService` on the `packages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "packages" DROP COLUMN "streamingService",
ADD COLUMN     "NoOfStreamingService" INTEGER NOT NULL DEFAULT 0;
