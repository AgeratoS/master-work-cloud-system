-- CreateEnum
CREATE TYPE "HttpVerb" AS ENUM ('GET', 'POST', 'PUT', 'PATCH', 'DELETE');

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verb" "HttpVerb" NOT NULL DEFAULT 'GET';
