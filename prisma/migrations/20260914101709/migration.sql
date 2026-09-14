/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `prebuilt_pcs` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "prebuilt_pcs" DROP COLUMN "imageUrl",
ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "products" DROP COLUMN "imageUrl",
ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "marketingContent" JSONB;
