import { Injectable } from '@nestjs/common';

import { sendEmail, supabase } from '../cli/index';
import { Booking, BookingInsert } from '../../custom.database.types';

@Injectable()
export class BookingsService {
  constructor() {}

  async getAllBookings() {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('booking_date', { ascending: false });

    if (error) {
      throw error;
    }
    return data as Booking[];
  }

  async createBooking(createBookingDto: BookingInsert) {
    try {
      const bookingResult = await supabase
        .from('bookings')
        .insert([{ ...createBookingDto }]);

      if (bookingResult.error) {
        console.log('Booking Error:', bookingResult.error);
        throw new Error(
          `Failed to create booking: ${bookingResult.error.message}`,
        );
      }

      const result = await sendEmail({
        subject: 'Booking Confirmation',
        config: {
          booking_name: createBookingDto.booking_name,
          booking_date: createBookingDto.booking_date,
          booking_time: createBookingDto.booking_time,
        },
      });

      console.log({ result });

      return {
        bookingResult,
        message: 'Booking created successfully',
      };
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  async updateBooking(bookingId: string, updateBookingDto: any) {
    const { data, error } = await supabase
      .from('bookings')
      .update(updateBookingDto)
      .eq('id', bookingId);

    if (error) {
      throw error;
    }

    return data;
  }

  async deleteBooking(bookingId: string) {
    const { data, error } = await supabase
      .from('bookings')
      .delete()
      .eq('id', bookingId);
    if (error) {
      throw error;
    }
    console.log('🚀 ~ BookingsService ~ deleteBooking ~ data:', data);

    return data;
  }
}
