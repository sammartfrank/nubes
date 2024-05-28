import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JWTAuthGuard as SupabaseAuthGuard } from 'nest-supabase-guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(SupabaseAuthGuard)
  @Get()
  getAppVersion() {
    return 'version: 0.0.1';
  }
}
