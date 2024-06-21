import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import {
  PaymentMethodEnum,
  PaymentStatusEnum,
} from '../../../custom.database.types';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  payment_date: string;

  @IsNotEmpty()
  @IsString()
  external_status: string;

  @IsNotEmpty()
  @IsString()
  status_detail: string;

  @IsNotEmpty()
  @IsString()
  external_reference: string;

  @IsNotEmpty()
  @IsString()
  merchant_order_id: string;

  @IsNotEmpty()
  @IsString()
  payment_mepa_id: string;

  @IsNotEmpty()
  @IsString()
  collection_id: string;

  @IsNotEmpty()
  @IsString()
  collection_status: string;

  @IsNotEmpty()
  @IsString()
  bookingId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsEnum(PaymentMethodEnum)
  payment_method: PaymentMethodEnum;

  @IsNotEmpty()
  @IsEnum(PaymentStatusEnum)
  payment_status: PaymentStatusEnum;
}
