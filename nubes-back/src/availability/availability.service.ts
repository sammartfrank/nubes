import { Injectable } from '@nestjs/common';

import { supabase } from '../../src/cli';

@Injectable()
export class AvailabilityService {
  async getAvailabilityByDate({ date }: { date: Date }) {
    if (!date) {
      throw new Error('Date is required');
    }

    const { data: bookings, error } = await supabase
      .from('bookings')
      .select('*')
      .gte('booking_date', date)
      .order('booking_date', { ascending: true });

    if (error) {
      throw error;
    }

    return bookings;
  }
}
