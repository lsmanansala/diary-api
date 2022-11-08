import { Module } from '@nestjs/common';
import { DiaryEntryController } from './diary-entry.controller';
import { DiaryEntryService } from './diary-entry.service';

@Module({
  controllers: [DiaryEntryController],
  providers: [DiaryEntryService],
})
export class DiaryEntryModule {}
