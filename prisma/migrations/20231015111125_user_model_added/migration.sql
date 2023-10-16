-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('super_admin', 'admin', 'customer', 'user');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL DEFAULT 'user',
    "contactNo" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "thana" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_contactNo_key" ON "users"("contactNo");
