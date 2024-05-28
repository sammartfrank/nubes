import { Injectable } from '@nestjs/common';

import { supabase } from 'cli';

@Injectable()
export class AvailabilityService {
  async getAvailabilityByDate({ date }: { date: Date }) {
    if (!date) {
      throw new Error('Date is required');
    }

    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('booking_date', date);

    if (error) {
      throw error;
    }

    return bookings;
  }
}
