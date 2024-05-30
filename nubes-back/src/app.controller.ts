import { Controller, Get, UseGuards } from '@nestjs/common';
import { JWTAuthGuard as SupabaseAuthGuard } from 'nest-supabase-guard';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(SupabaseAuthGuard)
  @Get()
  getAppVersion() {
    return 'version: 0.0.1';
  }
}
