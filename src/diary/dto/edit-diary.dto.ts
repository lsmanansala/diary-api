import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditDiaryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
