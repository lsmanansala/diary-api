-- CreateTable
CREATE TABLE "DiaryEntry" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "diaryId" INTEGER NOT NULL,

    CONSTRAINT "DiaryEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DiaryEntry" ADD CONSTRAINT "DiaryEntry_diaryId_fkey" FOREIGN KEY ("diaryId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
