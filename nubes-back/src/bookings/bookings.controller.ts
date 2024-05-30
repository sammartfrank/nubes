import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
  async getAllBookings() {
    return this.bookingsService.getAllBookings();
  }

  @UseGuards(SupabaseAuthGuard)
  @Post()
  async createBooking(@Body() createBookingDto: CreateBookingDto) {
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
