/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `metric` on the `Qualification` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Qualification` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name_en]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name_fa]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_en` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_fa` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_en` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_fa` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_en` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_fa` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metric_en` to the `Qualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metric_fa` to the `Qualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_en` to the `Qualification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_fa` to the `Qualification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Qualification" DROP CONSTRAINT "Qualification_productId_fkey";

-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_fa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "description_en" TEXT NOT NULL,
ADD COLUMN     "description_fa" TEXT NOT NULL,
ADD COLUMN     "title_en" TEXT NOT NULL,
ADD COLUMN     "title_fa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Qualification" DROP COLUMN "metric",
DROP COLUMN "value",
ADD COLUMN     "metric_en" TEXT NOT NULL,
ADD COLUMN     "metric_fa" TEXT NOT NULL,
ADD COLUMN     "value_en" TEXT NOT NULL,
ADD COLUMN     "value_fa" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_en_key" ON "Category"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_fa_key" ON "Category"("name_fa");

-- AddForeignKey
ALTER TABLE "Qualification" ADD CONSTRAINT "Qualification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
