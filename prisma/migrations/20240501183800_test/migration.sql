-- CreateEnum
CREATE TYPE "RoleEnumType" AS ENUM ('user', 'admin');

-- CreateEnum
CREATE TYPE "OrderStatusType" AS ENUM ('CREATED', 'PROGRESS', 'DONE', 'CANCEL');

-- CreateEnum
CREATE TYPE "OrderTypeEnum" AS ENUM ('RIM', 'TIRE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uuid" VARCHAR(40) NOT NULL,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "phone_number" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "role" "RoleEnumType" NOT NULL DEFAULT 'user',
    "last_active" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "passwordResetToken" TEXT,
    "verificationCode" TEXT,
    "google_id" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rims" (
    "id" SERIAL NOT NULL,
    "sizeR" INTEGER NOT NULL,
    "studHoles" INTEGER NOT NULL,
    "pcd" INTEGER NOT NULL,
    "centerBore" DOUBLE PRECISION NOT NULL,
    "rimModel" VARCHAR(255) NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "gram" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(1000) NOT NULL,
    "price" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,

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
    "price" INTEGER NOT NULL,
    "imageUrl" VARCHAR(1000) NOT NULL,

    CONSTRAINT "tire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderType" "OrderTypeEnum" NOT NULL,
    "status" "OrderStatusType" NOT NULL DEFAULT 'CREATED',
    "itemId" INTEGER NOT NULL,
    "item_count" INTEGER NOT NULL,
    "sessionId" VARCHAR(255),
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "OrderUser_pkey" PRIMARY KEY ("id")
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
CREATE INDEX "Order_itemId_idx" ON "Order"("itemId");

-- CreateIndex
CREATE INDEX "OrderUser_userId_idx" ON "OrderUser"("userId");

-- CreateIndex
CREATE INDEX "OrderUser_orderId_idx" ON "OrderUser"("orderId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "tire_order_item_id_fkey" FOREIGN KEY ("itemId") REFERENCES "tire"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "rims_order_item_id_fkey" FOREIGN KEY ("itemId") REFERENCES "rims"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderUser" ADD CONSTRAINT "order_user_user_id_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderUser" ADD CONSTRAINT "order_user_order_id_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
