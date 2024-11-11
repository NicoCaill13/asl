import { IsNotEmpty, IsNumber, IsOptional, IsDate, IsEnum } from 'class-validator';
import { InvoiceStatut } from '@prisma/client';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  range: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @ApiProperty()
  dueDate?: Date;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  contractId: number;

  @IsOptional()
  @ApiProperty()
  @IsEnum(InvoiceStatut)
  status?: InvoiceStatut;
}