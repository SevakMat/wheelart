/*
  Warnings:

  - Added the required column `imageUrl` to the `tire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tire" ADD COLUMN     "imageUrl" VARCHAR(255) NOT NULL;
