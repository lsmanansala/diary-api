import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDiaryEntryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  text: string;
}
