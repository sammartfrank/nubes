import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JWTAuthGuard as SupabaseAuthGuard } from 'nest-supabase-guard';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @UseGuards(SupabaseAuthGuard)
  @Get('/')
  async getAvailabilityByDate(@Query('date') date: Date) {
    return await this.availabilityService.getAvailabilityByDate({
      date,
    });
  }
}
