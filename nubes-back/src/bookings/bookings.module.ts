import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TablesService } from 'src/tables/tables.service';

@Module({
  providers: [BookingsService, TablesService],
  controllers: [BookingsController],
})
export class BookingsModule {}
