/*
  Warnings:

  - You are about to drop the column `publicId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `productStatus` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[public_id]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `public_id` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "publicId",
ADD COLUMN     "public_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productStatus",
ADD COLUMN     "status" "ProductStatus" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_public_id_key" ON "Image"("public_id");
