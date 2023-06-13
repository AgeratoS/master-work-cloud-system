/*
  Warnings:

  - You are about to drop the column `isActive` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `ServiceLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceMetric` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `externalUrl` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internalUrl` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServiceLog" DROP CONSTRAINT "ServiceLog_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceMetric" DROP CONSTRAINT "ServiceMetric_serviceId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "isActive",
DROP COLUMN "url",
ADD COLUMN     "externalUrl" TEXT NOT NULL,
ADD COLUMN     "internalUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "ServiceLog";

-- DropTable
DROP TABLE "ServiceMetric";
