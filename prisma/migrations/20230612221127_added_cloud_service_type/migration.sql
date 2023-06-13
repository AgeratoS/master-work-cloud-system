/*
  Warnings:

  - You are about to drop the column `internalUrl` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `verb` on the `Service` table. All the data in the column will be lost.
  - Added the required column `serviceSolutionId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "internalUrl",
DROP COLUMN "verb",
ADD COLUMN     "apiKey" TEXT,
ADD COLUMN     "appId" TEXT,
ADD COLUMN     "serviceSolutionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ServiceSolution" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ServiceSolution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceSolutionId_fkey" FOREIGN KEY ("serviceSolutionId") REFERENCES "ServiceSolution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
