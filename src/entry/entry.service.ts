import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEntryDto } from './dto';

@Injectable()
export class EntryService {
  constructor(private prisma: PrismaService) {}

  async getEntries(diaryId: number) {
    return this.prisma.entry.findMany({
      where: {
        diaryId,
      },
    });
  }

  getEntryById(diaryId: number, entryId: number) {
    return this.prisma.entry.findFirst({
      where: {
        id: entryId,
        diaryId,
      },
    });
  }

  async createEntry(diaryId: number, dto: CreateEntryDto) {
    const entry = await this.prisma.entry.create({
      data: {
        diaryId,
        ...dto,
      },
    });
    return entry;
  }
}
