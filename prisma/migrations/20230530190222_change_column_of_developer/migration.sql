/*
  Warnings:

  - You are about to drop the column `passwd` on the `Developer` table. All the data in the column will be lost.
  - Added the required column `password` to the `Developer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Developer" DROP COLUMN "passwd",
ADD COLUMN     "password" TEXT NOT NULL;
