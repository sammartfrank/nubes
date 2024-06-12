import { IsNotEmpty, IsString, Matches, IsEnum } from 'class-validator';

import { TableType } from '../../../src/tables/tables.entity';
import { BookingStatusEnum } from '../../../custom.database.types';

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

  @IsNotEmpty({ message: 'Booking time is required' })
  @Matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
    message: 'Booking time must be in the format HH:mm:ss',
  })
  booking_time: string;

  @IsNotEmpty()
  pax: number;

  @IsNotEmpty()
  @IsEnum(TableType)
  table_type: TableType;

  @IsNotEmpty()
  @IsString()
  tableId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
