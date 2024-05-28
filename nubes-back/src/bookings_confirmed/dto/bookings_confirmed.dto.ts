import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class CreateBookingsConfirmedDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  payment_id: string;

  @IsNotEmpty()
  @IsNumber()
  payment_amount: number;

  @IsNotEmpty()
  @IsString()
  booking_id: string;

  @IsNotEmpty()
  @IsString()
  booking_name: string;

  @IsNotEmpty()
  @IsDate()
  booking_date: Date;

  @IsNotEmpty()
  @IsString()
  booking_time: string;
}
