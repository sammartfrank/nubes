import { Injectable } from '@nestjs/common';
import { Payment } from './payment.entity';
import { supabase } from '../cli/index';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor() {}
  async createPayment(createdPayment: CreatePaymentDto): Promise<Payment> {
    try {
      const { data, error } = await supabase
        .from('payment')
        .insert([{ ...createdPayment }]);

      if (error) {
        console.log('Payment Error:', error);
        throw new Error(`Failed to create payment: ${error.message}`);
      }
      console.log('Payment:', data);
      return data as Payment;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }
}
