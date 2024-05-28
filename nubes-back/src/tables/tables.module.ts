import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';

@Module({
  providers: [TablesService],
  controllers: [TablesController],
})
export class TablesModule {}
