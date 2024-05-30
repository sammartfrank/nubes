import { Controller, Get, Param } from '@nestjs/common';

import { TablesService } from './tables.service';

@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Get()
  async getAllTables() {
    return this.tablesService.getAllTables();
  }

  @Get(':id')
  async getTableById(@Param('id') id: string) {
    return this.tablesService.getTableById(id);
  }

  @Get('booking/:bookingId')
  async getTableByBookingId(@Param('bookingId') bookingId: string) {
    return this.tablesService.getTableByBookingId(bookingId);
  }

  @Get(':id/bookings')
  async getBookingsByTableId(@Param('id') id: string) {
    return this.tablesService.getBookingsByTableId(id);
  }
}
