import { Module } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { AvailabilityController } from './availability.controller';
import { BookingsService } from 'src/bookings/bookings.service';
import { TablesService } from 'src/tables/tables.service';

@Module({
  providers: [AvailabilityService, BookingsService, TablesService],
  controllers: [AvailabilityController],
})
export class AvailabilityModule {}
