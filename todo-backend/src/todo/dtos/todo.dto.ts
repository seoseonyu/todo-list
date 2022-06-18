import {
  IsBIC,
  IsBoolean,
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class TodoDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  title: string;

  @IsString()
  @Transform((data) => data.value || '-')
  description: string;

  @IsBoolean()
  @Transform((data) => data.value || false)
  isChecked: boolean;

  @IsDateString()
  @IsOptional()
  start: Date | null;

  @IsDateString()
  @IsOptional()
  end: Date | null;

  @IsDateString()
  @IsOptional()
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updatedAt: Date;
}
