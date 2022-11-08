import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CreateEntryDto } from './dto';
import { EntryService } from './entry.service';

@UseGuards(JwtGuard)
@Controller('diaries/:diaryId/entries')
export class EntryController {
  constructor(private entryService: EntryService) {}

  @Get()
  getEntries(@Param('diaryId', ParseIntPipe) diaryId: number) {
    return this.entryService.getEntries(diaryId);
  }

  @Get(':id')
  getEntryById(
    @Param('diaryId', ParseIntPipe) diaryId: number,
    @Param('id', ParseIntPipe) entryId: number,
  ) {
    return this.entryService.getEntryById(diaryId, entryId);
  }

  @Post()
  createEntry(
    @Param('diaryId', ParseIntPipe) diaryId: number,
    @Body() dto: CreateEntryDto,
  ) {
    return this.entryService.createEntry(diaryId, dto);
  }
}
