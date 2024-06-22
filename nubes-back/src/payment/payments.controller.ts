import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment } from './payment.entity';
import { JWTAuthGuard as SupabaseAuthGuard } from 'nest-supabase-guard';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(SupabaseAuthGuard)
  @Post()
  async create(@Body() paymentData: CreatePaymentDto): Promise<Payment> {
    return this.paymentsService.createPayment(paymentData);
  }
}
