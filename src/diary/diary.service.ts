import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDiaryDto, EditDiaryDto } from './dto';

@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaService) {}

  async getDiaries(userId: number) {
    return this.prisma.diary.findMany({
      where: {
        userId,
      },
    });
  }

  async getDiaryById(userId: number, diaryId: number) {
    return this.prisma.diary.findFirst({
      where: {
        id: diaryId,
        userId,
      },
    });
  }

  async createDiary(userId: number, dto: CreateDiaryDto) {
    const diary = await this.prisma.diary.create({
      data: {
        userId,
        ...dto,
      },
    });
    return diary;
  }

  async editDiaryById(userId: number, diaryId: number, dto: EditDiaryDto) {
    const diary = await this.prisma.diary.findUnique({
      where: {
        id: diaryId,
      },
    });

    if (!diary || diary.userId !== userId)
      throw new ForbiddenException('Access to resource denied');

    return this.prisma.diary.update({
      where: {
        id: diary.id,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteDiaryById(userId: number, diaryId: number) {
    const diary = await this.prisma.diary.findUnique({
      where: {
        id: diaryId,
      },
    });

    if (!diary || diary.userId !== userId)
      throw new ForbiddenException('Access to resource denied');
  }
}
