import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDiaryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
