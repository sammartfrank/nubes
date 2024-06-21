import { Injectable } from '@nestjs/common';

import { supabase } from '../cli/index';
import {
  Booking,
  BookingStatusEnum,
  BookingUpdate,
} from '../../custom.database.types';
import { CreateBookingDto } from './dto/create-bookings.dto';

@Injectable()
export class BookingsService {
  constructor() {}

  async getAllBookings() {
    const { data, error } = await supabase.from('bookings').select('*');
    if (error) {
      throw error;
    }
    return data as Booking[];
  }

  async getBookingsByUserAndStatus({
    userId = '',
    bookingStatus = BookingStatusEnum.PENDING,
  }: {
    userId: string;
    bookingStatus: string;
  }) {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('userId', userId)
      .eq('booking_status', bookingStatus)
      .order('created_at', { ascending: false });

    console.log({ data, error });

    if (error) {
      throw error;
    }
    return data as Booking[];
  }

  async createBooking(createBookingDto: CreateBookingDto) {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([{ ...createBookingDto }]);
      console.log(
        '🚀 ~ BookingsService ~ createBooking ~ data, error :',
        data,
        error,
      );

      if (error) {
        console.log('Booking Error:', error);
        throw new Error(`Failed to create booking: ${error.message}`);
      }

      return data;
    } catch (error) {
      console.log('Error:', error);
      throw error;
    }
  }

  async updateBooking(bookingId: string, updateBookingDto: BookingUpdate) {
    console.log(
      '🚀 ~ BookingsService ~ updateBooking ~ updateBookingDto:',
      updateBookingDto,
    );
    console.log('🚀 ~ BookingsService ~ updateBooking ~ bookingId:', bookingId);
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
    return data;
  }
}
