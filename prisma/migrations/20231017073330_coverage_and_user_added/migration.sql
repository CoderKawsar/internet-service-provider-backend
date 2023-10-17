-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('super_admin', 'admin', 'customer', 'user');

-- CreateTable
CREATE TABLE "coverage_districts" (
    "id" TEXT NOT NULL,
    "district" TEXT NOT NULL,

    CONSTRAINT "coverage_districts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coverage_upazilla_or_thanas" (
    "id" TEXT NOT NULL,
    "upazillaOrThana" TEXT NOT NULL,

    CONSTRAINT "coverage_upazilla_or_thanas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coverage_areas" (
    "id" TEXT NOT NULL,
    "districtId" TEXT NOT NULL,
    "upazillaOrThanaId" TEXT NOT NULL,
    "area" TEXT NOT NULL,

    CONSTRAINT "coverage_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL DEFAULT 'user',
    "contactNo" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coverage_districts_district_key" ON "coverage_districts"("district");

-- CreateIndex
CREATE UNIQUE INDEX "coverage_upazilla_or_thanas_upazillaOrThana_key" ON "coverage_upazilla_or_thanas"("upazillaOrThana");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_contactNo_key" ON "users"("contactNo");

-- AddForeignKey
ALTER TABLE "coverage_areas" ADD CONSTRAINT "coverage_areas_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "coverage_districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coverage_areas" ADD CONSTRAINT "coverage_areas_upazillaOrThanaId_fkey" FOREIGN KEY ("upazillaOrThanaId") REFERENCES "coverage_upazilla_or_thanas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "coverage_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
