/*
  Warnings:

  - You are about to drop the `DiaryEntry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DiaryEntry" DROP CONSTRAINT "DiaryEntry_diaryId_fkey";

-- DropTable
DROP TABLE "DiaryEntry";

-- CreateTable
CREATE TABLE "entries" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "diaryId" INTEGER NOT NULL,

    CONSTRAINT "entries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "entries" ADD CONSTRAINT "entries_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "diaries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
