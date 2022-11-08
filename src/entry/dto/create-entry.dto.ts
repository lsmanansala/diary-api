import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEntryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  text: string;
}
