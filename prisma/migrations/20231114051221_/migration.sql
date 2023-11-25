/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerId` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "customerId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "tests" (
    "id" TEXT NOT NULL,
    "testStr" TEXT NOT NULL,
    "testNum" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_customerId_key" ON "customers"("customerId");
