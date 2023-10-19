-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('super_admin', 'admin', 'customer', 'user');

-- CreateTable
CREATE TABLE "coverage_districts" (
    "id" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "coverage_districts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coverage_upazilla_or_thanas" (
    "id" TEXT NOT NULL,
    "upazillaOrThana" TEXT NOT NULL,
    "districtId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "coverage_upazilla_or_thanas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coverage_areas" (
    "id" TEXT NOT NULL,
    "upazillaOrThanaId" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "coverage_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "streaming_services" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "photoURL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "streaming_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packages" (
    "id" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "fee" INTEGER NOT NULL,
    "noOfPublicIP" INTEGER NOT NULL DEFAULT 0,
    "talkTime" INTEGER NOT NULL DEFAULT 0,
    "OTCFee" INTEGER NOT NULL,
    "noOfStreamingService" INTEGER NOT NULL DEFAULT 0,
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
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL DEFAULT 'user',
    "contactNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "coverageAreaId" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "streaming_service_for_customers" (
    "id" TEXT NOT NULL,
    "streamingServiceId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "streaming_service_for_customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coverage_districts_district_key" ON "coverage_districts"("district");

-- CreateIndex
CREATE UNIQUE INDEX "coverage_upazilla_or_thanas_upazillaOrThana_key" ON "coverage_upazilla_or_thanas"("upazillaOrThana");

-- CreateIndex
CREATE UNIQUE INDEX "streaming_services_service_key" ON "streaming_services"("service");

-- CreateIndex
CREATE UNIQUE INDEX "streaming_services_photoURL_key" ON "streaming_services"("photoURL");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_contactNo_key" ON "users"("contactNo");

-- AddForeignKey
ALTER TABLE "coverage_upazilla_or_thanas" ADD CONSTRAINT "coverage_upazilla_or_thanas_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "coverage_districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coverage_areas" ADD CONSTRAINT "coverage_areas_upazillaOrThanaId_fkey" FOREIGN KEY ("upazillaOrThanaId") REFERENCES "coverage_upazilla_or_thanas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "streaming_service_for_packages" ADD CONSTRAINT "streaming_service_for_packages_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "streaming_service_for_packages" ADD CONSTRAINT "streaming_service_for_packages_streamingServiceId_fkey" FOREIGN KEY ("streamingServiceId") REFERENCES "streaming_services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_coverageAreaId_fkey" FOREIGN KEY ("coverageAreaId") REFERENCES "coverage_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "streaming_service_for_customers" ADD CONSTRAINT "streaming_service_for_customers_streamingServiceId_fkey" FOREIGN KEY ("streamingServiceId") REFERENCES "streaming_services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "streaming_service_for_customers" ADD CONSTRAINT "streaming_service_for_customers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
