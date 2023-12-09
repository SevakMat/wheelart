-- CreateEnum
CREATE TYPE "RoleEnumType" AS ENUM ('user', 'admin');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT DEFAULT 'default.png',
    "verified" BOOLEAN DEFAULT false,
    "password" TEXT NOT NULL,
    "role" "RoleEnumType" DEFAULT 'user',
    "verificationCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "provider" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rims" (
    "id" TEXT NOT NULL,
    "rimModel" VARCHAR(255) NOT NULL,
    "size" INTEGER NOT NULL,
    "centerDistance" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "bore" INTEGER NOT NULL,
    "etOffset" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "ean" INTEGER NOT NULL,
    "gram" INTEGER NOT NULL,
    "packIncludes" VARCHAR(255) NOT NULL,
    "tmpsCompatible" BOOLEAN NOT NULL,
    "state" VARCHAR(255) NOT NULL,

    CONSTRAINT "rims_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_verificationCode_key" ON "users"("verificationCode");

-- CreateIndex
CREATE INDEX "users_email_verificationCode_passwordResetToken_idx" ON "users"("email", "verificationCode", "passwordResetToken");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_verificationCode_passwordResetToken_key" ON "users"("email", "verificationCode", "passwordResetToken");
