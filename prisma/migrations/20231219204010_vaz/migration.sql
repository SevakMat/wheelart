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
    "id" SERIAL NOT NULL,
    "sizeR" INTEGER NOT NULL,
    "studHoles" INTEGER NOT NULL,
    "pcd" INTEGER NOT NULL,
    "centerBore" VARCHAR(255) NOT NULL,
    "rimModel" VARCHAR(255) NOT NULL,
    "width" INTEGER NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "gram" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "rims_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tire" (
    "id" SERIAL NOT NULL,
    "tireWidth" INTEGER NOT NULL,
    "tireAspectRatio" INTEGER NOT NULL,
    "rimDiameter" INTEGER NOT NULL,
    "marka" VARCHAR(255) NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "tire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_verificationCode_key" ON "users"("verificationCode");

-- CreateIndex
CREATE INDEX "users_email_verificationCode_passwordResetToken_idx" ON "users"("email", "verificationCode", "passwordResetToken");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_verificationCode_passwordResetToken_key" ON "users"("email", "verificationCode", "passwordResetToken");
