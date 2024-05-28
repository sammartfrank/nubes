import { PaymentMethodEnum, PaymentStatusEnum } from '@/custom.database.types';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  booking_id: string;

  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  payment_id: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsDate()
  payment_date: Date;

  @IsNotEmpty()
  @IsEnum({
    type: 'enum',
    enum: PaymentMethodEnum,
    default: PaymentMethodEnum.CARD,
  })
  payment_method: PaymentMethodEnum.CARD;

  @IsNotEmpty()
  @IsEnum({
    type: 'enum',
    enum: PaymentStatusEnum,
    default: PaymentStatusEnum,
  })
  payment_status: PaymentStatusEnum;
}
