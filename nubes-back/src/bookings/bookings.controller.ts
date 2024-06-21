import {
  Body,
  Controller,
  Delete,
  Param,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JWTAuthGuard as SupabaseAuthGuard } from 'nest-supabase-guard';

import { BookingsService } from './bookings.service';
import { BookingUpdate } from '../../custom.database.types';
import { CreateBookingDto } from './dto/create-bookings.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @UseGuards(SupabaseAuthGuard)
  @Get()
  async getAllBookings(
    @Query('userId') userId?: string,
    @Query('booking_status') bookingStatus?: string,
  ) {
    if (userId && bookingStatus) {
      return this.bookingsService.getBookingsByUserAndStatus({
        userId,
        bookingStatus,
      });
    } else {
      console.log({ allBookings: true });
      return this.bookingsService.getAllBookings();
    }
  }
  @UseGuards(SupabaseAuthGuard)
  @Post()
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
    console.log(
      '🚀 ~ BookingsController ~ createBooking ~ createBookingDto:',
      createBookingDto,
    );
    return this.bookingsService.createBooking(createBookingDto);
  }
  @UseGuards(SupabaseAuthGuard)
  @Patch(':bookingId')
  async updateBooking(
    @Param('bookingId') bookingId: string,
    @Body() updateBookingDto: BookingUpdate,
  ) {
    return this.bookingsService.updateBooking(bookingId, updateBookingDto);
  }

  @UseGuards(SupabaseAuthGuard)
  @Delete(':bookingId')
  async deleteBooking(@Param('bookingId') bookingId: string) {
    return this.bookingsService.deleteBooking(bookingId);
  }
}
