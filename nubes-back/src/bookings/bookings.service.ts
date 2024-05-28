import { Injectable } from '@nestjs/common';
import { supabase } from '@/cli';
import { Booking } from 'custom.database.types';
import { CreateBookingDto } from './dto/create-bookings.dto';

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

  async createBooking(createBookingDto: CreateBookingDto) {
    try {
      const bookingResult = await supabase
        .from('bookings')
        .insert([{ ...createBookingDto }]);

      console.log('Booking Result:', bookingResult);

      if (bookingResult.error) {
        console.log('Booking Error:', bookingResult.error);
        throw new Error(
          `Failed to create booking: ${bookingResult.error.message}`,
        );
      }

      return { bookingResult };
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
