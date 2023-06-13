-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "internalUrl" DROP NOT NULL,
ALTER COLUMN "internalUrl" SET DEFAULT '';
