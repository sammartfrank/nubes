import { IsNotEmpty, IsString, Matches, IsEnum } from 'class-validator';

import { TableType } from 'src/tables/tables.entity';
import { BookingStatusEnum } from '@/custom.database.types';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsString()
  booking_name: string;

  @IsString()
  booking_details: string;

  @IsNotEmpty()
  @IsEnum(BookingStatusEnum)
  booking_status: BookingStatusEnum;

  @IsNotEmpty()
  @IsString()
  booking_date: string;

  @IsNotEmpty()
  @Matches(/^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9]$/, {
    message: 'Time must be in the format hh:mm:ss',
  })
  booking_time: string;

  @IsNotEmpty()
  pax: number;

  @IsNotEmpty()
  @IsEnum(TableType)
  table_type: TableType;

  @IsNotEmpty()
  @IsString()
  table_id: string;

  @IsNotEmpty()
  @IsString()
  user_id: string;
}
