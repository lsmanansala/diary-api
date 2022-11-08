import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { DiaryService } from './diary.service';
import { CreateDiaryDto, EditDiaryDto } from './dto';

@UseGuards(JwtGuard)
@Controller('diaries')
export class DiaryController {
  constructor(private diaryService: DiaryService) {}

  @Get()
  getDiaries(@GetUser('id') userId: number) {
    return this.diaryService.getDiaries(userId);
  }

  @Get(':id')
  getDiaryById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) diaryId: number,
  ) {
    return this.diaryService.getDiaryById(userId, diaryId);
  }

  @Post()
  createDiary(@GetUser('id') userId: number, @Body() dto: CreateDiaryDto) {
    return this.diaryService.createDiary(userId, dto);
  }

  @Patch(':id')
  editDiaryById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) diaryId: number,
    dto: EditDiaryDto,
  ) {
    return this.diaryService.editDiaryById(userId, diaryId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteDiaryById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) diaryId: number,
  ) {
    return this.diaryService.deleteDiaryById(userId, diaryId);
  }
}
