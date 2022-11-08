import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DiaryModule } from './diary/diary.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DiaryEntryModule } from './diary-entry/diary-entry.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    DiaryModule,
    PrismaModule,
    DiaryEntryModule,
  ],
})
export class AppModule {}
