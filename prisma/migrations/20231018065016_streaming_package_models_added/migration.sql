/*
  Warnings:

  - Added the required column `updatedAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coverage_areas" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "coverage_districts" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "coverage_upazilla_or_thanas" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "streaming_services" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "streaming_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packages" (
    "id" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "fee" INTEGER NOT NULL,
    "publicIP" INTEGER NOT NULL DEFAULT 0,
    "talkTime" INTEGER NOT NULL DEFAULT 0,
    "OTCFee" INTEGER NOT NULL,
    "streamingService" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "streaming_service_for_packages" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "streamingServiceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "streaming_service_for_packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "streaming_service_for_users" (
    "id" TEXT NOT NULL,
    "streamingServiceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "streaming_service_for_users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "streaming_service_for_packages" ADD CONSTRAINT "streaming_service_for_packages_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "streaming_service_for_packages" ADD CONSTRAINT "streaming_service_for_packages_streamingServiceId_fkey" FOREIGN KEY ("streamingServiceId") REFERENCES "streaming_services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "streaming_service_for_users" ADD CONSTRAINT "streaming_service_for_users_streamingServiceId_fkey" FOREIGN KEY ("streamingServiceId") REFERENCES "streaming_services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "streaming_service_for_users" ADD CONSTRAINT "streaming_service_for_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
