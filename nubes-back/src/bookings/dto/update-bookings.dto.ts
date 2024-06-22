import { IsString, Matches, IsEnum, IsOptional } from 'class-validator';

import { TableType } from '../../../src/tables/tables.entity';
import { BookingStatusEnum } from '../../../custom.database.types';

export class UpdateBookingDto {
  @IsOptional()
  @IsString()
  booking_name?: string;

  @IsOptional()
  @IsString()
  booking_details?: string;

  @IsOptional()
  @IsEnum(BookingStatusEnum)
  booking_status?: BookingStatusEnum;

  @IsOptional()
  @IsString()
  booking_date?: string;

  @IsOptional()
  @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
    message: 'Booking time must be in the format HH:mm:ss',
  })
  booking_time?: string;

  @IsOptional()
  pax?: number;

  @IsOptional()
  @IsEnum(TableType)
  table_type?: TableType;

  @IsOptional()
  @IsString()
  tableId?: string;

  @IsOptional()
  @IsString()
  userId?: string;
}
