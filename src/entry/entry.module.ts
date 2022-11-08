import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
