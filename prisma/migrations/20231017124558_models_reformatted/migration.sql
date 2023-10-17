/*
  Warnings:

  - You are about to drop the column `districtId` on the `coverage_areas` table. All the data in the column will be lost.
  - Added the required column `districtId` to the `coverage_upazilla_or_thanas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "coverage_areas" DROP CONSTRAINT "coverage_areas_districtId_fkey";

-- AlterTable
ALTER TABLE "coverage_areas" DROP COLUMN "districtId";

-- AlterTable
ALTER TABLE "coverage_upazilla_or_thanas" ADD COLUMN     "districtId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "coverage_upazilla_or_thanas" ADD CONSTRAINT "coverage_upazilla_or_thanas_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "coverage_districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
