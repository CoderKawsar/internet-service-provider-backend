/*
  Warnings:

  - You are about to drop the column `publicIP` on the `packages` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "packages" DROP COLUMN "publicIP",
ADD COLUMN     "NoOfPublicIP" INTEGER NOT NULL DEFAULT 0;
