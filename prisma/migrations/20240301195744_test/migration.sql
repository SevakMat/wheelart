-- CreateEnum
CREATE TYPE "RoleEnumType" AS ENUM ('user', 'admin');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uuid" VARCHAR(40) NOT NULL,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "phone_number" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "RoleEnumType" NOT NULL DEFAULT 'user',
    "last_active" TIMESTAMP(3),
    "login_count" INTEGER NOT NULL DEFAULT 0,
    "activation_date" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "passwordResetToken" TEXT,
    "verificationCode" TEXT,
    "identity_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "tireId" INTEGER NOT NULL,
    "rimId" INTEGER NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
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
    "score" INTEGER NOT NULL,

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
    "imageUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "tire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_verificationCode_key" ON "User"("verificationCode");

-- CreateIndex
CREATE INDEX "User_email_verificationCode_passwordResetToken_idx" ON "User"("email", "verificationCode", "passwordResetToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_verificationCode_passwordResetToken_key" ON "User"("email", "verificationCode", "passwordResetToken");

-- CreateIndex
CREATE INDEX "Basket_userId_idx" ON "Basket"("userId");

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_tireId_fkey" FOREIGN KEY ("tireId") REFERENCES "tire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_rimId_fkey" FOREIGN KEY ("rimId") REFERENCES "rims"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
